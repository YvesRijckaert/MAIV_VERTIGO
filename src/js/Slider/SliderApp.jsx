import React, {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teller: 0,
      vraagId: 1,
      vraag: ``,
      antwoordOpties: [],
      antwoord: ``,
      answersCount: {
        Personage1: 0,
        Personage2: 0,
        Personage3: 0
      },
      resultaat: ``
    };
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default App;
