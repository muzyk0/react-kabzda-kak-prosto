import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffect demo'
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('component render')

    useEffect(() => {
        console.log('use effect every render')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('use effect only first render')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('use effect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        {fake}
        {counter}
        <button onClick={() => setFake(state => state + 1)}>fake+</button>
        <button onClick={() => setCounter(state => state + 1)}>counter+</button>
    </>
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('timeout example render')

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, [])

    return <>
        counter: {counter}
    </>
}

export const DateExample     = () => {
    const [date, setDate] = useState(() => {
        return new Date()
    })
    console.log(date)
    console.log('timeout example render')

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

    return <>
        date: {`${date.getFullYear()}.${date.getMinutes()}.${date.getSeconds()}`}
    </>
}