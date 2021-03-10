import React, {ChangeEvent, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

export default {
    title: 'Example/uncontrolledInput',
    // component: Button,
};

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actionValue = e.currentTarget.value
        setValue(actionValue)
    }

    return <><input onChange={onChange}/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtoPress = () => {
    const [value, setValue] = useState('')

    const inputRef = React.useRef<HTMLInputElement>(null)


    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef} id={'inputId'}/> <button onClick={save}>Save</button> - actual value {value}</>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        return setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChange}/>
}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        return setParentValue(e.currentTarget.checked)
    }
    return <input type={'checkbox'} checked={parentValue} onChange={onChange}/>
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        return setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue}>
        <option value="1" >none</option>
        <option value="2" >Girl</option>
        <option value="3" >Sexy girl</option>
    </select>
}



export const ControlledInputWithFixedValue = () => <input value={'it-incubator'}/>