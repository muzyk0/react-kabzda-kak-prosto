import React, {useState} from 'react';

type OnOffPropsType = {
    defaultOn?: boolean
    onChange: (on: boolean) => void
}

export function UncontrolledOnOff(props: OnOffPropsType) {

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);

    const onStyle = {
        width: '30px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        padding: '2px',
        background: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        padding: '2px',
        background: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        display: 'inline-block',
        marginLeft: '5px',
        borderRadius: '50%',
        background: on ? 'green' : 'red'
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }


    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On
            </div>
            <div style={offStyle} onClick={offClicked}>Off</div>
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


export default UncontrolledOnOff
