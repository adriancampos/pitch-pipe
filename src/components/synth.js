import React from "react"

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.waveType = (props && props.waveType) || "sine";
    this.playingTones = [];
  }

  componentDidMount() {
    this.audioCtx = new window.AudioContext();
    console.log("Synth mounted.");
  }

  playTone(pitch) {
    // TODO: I should nicely handle multiple tones together
    var oscillator = this.audioCtx.createOscillator();
    oscillator.connect(this.audioCtx.destination);

    oscillator.type = this.waveType; // TODO: get waveType working
    oscillator.frequency.value = pitch;
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
