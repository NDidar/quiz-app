import React, {Component} from "react";
import '../Quiz/Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {

    state = {
        results: {},
        finishedQuiz: false,
        actionQuestion: 0,
        stateQuestion: null,
        quiz: [
            {
                question: 'Какого цвета неба?',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {text: 'Желтый', id: 1},
                    {text: 'Синий', id: 2},
                    {text: 'Красный', id: 3},
                    {text: 'Зеленый', id: 4},
                ]
            },
            {
                question: 'Самый дорогой автомобиль в мире?',
                rightAnswerId: 1,
                id: 2,
                answers: [
                    {text: 'Buggati', id: 1},
                    {text: 'Ferrari', id: 2},
                    {text: 'Lamborghini', id: 3},
                    {text: 'Lada', id: 4},
                ]
            }
        ]
    }

    answerQuestion = answerId => {
        if (this.state.stateQuestion){
            const key = Object.keys(this.state.stateQuestion)
            if (this.state.stateQuestion[key] === 'success'){
                return
            }
        }

        const question = this.state.quiz[this.state.actionQuestion]
        const results = this.state.results

        if(question.rightAnswerId === answerId) {
            if(!this.state.results[question.id]) {
                results[question.id] = 'success'
            }
            this.setState({
                stateQuestion: {[answerId]: 'success'},
                results
            })
            const timeOut = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        finishedQuiz: true
                    })
                } else {
                    this.setState({
                        actionQuestion: this.state.actionQuestion + 1,
                        stateQuestion: null
                    })
                }

                window.clearTimeout(timeOut)
            },1000)

        }else {
            results[question.id] = 'error'
            this.setState({
                stateQuestion: {[answerId]: 'error'},
                results
            })
        }
    }

    onRetryHandler = () => {
       this.setState({
           finishedQuiz: false,
           actionQuestion: 0,
           stateQuestion: null
       })
    }

    render() {
        return (
            <div className='Quiz'>
                <div className='QuizWrapper'>
                    <h1>Ответьте на все вопросы</h1>

                    { this.state.finishedQuiz ?
                        <FinishedQuiz
                            quiz={this.state.quiz}
                            results={this.state.results}
                            onRetry={this.onRetryHandler}
                        />
                        :
                        <ActiveQuiz
                            answers={this.state.quiz[this.state.actionQuestion].answers}
                            question={this.state.quiz[this.state.actionQuestion].question}
                            answerQuestion={this.answerQuestion}
                            questionLength={this.state.quiz.length}
                            actiQuestion={this.state.actionQuestion + 1}
                            state={this.state.stateQuestion}
                        />
                    }

                </div>
            </div>
        )
}

    isQuizFinished() {
        return this.state.actionQuestion + 1 === this.state.quiz.length;
    }
}

export default Quiz;