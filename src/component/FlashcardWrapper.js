import { useState } from "react";
import Card from "./card/Card";
import TrackBanner from "./TrackBanner";

export default function FlashcardWrapper({ track, questions }) {
    const [currentQuestion, setCurrentQuestion] = useState(questions[1]);
    console.log(currentQuestion);

    return (
        <div>
            <TrackBanner track={track} questions={questions} />
            <div className="bg-gray-300 py-10">
                <Card question={currentQuestion} />
            </div>
        </div>
    );
}