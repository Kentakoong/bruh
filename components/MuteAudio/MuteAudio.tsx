import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";
import { useCallback, useEffect } from "react";

interface MuteAudioProps {
  muteAudio: boolean;
  setMuteAudio: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MuteAudio = ({ muteAudio, setMuteAudio }: MuteAudioProps) => {
  const handleMute = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "m") {
        setMuteAudio((prev) => !prev);
      }
    },
    [setMuteAudio]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleMute);
    return () => {
      window.removeEventListener("keydown", handleMute);
    };
  }, [handleMute, setMuteAudio]);

  function triggerMuteAudio() {
    setMuteAudio((prev) => !prev);
  }

  const muteAudioClassName = {
    className: "select-none cursor-pointer absolute bottom-6 right-6 w-8 h-8",
    onClick: triggerMuteAudio,
  };

  return muteAudio ? (
    <SpeakerXMarkIcon {...muteAudioClassName} />
  ) : (
    <SpeakerWaveIcon {...muteAudioClassName} />
  );
};
