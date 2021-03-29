import React, {useMemo, useState} from 'react';

export default {
    title: 'use.memo demo'
}

export const UseMemo = () => {

    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake <= 100000000) {
                fake++
            }
            tempResultA *= i
        }
        return tempResultA

    }, [a])


    for (let i = 1; i <= b; i++) {

        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <div>result a: {resultA}</div>
        <div>result b: {resultB}</div>
    </>
}

const Users = React.memo((props: { users: Array<string> }) => {
    console.log('Users render')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
})


export const ReactMemoSupport = () => {
    debugger
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['dimych', 'Katya', 'Vlad'])

    const NewArray = useMemo(() => {
        debugger
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        setUsers([...users, `Sveta ${new Date().getTime()}`])
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>Add user</button>
        {counter}
        <Users users={NewArray}/>
    </>
}