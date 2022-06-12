import React from 'react';
import './ActiveQuiz.css'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => {
    return (
        <div className='ActiveQuiz'>
            <p className='Question'>
                <strong>
                    <span>{props.actiQuestion}. </span>
                    {props.question}
                </strong>
                <small>{props.actiQuestion} из {props.questionLength}</small>
            </p>

            <AnswersList
                answers={props.answers}
                answerQuestion={props.answerQuestion}
                state={props.state}
            />
        </div>
    );
};

export default ActiveQuiz;