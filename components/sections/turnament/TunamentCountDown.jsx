"use client";
import { formatCountdown } from '@/lib/helper';
import React, { useState, useEffect } from 'react'

const TunamentCountDown = ({ targetTime }) => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const update = () => setTime(formatCountdown(targetTime));

        update();
        const interval = setInterval(update, 1000);

        return () => clearInterval(interval);
    }, [targetTime]);
    return (
        <span className="text--accent">{time}</span>
    )
}

export default TunamentCountDown