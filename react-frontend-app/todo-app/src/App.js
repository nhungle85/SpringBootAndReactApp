import './App.css';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
     My Todo Application
     <FirstComponent/>
     <SecondComponent/>
     <ThirdComponent />
    </div>
  );
}

function FirstComponent() {
  return (
    <div className="firstComponent">First Component - This is a functional component</div>
  );
}

function SecondComponent() {
  return (
    <div className="secondComponent">Second Component  - This is a functional component</div>
  );
}

class ThirdComponent extends Component {
  render() {
    return (
      <div className="thirdComponent">Third Component - This is a class component</div>
    );
  }
}
export default App;
