import React, {useState} from 'react';
import {OnOff, OnOffPropsType} from './OnOff';
import {action} from '@storybook/addon-actions';


export default {
    title: 'components/OnOff',
    component: OnOff,
};

const callBack = action('on or off clicked')

export const OnMode = () => <OnOff on={true} onChange={callBack}/>
export const OffMode = () => <OnOff on={false} onChange={callBack}/>

export const ModeChanging = () => {
    let [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} onChange={setValue} />
}