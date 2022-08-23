import React, { useState } from "react";
import useSpotify from "../hooks/useSpotify";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { isPlayingState } from "../atoms/songAtom";

function Player() {
    const spotifyApi = useSpotify();
    const {data: session, staus} = useSession();
    const [currentTrackId, setCurrentIdTrack] = useRecoilState(isPlayingState);
    const [volume, setVolume] = useState(50);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  return (
        <div>
            {/* Left */}
            <div>
                <img src=""></img>
            </div>
        </div>
  )
}

export default Player;
