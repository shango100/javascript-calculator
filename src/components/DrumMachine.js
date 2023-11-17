import React, { useState, useEffect } from 'react';
import '../styles/DrumMachine.css'; // Adjust the path based on your actual file structure
import '../assets/Heater-1.mp3'
import '../assets/Heater-2.mp3'

const DrumMachine = () => {
    const [displayText, setDisplayText] = useState('');

    const drumPads = [
        { id: 'Q', text: 'Kick', audioPath: '../assets/Heater-2.mp3' },
        { id: 'W', text: 'Snare', audioPath: '../assets/Heater-2.mp3' },
        { id: 'E', text: 'Hi-Hat', audioPath: '/assets/Heater-3.mp3' },
        { id: 'A', text: 'Tom 1', audioPath: '/assets/Heater-4.mp3' },
        { id: 'S', text: 'Tom 2', audioPath: '/assets/Clap.mp3' },
        { id: 'D', text: 'Tom 3', audioPath: '/assets/Open-HH.mp3' },
        { id: 'Z', text: 'Clap', audioPath: '/assets/Kick_n_Hat.mp3' },
        { id: 'X', text: 'Crash', audioPath: '/assets/Closed-HH.mp3' },
        { id: 'C', text: 'Ride', audioPath: '/assets/RP4_KICK_1.mp3' },
    ];

    const handlePadClick = (audioId, displayText) => {
        const audioElement = document.getElementById(audioId).querySelector('audio');
        console.log(audioElement); // Log the audioElement to the console
        audioElement.currentTime = 0;
        audioElement.play().then(r => console.log("error with source"));
        setDisplayText(displayText);
    };


    const handleKeyPress = (event) => {
        const key = event.key.toUpperCase();
        const drumPad = document.getElementById(key);

        if (drumPad) {
            const audioId = drumPad.getAttribute('id');
            const displayText = drumPad.getAttribute('data-text'); // Use correct attribute name
            handlePadClick(audioId, displayText);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div id="drum-machine">
            <div id="display">{displayText}</div>
            {drumPads.map((pad) => (
                <div
                    key={pad.id}
                    className="drum-pad"
                    id={pad.id}
                    data-text={pad.text}
                    onClick={() => handlePadClick(pad.id, pad.text)}
                >
                    {pad.id}
                    <audio className="clip" id={pad.id} src={pad.audioPath} />
                    {/*<audio className="clip" id={pad.id} controls>*/}
                    {/*    <source src={pad.audioPath} type="audio/ogg"/>*/}
                    {/*</audio>*/}
                </div>
            ))}
        </div>
    );
};

export default DrumMachine;
