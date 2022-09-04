import { useState } from "react";
import Hero from "./component/Hero";

export default function App() {
  const [track, setTrack] = useState('az900');

  return (
    <div className="container" data-theme="aqua">
      <Hero track={track} setTrack={setTrack} />
    </div>
  );
}