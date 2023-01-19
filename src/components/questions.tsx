import { FC } from "react";
import { shuffledArray } from '../utils';

export interface Props {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer?: any;
    questionNr: number;
    totalQuestions: number
}


const QuestionCard: FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions }) => {

    
    return (
        <div>
            <p>Questions: {questionNr} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map((answer) => (
                    <div key={answer}
                    // correct={userAnswer.correctAnswer === answer}
                    // userClicked ={userAnswer?.answer === answer} 
                    >
                        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default QuestionCard;