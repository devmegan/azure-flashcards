import { useState } from "react";

export default function TrackBanner({ track, questions }) {
    const numQs = Object.keys(questions).length;
    const [correct, setCorrect] = useState(0);

    return (
        <div className="bg-gray-800 text-center py-2">
            <p>You're looking at cards for AZ-{track.substr(2, 4)}</p>
            <progress 
                className="progress progress-primary w-56 bg-gray-800" 
                value={correct} 
                max={numQs}
            >
            </progress>
            <p>Correctly answered {correct}/{numQs}</p>
        </div>
    );
}