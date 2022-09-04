export default function FlashcardWrapper({ track, questions }) {
    const numQs = Object.keys(questions).length;

    return (
        <div className="bg-neutral text-center py-2">
            You're looking at cards for AZ-{track.substr(2, 4)}
            {/* <progress class="progress w-56 block mx-auto" value="10" max={numQs}></progress> */}
        </div>
    );
}