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
        onPointerDown={() => this.props.onMouseDown()}
        onPointerUp={()=>this.props.onMouseUp()}
        style={{width: "9ch",height: "9ch", "user-select": "none"}} // TODO: Export this to CSS
        >
        {this.state.name}
      </button>
    );
  }
}

export default ToneBtn
