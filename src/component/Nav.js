export default function Nav({ track, setTrack }) {
    return (
        <nav className="grid grid-cols-1 sm:grid-cols-3 gap-10 px-10 mt-10 max-w-md mx-auto">
            <button 
                className={`btn btn-primary ${track !== 'az900' && 'btn-outline'}`} 
                onClick={() => setTrack("az900")}
            >
                AZ-900
            </button>
            <button 
                className={`btn btn-primary ${track !== 'az204' && 'btn-outline'}`} 
                onClick={() => setTrack("az204")}
            >
                AZ-204
            </button>
            <button 
                className={`btn btn-primary ${track !== 'az400' && 'btn-outline'}`} 
                onClick={() => setTrack("az400")}
            >
                AZ-400 
            </button>
        </nav>
    );
  }