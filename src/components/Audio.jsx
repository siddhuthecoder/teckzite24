import React, { useState } from 'react';
import Audio from '../assets/aud/web-bg.mp3';

const AudioBG = () => {
    const [isMuted, setIsMuted] = useState(false);

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    return (
        <div>
            <audio autoPlay={true} loop >
                <source src={Audio} type="audio/mp3" />
            </audio>
            <button className="" onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
        </div>
    );
};

export default AudioBG;
