/* eslint-disable react-hooks/exhaustive-deps */
import { current } from "daisyui/src/colors";
import { useEffect, useState } from "react";
import Card from "./card/Card";
import TrackBanner from "./TrackBanner";
import Complete from "./toast/Complete";

export default function FlashcardWrapper({ track, questions }) {

    const numQuestions = Object.keys(questions).length;

    const [available, setAvailable] = useState(Object.keys(questions));

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const getRandomQuestion = () => {
        let newQuestionIndex = Math.floor(Math.random() * available.length);
        setCurrentQuestionIndex(newQuestionIndex);
    }

    useEffect(() => {
        if (available.length > 0) {
            getRandomQuestion();
        }
    }, [available]);

    const handleCorrect = () => {
        setAvailable(available.filter(key => key !== String(available[currentQuestionIndex])));
    }

    const handleIncorrect = () => {
       getRandomQuestion();
    }

    const card = <Card
                    question={questions[available[currentQuestionIndex]]}
                    handleIncorrect={handleIncorrect}
                    handleCorrect={handleCorrect} 
                />
    
    const complete = <Complete />

    return (
        <div>
            <TrackBanner 
                correct={numQuestions - available.length} 
                track={track} 
                questions={numQuestions} 
            />
            <div className="bg-gray-300 py-10">
                {available.length !== 0 ? card : complete}
            </div>
        </div>
    );
}