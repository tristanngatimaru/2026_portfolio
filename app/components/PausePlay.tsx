"use client";
import { PiPauseFill } from "react-icons/pi";
import { TbPlayerPlayFilled } from "react-icons/tb";

export default function PausePlay({
  isPlaying,
  onToggle,
}: {
  isPlaying: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="w-10 h-10  hover:scale-130 duration-100 ease-in-out"
    >
      {isPlaying ? (
        <TbPlayerPlayFilled className="w-full h-full" />
      ) : (
        <PiPauseFill className="w-full h-full" />
      )}
    </button>
  );
}
