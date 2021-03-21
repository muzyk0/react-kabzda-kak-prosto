import React, {useState} from 'react';

export default {
    title: 'React.memo demo'
}

const Users = React.memo((props: { users: Array<string> }) => {
    console.log('Users render')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
})
const NewMessagesCounter = React.memo((props: any) => {
    console.log('NewMessagesCounterSecret render')
    return <div>{props.count}</div>
})

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['dimych', 'Katya', 'Vlad'])

    const addUser = () => {
        setUsers([...users, `Sveta ${new Date().getTime()}`])
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>Add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}
