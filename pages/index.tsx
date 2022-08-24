import { BruhEffect } from "@components/BruhEffect";
import { MuteAudio } from "@components/MuteAudio";
import { useEffect } from "react";
import { useState } from "react";
import { SaveCount } from "utils/saveCount";

export default function Index() {
  const [bruh, setBruh] = useState<number>();
  const [muteAudio, setMuteAudio] = useState(false);
  const [triggered, setTriggered] = useState(false);
  const [randomNum, setRandomNum] = useState<number>(0);

  SaveCount(bruh, setBruh);

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

  return (
    <div className="relative w-full h-screen font-montserrat font-bold flex flex-col justify-center items-center text-8xl">
      <p
        className={`select-none cursor-pointer transition ease-in-out hover:scale-110 active:scale-100 hover:drop-shadow-2xl p-10`}
        onClick={async () => {
          setBruh((prev) => (prev ? prev + 1 : 1));
          setRandomNum(parseInt((Math.random() * (4 - 1) + 1).toFixed(0)));
          playAudio();
          triggerDelay();
        }}
      >
        🗿
      </p>
      <p className={`text-center select-none text-2xl`}>{bruh}</p>
      <MuteAudio muteAudio={muteAudio} setMuteAudio={setMuteAudio} />
      <BruhEffect triggered={triggered} randomNum={randomNum} />
    </div>
  );
}
