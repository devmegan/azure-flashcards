import { useState } from "react";
import Hero from "./component/Hero";
import db from "./firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export default function App() {
  const [track, setTrack] = useState('az900');

  const fetchQuestions = async() => {
    const questions = doc(db, "questions", track);
    const docSnap = await getDoc(questions);
    console.log("Document data:", docSnap.data());
  };

  useState(() => {
    fetchQuestions();
  }, []);


  return (
    <div className="container mx-auto" data-theme="aqua">
      <Hero track={track} setTrack={setTrack} />
    </div>
  );
}