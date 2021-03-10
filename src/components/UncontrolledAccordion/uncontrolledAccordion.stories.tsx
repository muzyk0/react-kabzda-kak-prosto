import React from 'react';
import {action} from '@storybook/addon-actions';
import UncontrolledAccordion from './UncontrolledAccordion';


export default {
    title: 'Uncontrolled/UncontrolledAccordion',
    component: UncontrolledAccordion,
};

const callBack = action('Accordion mode change event fired')


export const ModeChanging = () => {
    return <UncontrolledAccordion titleValue={'ModeChanging'}/>
}