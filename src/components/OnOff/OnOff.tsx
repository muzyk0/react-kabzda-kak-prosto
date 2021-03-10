import React from 'react';

export type OnOffPropsType = {
    on: boolean
    onChange: (value: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

    const onStyle = {
        width: '30px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        padding: '2px',
        background: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        padding: '2px',
        background: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        display: 'inline-block',
        marginLeft: '5px',
        borderRadius: '50%',
        background: props.on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => props.onChange(true)}>On
            </div>
            <div style={offStyle} onClick={() => props.onChange(false)}>Off</div>
            <div style={indicatorStyle}/>
        </div>
    )
}

/*function Btn(props: any) {
    return (
        <div>
            <div>
                <button className={props.action && s.turnOn}>On</button>
                <button className={s.turnOff}>On</button>
            </div>
        </div>
    )
}*/
