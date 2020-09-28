import React from "react"


class ToneBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.children,
      pitch: props.pitch,
    };
  }
 
  render() {
    return (
      <button
        onTouchStart={(e) => {
          this.props.onMouseDown()
          e.preventDefault()
        }}
        onPointerDown={(e) => {
          this.props.onMouseDown()
        }}
        onPointerUp={()=>{
          this.props.onMouseUp()}}
        onTouchEnd={() => {
          this.props.onMouseUp();
        }}
        onTouchCancel={() => {
          this.props.onMouseUp();
        }}       

        style={{"width": "100%", "height":"100%","user-select": "none","touch-action":"none"}} // TODO: Export this to CSS
        >
        {this.state.name}
      </button>
    );
  }
}

export default ToneBtn
