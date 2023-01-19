// import Question from "./components/questions";

import { shuffledArray } from "./utils";

export type Question = {
    category: string;
    correctAnswer: string;
    difficulty: string;
    incorrectAnswers: string[];
    question: string;
    type: string
}

export type QuestionState = Question & { answers: string[] }

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}

export const FetchData = async (amount: number, difficulty: Difficulty) => {
    const url = `https://the-trivia-api.com/api/questions?categories=general_knowledge&limit=15&difficulty=${difficulty}`
    const res = await fetch(url)
    const data = await res.json();
    return data.map((question: Question) =>
    (
        {
            ...question,
            answers: shuffledArray([
                ...question.incorrectAnswers,
                question.correctAnswer
            ])
        })
    )
}



