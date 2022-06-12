import React from 'react';
import './FinishedQuiz.css'
import Button from "../UI/Button/Button";

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total,key) => {
        if(props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)

    return (
        <div className='FinishedQuiz'>
            <ul>
                {props.quiz.map((quizItem, index)=> {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error'?
                            'fa-times error' : 'fa-check success'
                    ]
                    return (
                        <li key={index}>
                            <strong>{index+1}.</strong>&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    )
                })

                }
            </ul>
            <p>{successCount} из {props.quiz.length} правильно</p>
            <Button onClick={props.onRetry} type='primary'>Повторить</Button>
            <Button  type='success'>Повторить</Button>
        </div>
    );
};

export default FinishedQuiz;



// import React from 'react';
// import './FinishedQuiz.css'
//
// const FinishedQuiz = props => {
//     const successCount = Object.keys(props.results).reduce((total,key) => {
//         if(props.results[key] === 'success') {
//             total++
//         }
//         return total
//     }, 0)
//
//     return (
//         <div className="FinishedQuiz">
//             <ul>
//                 {props.quiz.map((quizItem, index) => {
//                     const cls = [
//                         'fa',
//                         props.results[quizItem.id] === 'error'?
//                             'fa-times error' : 'fa-check success'
//                     ]
//                     return (
//                         <li
//                             key={index}
//                         >
//                             <strong>{index + 1}. </strong>
//                             {quizItem.question}
//                             <i className={cls.join(' ')} />
//                         </li>
//                     )
//                 })}
//             </ul>
//             <p>Правильно {successCount}  из {props.quiz.length} вопросов</p>
//              <button onClick={props.onRetry}>Повторить</button>
//         </div>
//     );
// };
//
// export default FinishedQuiz;