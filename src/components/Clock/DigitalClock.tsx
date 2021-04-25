import React, {useEffect, useState} from 'react';
import {ClockViewPropsType} from './Clock';

const got2digitsString = (number: number) => {
    return number <= 10 ? '0' + number : number
}

export const DigitalClock = ({date}: ClockViewPropsType) => {


    const styleClock = {
        width: '200px',
        height: '200px',
        background: 'rgb(22, 22, 22)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        color: 'rgb(63, 252, 63)',
        border: Number(got2digitsString(date.getSeconds()))  % 2 === 0 ? 'rgb(245, 39, 32) 10px solid' : 'rgb(63, 252, 63) 10px solid'
    }

    const time = `${got2digitsString(date.getFullYear())}:${got2digitsString(date.getMinutes())}:${got2digitsString(date.getSeconds())}`

    return <>
        <div style={styleClock}>
            <h1 style={{
                fontWeight: 'bold',
                fontSize: '30px',
            }}>{time}</h1>
        </div>
    </>
}