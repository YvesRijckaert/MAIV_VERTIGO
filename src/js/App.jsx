import React, {Component} from "react";
import Quiz from "./Quiz.jsx";
import Resultaat from "./Resultaat.jsx";
import update from 'react-addons-update';
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
      answersCount: {
        Personage1: 0,
        Personage2: 0,
        Personage3: 0
      },
      resultaat: ``
    };
    this.handleAntwoordSelected = this.handleAntwoordSelected.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
  }

  componentDidMount() {
    fetch(`./data/quizVragen.json`)
      .then(responseObject => responseObject.json())
      .then(this.parseJSON);
  }

  shuffleArray(array) {
    console.log(`hallo!`);
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  parseJSON(data) {
    quizVragen = data;
    const shuffledAntwoordOpties = quizVragen.map(vraag =>
      this.shuffleArray(vraag.antwoorden)
    );
    this.setState({
      vraag: data[0].vraag,
      antwoordOpties: shuffledAntwoordOpties[0]
    });
  }

  setUserAnswer(antwoord) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [antwoord]: {$apply: currentValue => currentValue + 1}
    });
    this.setState({
      answersCount: updatedAnswersCount,
      antwoord: antwoord
    });
  }

  setNextQuestion() {
    const teller = this.state.teller + 1;
    const vraagId = this.state.vraagId + 1;
    this.setState({
      teller: teller,
      vraagId: vraagId,
      vraag: quizVragen[teller].vraag,
      antwoordOpties: quizVragen[teller].antwoorden,
      antwoord: ``
    });
  }

  setResults(resultaat) {
    if (resultaat.length === 1) {
      this.setState({resultaat: resultaat[0]});
    } else {
      this.setState({resultaat: `Onbepaald... Probeer aub opnieuw!`});
    }
  }

  getResults() {
    //calculates which answer type (Personage1, Personage2 of Personage3) has the highest number - aka the quiz result.
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount); //return an array of strings that represent all the properties of an object
    const answersCountValues = answersCountKeys.map(answerCountKey => answersCount[answerCountKey]); //mapping over the array to return an array of the values
    const maxAnswerCount = Math.max.apply(null, answersCountValues); //Then we can get the highest number of that array with Math.max.apply
    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount); //calculate which key has a value equal to the maxAnswerCount using the filter method and return it
  }

  handleAntwoordSelected(e) {
    this.setUserAnswer(e.currentTarget.value);
    if (this.state.vraagId < quizVragen.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  renderQuiz() {
    const {antwoord, antwoordOpties, vraagId, vraag} = this.state;
    return (
      <Quiz
        antwoord={antwoord}
        antwoordOpties={antwoordOpties}
        vraagId={vraagId}
        vraag={vraag}
        vraagTotaal={quizVragen.length}
        onAntwoordSelected={this.handleAntwoordSelected}
      />
    );
  }

  renderResult() {
    const {resultaat} = this.state;
    return (
      <Resultaat resultaat={resultaat} />
    );
  }

  render() {
    const {resultaat} = this.state;
    return (
      <div>
        <div>
          <h2>Quiz Sofia Copolla</h2>
        </div>
        {resultaat ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;
