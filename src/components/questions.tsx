import { FC } from "react";

export interface Props {
    question: string;
    answers: string[];
    callback?: any;
    userAnswer?: any;
    questionNr: number;
    totalQuestions: number
}



const Questions: FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions }) => {

    console.log(userAnswer)
     
    return (
        <div>
            <p>Questions: {questionNr} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            {/* <div>
                {answers?.map((answer) => (
                    <div key={answer}>
                        <button disabled={userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }}/>
                        </button>
                    </div>
                ))}
            </div> */}
        </div>
    );
}


export default Questions;