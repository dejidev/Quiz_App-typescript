import React, { useState } from 'react';
import './App.css';
import Questions from './components/questions';
import { FetchData, QuestionState, Difficulty } from './fetch';

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string
}

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)


  const totalQuestions = 15;

  const start = async () => {
    setLoading(true);
    setGameOver(false)

    const newQuestions = await FetchData(
      totalQuestions,
      Difficulty.EASY
    )

    setQuestions(newQuestions)
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false)

  }
  console.log(questions[3]);


  // const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   if (!gameOver) {
  //     //userAnswer
  //     const answer = e.currentTarget.value;

  //     //Check answer
  //     const correct = questions[number].correctAnswer === answer;

  //     //Add score if answer is correct
  //     if (correct) {
  //       setScore(prev => prev + 1)
  //     }

  //     //Save answer in the array
  //     const AnswerObject = {
  //       question: questions[number].question,
  //       answer,
  //       correct,
  //       correctAnswer: questions[number].correctAnswer
  //     }
  //     setUserAnswer(prev => [...prev, AnswerObject])
  //   }
  // }

  const nextQuestion = () => { }
  return (
    <main>
      <h1> TypeScipt Quiz</h1>
      {gameOver || userAnswer.length === totalQuestions ? (
        <button onClick={start}>Start</button>)
        : null}

      {!gameOver ? <p>Score : </p> : null}
      {loading && <p>Loading Questions</p>}

      {!loading && !gameOver && (
        <Questions
          questionNr={number + 1}
          totalQuestions={totalQuestions}
          question={questions[number].question}
          answers={questions[number].answers}
        // userAnswer={userAnswer ? userAnswer[number] : undefined}
        // callback={checkAnswer}
        />)}
      {!gameOver &&
        !loading &&
        userAnswer.length === number + 1 &&
        number !== totalQuestions - 1 ? (
        <button onClick={nextQuestion}>Next</button>
      ) : null}

    </main>

  );
}

export default App;
