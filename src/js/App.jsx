import React, {Component} from "react";
import Quiz from "./Quiz.jsx";

let quizVragen = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teller: 0,
      vraagId: 1,
      vraag: ``,
      antwoordOpties: [],
      antwoord: ``,
      antwoordMogelijkheden: {
        Personage1: 0,
        Personage2: 0,
        Personage3: 0
      },
      resultaat: ``
    };
    this.handleAntwoordSelected = this.handleAntwoordSelected.bind(this);
  }

  componentDidMount() {
    fetch(`./data/quizVragen.json`)
      .then(responseObject => responseObject.json())
      .then(this.parseJSON);
  }

  parseJSON(data) {
    quizVragen = data;
    const shuffledAntwoordMogelijkheden = quizVragen.map(vraag =>
      this.shuffleArray(vraag.antwoorden)
    );
    this.setState({
      vraag: quizVragen[0].vraag,
      antwoordMogelijkheden: shuffledAntwoordMogelijkheden[0]
    });
  }

  shuffleArray(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  render() {
    const {antwoord, vraagId, vraag, antwoordMogelijkheden} = this.state;
    return (
      <div>
        <Quiz
          antwoord={antwoord}
          antwoordMogelijkheden={antwoordMogelijkheden}
          vraagId={vraagId}
          vraag={vraag}
          vraagTotaal={quizVragen.length}
          onAntwoordSelected={this.handleAntwoordSelected}
        />
      </div>
    );
  }
}

export default App;
