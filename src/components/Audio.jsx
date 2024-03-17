import React, { useState, useRef, useEffect } from 'react';
import Audio from '../assets/aud/web-bg.mp3';
import { GoMute, GoUnmute } from "react-icons/go";

const AudioBG = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;

        // Attempt to play the audio
        const playPromise = audio.play();

        // Handling cases where play() might fail
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    // Playback started successfully
                    setIsPlaying(true);
                })
                .catch(error => {
                    // Playback failed
                    console.log("Audio playback failed:", error);
                });
        }

    }, []);

    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <audio ref={audioRef} autoPlay loop>
                <source src={Audio} type="audio/mp3" />
            </audio>
            <button className="w-[40px] h-[40px] flex items-center justify-center rounded-[50%] audio-bg" onClick={togglePlayPause}>
                {!isPlaying ? (<GoMute className="text-[20px] text-[white]" />) : (<GoUnmute className="text-[20px] text-[white]" />)}
            </button>
        </div>
    );
};

export default AudioBG;
