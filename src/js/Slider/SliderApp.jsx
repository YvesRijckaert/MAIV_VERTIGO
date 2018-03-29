import React, {Component} from "react";

class Carousel extends Component {
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
      <div className="carousel-container">
        <button className="carousel-nav carousel-left-nav"></button>
        <div className="carousel-viewport"></div>
        <button className="carousel-nav carousel-right-nav"></button>
      </div>
    );
  }
}

export default Carousel;
