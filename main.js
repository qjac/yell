// Basics for this demo come from: 
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API
// https://developers.google.com/web/fundamentals/media/recording-audio/
// https://www.html5rocks.com/en/tutorials/getusermedia/intro/
// https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/fftSize
// https://stackoverflow.com/questions/33322681/checking-microphone-volume-in-javascript

// detect if browser supports getUserMedia
const hasGetUserMedia = () => {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

// get access to input device. will ask user for permission
// const getInput = () => {
  navigator.mediaDevices.getUserMedia({audio:true}).
  then((stream) => {
    // for legacy browsers
    const context = new (window.AudioContext || window.webkitAudioContext)();

    //  To extract data from your audio source, you need an AnalyserNode, which is created using the AudioContext.createAnalyser() method, for example:
    const analyser = context.createAnalyser();
    const microphone = context.createMediaStreamSource(stream);
    
    // createScriptProcessor is deprecated...replacement? not released yet...
    const jsNode = context.createScriptProcessor(2048, 1, 1);
    analyser.smoothingTimeConstant = 0.8;
    analyser.fftSize = 2048; //default, but every tutorial specifies...

    microphone.connect(analyser);
    analyser.connect(jsNode);

// onaudioprocess is deprecated...replacement is elusive
    jsNode.onaudioprocess = () => {
      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(dataArray);

      let values = 0;

      const length = dataArray.length;

      for (let i = 0; i < length; i++) {
        values += (dataArray[i]);
        const average = Math.round(values / length);

        console.log('index ' + dataArray[i] + ': ' + average);

        // runs. loops seem asynch 
        // and it keeps freezing my browser. probz cuz it's deprecated...
      }

// pull out volume finder into seperate function

    }

  })
// }


// grab the sound data 
  // const bufferLength = analyser.fftSize;
  // const dataArray = new Uint8Array(bufferLength);
  // analyser.getByteTimeDomainData(dataArray); // fill the Uint8Array with data returned from getByteTimeDomainData()
  // const getVolume = (dataArray) => {
    
  // }

if (hasGetUserMedia()) {
    console.log('yay');
  // getInput();
  } else {
    console.log('sorry. no user media for you');
  }



