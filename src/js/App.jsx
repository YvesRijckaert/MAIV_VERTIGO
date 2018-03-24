import React, {Component} from "react";
import Quiz from "./Quiz.jsx";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch(`./data/quizVragen.json`)
      .then(responseObject => responseObject.json())
      .then(this.parseJSON);
  }

  parseJSON(data) {
    console.log(data);
  }

  render() {
    return (
      <div>
        <Quiz />
      </div>
    );
  }
}

export default App;
