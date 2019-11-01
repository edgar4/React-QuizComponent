import React, {component} from 'react';

let quizData = require('./quiz_data');

class Quiz extends component {

    constructor(props) {
        super(props);
        this.state = {quiz_position: 1};

    }

    render() {

        return '<div>' +
            '<div class="QuizeQuestion">{{quizData.quiz_questions[0].instruction_text}}</div>'
            + '</div>';
    }

}

export default Quiz;

