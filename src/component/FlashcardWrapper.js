import TrackBanner from "./TrackBanner";

export default function FlashcardWrapper({ track, questions }) {
    return (
        <div>
            <TrackBanner track={track} questions={questions} />
        </div>
    );
}