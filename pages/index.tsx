import { BruhEffect } from "@components/BruhEffect";
import { MuteAudio } from "@components/MuteAudio";
import Head from "next/head";
import { useState } from "react";
import { SaveCount } from "utils/saveCount";

export default function Index() {
  const [bruh, setBruh] = useState<number>();
  const [muteAudio, setMuteAudio] = useState(false);
  const [triggered, setTriggered] = useState(false);
  const [randomNum, setRandomNum] = useState<number>(0);

  const isInitialized = SaveCount(setBruh, bruh);

  function triggerDelay() {
    setTriggered(true);
    setTimeout(() => {
      setTriggered(false);
    }, 200);
  }

  function playAudio() {
    if (muteAudio) return;
    const audio = new Audio("/bruh.mp3");
    audio.volume = 0.5;
    audio.play();
    audio.remove();
  }

  if (isInitialized) return <></>;
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 font-montserrat font-bold flex flex-col justify-center items-center text-8xl">
      <Head>
        <title>Bruh</title>
        <meta name="description" content="The BRUH Clicker!" />
      </Head>
      <button
        className={`noWebkitAppearance transition ease-in-out hover:scale-110 active:scale-100 hover:drop-shadow-2xl p-10 z-50 touch-manipulation`}
        onClick={() => {
          setBruh((prev) => (prev ? prev + 1 : 1));
          setRandomNum(parseInt((Math.random() * (4 - 1) + 1).toFixed(0)));
          playAudio();
          triggerDelay();
        }}
      >
        🗿
      </button>
      <p className={`text-center select-none text-2xl`}>{bruh}</p>
      <MuteAudio muteAudio={muteAudio} setMuteAudio={setMuteAudio} />
      <BruhEffect triggered={triggered} randomNum={randomNum} />
    </div>
  );
}
