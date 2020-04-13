import React from "react"
import Board from "./board"
import ToneBtn from "./tonebutton"
import Synth from "./synth";
import boardStyles from "./board-square.module.css"


class BoardSquare extends Board {


  getToneButton(name, pitch) {
    return (
      <ToneBtn
        onMouseDown={() => this.playTone(pitch)}
        onMouseUp={() => this.stopTone(pitch)}
        pitch={pitch}
        key={pitch}
      >
        {name}
      </ToneBtn>
    );
  };


  render() {
   
    function noteNumberToPitch(number) {
      return 440 * 2 ** ((number - 69) / 12)
    }

    return (
      <div className="board" className={boardStyles.container}>
        <Synth ref={this.synth} waveType={"sine"} />

        <div className={boardStyles.row}>
          <div className={boardStyles.rowItem}>{this.getToneButton("F", noteNumberToPitch(65))}</div>
          <div className={boardStyles.rowItem}>{this.getToneButton("♯/♭", noteNumberToPitch(66))}</div>
          <div className={boardStyles.rowItem}>{this.getToneButton("G", noteNumberToPitch(67))}</div>
          <div className={boardStyles.rowItem}>{this.getToneButton("♯/♭", noteNumberToPitch(68))}</div>
        </div>
        <div className={boardStyles.row}>
          <div className={boardStyles.rowItem}>{this.getToneButton("E", noteNumberToPitch(76))}</div>
          <div className={boardStyles.spacer}></div>
          <div className={boardStyles.rowItem}>{this.getToneButton("A", noteNumberToPitch(69))}</div>
        </div>
        <div className={boardStyles.row}>
          <div className={boardStyles.rowItem}>{this.getToneButton("♯/♭", noteNumberToPitch(75))}</div>
          <div className={boardStyles.spacer}></div>
          <div className={boardStyles.rowItem}>{this.getToneButton("♯/♭", noteNumberToPitch(70))}</div>
        </div>
        <div className={boardStyles.row}>
          <div className={boardStyles.rowItem}>{this.getToneButton("D", noteNumberToPitch(74))}</div>
          <div className={boardStyles.rowItem}>{this.getToneButton("♯/♭", noteNumberToPitch(73))}</div>
          <div className={boardStyles.rowItem}>{this.getToneButton("C", noteNumberToPitch(72))}</div>
          <div className={boardStyles.rowItem}>{this.getToneButton("B", noteNumberToPitch(71))}</div>
        </div>
      </div>
    );
  }
}

export default BoardSquare
