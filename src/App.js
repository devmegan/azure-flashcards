/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import db from "./firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

import Hero from "./component/Hero";
import FlashcardWrapper from "./component/FlashcardWrapper";

export default function App() {
  const [track, setTrack] = useState();
  const [questions, setQuestions] = useState();

  const fetchQuestions = async() => {
    setQuestions(null);
    const res = doc(db, "questions", track);
    const questionData = await getDoc(res);
    if (questionData.exists() && Object.keys(questionData.data()).length !== 0) {
      setQuestions(questionData.data());
    } else {
      console.log("no data :( sorry ");
    }
  };

  useEffect(() => {
    if (track) {
      fetchQuestions();
    }
  }, [track]);

  return (
    <div data-theme="aqua">
      <Hero track={track} setTrack={setTrack} />
      {questions && <FlashcardWrapper track={track} questions={questions} />}
    </div>
  );
}