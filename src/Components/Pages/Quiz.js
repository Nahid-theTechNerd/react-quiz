import React from "react";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

export default function Quiz() {
  return (
    <>
      <h1>Qustoion Here how to learn react?</h1>
      <h4>Question can have multiple answers</h4>
      <Answers></Answers>
      <ProgressBar></ProgressBar>
      <MiniPlayer></MiniPlayer>
    </>
  );
}
