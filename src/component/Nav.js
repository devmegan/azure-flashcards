import ChooseTrack from "./toast/ChooseTrack";

export default function Nav({ track, setTrack }) {
    return (
        <nav className="px-10 max-w-md mx-auto content-center">
            {!track && <ChooseTrack />}
            <div className="btn-group flex justify-center">
                <button 
                    className={`btn float-none ${track === 'az900' && 'btn-active'}`}
                    onClick={() => setTrack("az900")}
                >
                    AZ-900
                </button>
                <button 
                    className={`btn ${track === 'az204' && 'btn-active'}`}
                    onClick={() => setTrack("az204")}
                >
                    AZ-204
                </button>
                <button 
                    className={`btn ${track === 'az400' && 'btn-active'}`}
                    onClick={() => setTrack("az400")}
                >
                        AZ-400
                </button>
            </div>
        </nav>
    );
}