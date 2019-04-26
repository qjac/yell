# yell
Let it out. Yell is a web app to visualize your sound. And a personal learning playground for the web audio api and dynamic canvas drawing.

## Resources and Tutorials
Credit where credit is due. Here are the sources I used to figure this out:
- <https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API>
- <https://developers.google.com/web/fundamentals/media/recording-audio/>
- <https://www.html5rocks.com/en/tutorials/getusermedia/intro/>
- <https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/fftSize>
- <https://stackoverflow.com/questions/33322681/checking-microphone-volume-in-javascript>

## Process, Stumbling Blocks, and Things Learned Along the Way
- Quality tutorials are difficult to find—especially in regards to accessing the microphone and getting data from it (Thanks to some pioneers, I pieced it together! ☝️)
- A lack of audio processing knowledge makes understanding the api difficult. The data I need, seems straightforward, but how do I access it?
- Getting access to user media (microphone and video) was a delight. Straighforward and it just worked. Plus it's fun! Think of all the cool things you can build with user generated input!
- Getting the volume was trickier—fewer resources to reference. And the resources I found were contradictory.
  + Following this method (<https://stackoverflow.com/questions/33322681/checking-microphone-volume-in-javascript>), I got volume to log, but with issues.
  + It keeps freezing my browser (not crashing, just clogging it up). There's gotta be a better way...I don't need that fine of data and I'm not actually processing, modifying, or outputting the audio
  + `create​Script​Processor()` is deprecated! [Note from MDN](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createScriptProcessor): "As of the August 29 2014 Web Audio API spec publication, this feature has been marked as deprecated, and is soon to be replaced by AudioWorklet."
  + As of April 26 2019, Audio Worklet is still a [W3C Editor's Draft](https://webaudio.github.io/web-audio-api/#AudioWorklet).
  + So what do I use now? That won't keep bogging down my browser? 