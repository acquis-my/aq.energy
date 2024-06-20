"use client";
import { useState } from "react";
import ReactPlayer from "react-player/vimeo";

export default function CompanyVideo() {
  const [muted, setMuted] = useState(true);

  return (
    <div className="relative aspect-video overflow-hidden rounded-lg bg-slate-50">
      <ReactPlayer
        loop
        playing
        muted={muted}
        volume={0.8}
        url="https://vimeo.com/940012000?share=copy"
        width="100%"
        height="100%"
        className="absolute left-0 top-0"
      />

      <button
        type="button"
        onClick={() => setMuted(!muted)}
        className="absolute right-2 top-2 rounded-full bg-slate-900 px-2 py-1 text-xs tracking-wide text-white opacity-40 transition ease-in hover:opacity-60"
      >
        {muted ? "Unmute" : "Mute"}
      </button>
    </div>
  );
}
