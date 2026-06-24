import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = new Audio("/Tokyo Music Walker - Way Home.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        audio.play().catch(() => {});
        setIsPlaying(true);
        document.removeEventListener("click", handleFirstInteraction);
        document.removeEventListener("keydown", handleFirstInteraction);
      }
    };

    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("keydown", handleFirstInteraction);

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
      audio.pause();
    };
  }, [hasInteracted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-[9998] p-3 rounded-full bg-primary/20 backdrop-blur-sm hover:bg-primary/30 transition-all duration-300"
      aria-label={isPlaying ? "Oprire muzică" : "Pornire muzică"}
    >
      {isPlaying ? (
        <Volume2 size={20} className="text-primary" />
      ) : (
        <VolumeX size={20} className="text-primary" />
      )}
    </button>
  );
};

export default BackgroundMusic;