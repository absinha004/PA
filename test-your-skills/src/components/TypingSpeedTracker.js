import React, { useState } from 'react';

const TypingSpeedTracker = () => {
    const [typingStartTime, setTypingStartTime] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(0);

    const handleInput = (event) => {
        if (typingStartTime === 0) {
            setTypingStartTime(new Date().getTime());
        }
    };

    const handleBlur = (event) => {
        const typingEndTime = new Date().getTime();
        const typingDuration = typingEndTime - typingStartTime;
        const wordCount = event.target.value.trim().split(/\s+/).length;
        const wordsPerMinute = (wordCount / typingDuration) * 60000;
        setTypingSpeed(wordsPerMinute.toFixed(2));
        setTypingStartTime(0);
    };

    return (
        <div>
            <textarea
                onInput={handleInput}
                onBlur={handleBlur}
                rows="10"
                cols="30"
                placeholder="Start typing..."
                className="form-control mt-3"
            ></textarea>
            <div>Typing speed: {typingSpeed} WPM</div>
        </div>
    );
};

export default TypingSpeedTracker;
