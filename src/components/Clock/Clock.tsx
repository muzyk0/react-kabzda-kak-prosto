import React, {useEffect, useState} from 'react';
import {findAllByDisplayValue} from '@testing-library/react';
import {DigitalClock} from './DigitalClock';
import {AnalogClock} from './AnalogClock';

const got2digitsString = (number: number) => {
    return number <= 10 ? '0' + number : number
}

interface PropsType {
    mode?: 'digital' | 'analog'
}
export interface ClockViewPropsType {
    date: Date
}

export const Clock = (props: PropsType) => {

    const [date, setDate] = useState(() => {
        return new Date()
    })
    console.log(date)
    console.log('timeout example render')
    useEffect(() => {

        const intervalId = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

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

    let view;

    switch (props.mode) {
        case 'analog':
            view = <AnalogClock date={date} />
            break
        case 'digital':
        default:
            view = <DigitalClock date={date} />
    }

    return <>
        {view}
    </>
}