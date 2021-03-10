import React from 'react';

import {action} from '@storybook/addon-actions';
import UncontrolledOnOff from './uncontrolledOnOff';


export default {
    title: 'Uncontrolled/UncontrolledOnOff',
    component: UncontrolledOnOff,
};

const callBack = action('on or off clicked')

export const uncontrolledOnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callBack}/>
export const uncontrolledOffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callBack}/>
export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>

