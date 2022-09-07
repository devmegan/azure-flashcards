export default function TrackBanner({ correct, track, questions }) {

    return (
        <div className="bg-gray-800 text-center py-2">
            <p>You're looking at cards for AZ-{track.substr(2, 4)}</p>
            <progress 
                className="progress progress-primary w-56 bg-gray-800" 
                value={correct} 
                max={questions}
            >
            </progress>
            <p>Correctly answered {correct}/{questions}</p>
        </div>
    );
}