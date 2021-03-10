import React, {useState} from 'react';

import {action} from '@storybook/addon-actions';
import {RatingPropsType, UncontrolledRating} from './UncontrolledRating';


export default {
    title: 'Uncontrolled/UncontrolledRating',
    component: UncontrolledRating,
};

const callBack = action('rating changed inside component');

export const EmptyRating = () => <UncontrolledRating defaultValue={0} onChange={callBack}/>
export const Rating1 = () => <UncontrolledRating defaultValue={1} onChange={callBack}/>
export const Rating2 = () => <UncontrolledRating defaultValue={2} onChange={callBack}/>
export const Rating3 = () => <UncontrolledRating defaultValue={3} onChange={callBack}/>
export const Rating4 = () => <UncontrolledRating defaultValue={4} onChange={callBack}/>
export const Rating5 = () => <UncontrolledRating defaultValue={5} onChange={callBack}/>
