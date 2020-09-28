import React from "react"

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.waveType = (props && props.waveType) || "sine";
    this.playingTones = [];
  }

  componentDidMount() {
    console.log("Synth mounted.");
  }

  initAudioCtx() {
    if (!this.audioCtx) {
      this.audioCtx = new window.AudioContext();
      this.gainNode = this.audioCtx.createGain();    
      this.gainNode.connect(this.audioCtx.destination);
      console.log("Synth initialized.")
    }
  }

  playTone(pitch) {
    if (!this.audioCtx) {
      throw new Error("Must call initAudioCtx before calling playTone.")
    }

    var oscillator = this.audioCtx.createOscillator();

    oscillator.type = this.waveType; // TODO: get waveType working
    oscillator.frequency.value = pitch;

    // Ensure that the amplitudes never add above 1 by setting the gain of each to 1/(number of oscillators)
    this.gainNode.gain.value = 1 / (this.playingTones.length + 1);
    oscillator.connect(this.gainNode);

    oscillator.start(this.audioCtx.currentTime);

    this.playingTones.push({pitch : pitch, oscillator : oscillator});
  }

  stopTone(pitch) {
    // Could use https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    // But it finds first (or any one) object. I might? want to stop all of a given pitch if there are multiple.
    // But there shouldn't be multiple. I could enforce that by doing a pitch to oscilator map
    this.playingTones.forEach((tone) => {
      if (tone.pitch === pitch) {
        tone.oscillator.stop(this.audioCtx.currentTime);
      }
    })

    // Removed stopped tones from the array
    this.playingTones = this.playingTones.filter(tone => tone.pitch !== pitch);
  }

  stopAll() {
    this.playingTones.forEach((tone) => {
      tone.oscillator.stop(this.audioCtx.currentTime);
    });
  }

  render() {
    return null;
  }
}

export default Synth
