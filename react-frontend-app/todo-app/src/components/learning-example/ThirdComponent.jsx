import { Component } from "react";

export default class ThirdComponent extends Component {
    render() {
      return (
        <div className="thirdComponent">Third Component - This is a class component</div>
      );
    }
}

export function FourthComponent() {
    return (
        <div>This is fourth component not export by default</div>
    )
}