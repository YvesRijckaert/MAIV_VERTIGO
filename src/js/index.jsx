import React from 'react';
import ReactDOM from 'react-dom';
import SliderApp from './Slider/SliderApp.jsx';
import QuizApp from './Quiz/QuizApp.jsx';

ReactDOM.render(<QuizApp />, document.getElementById(`reactcontent`));
ReactDOM.render(<SliderApp />, document.getElementById(`slider`));
