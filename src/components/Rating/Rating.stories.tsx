import React, {useState} from 'react';
import {Rating, RatingValueType} from './Rating';
import {action} from '@storybook/addon-actions';


export default {
    title: 'components/rating',
    component: Rating,
};
const callBack = action('rating clicked')

export const EmptyRating = () => <Rating value={0} onChange={callBack}/>
export const Rating1 = () => <Rating value={1} onChange={callBack}/>
export const Rating2 = () => <Rating value={2} onChange={callBack}/>
export const Rating3 = () => <Rating value={3} onChange={callBack}/>
export const Rating4 = () => <Rating value={4} onChange={callBack}/>
export const Rating5 = () => <Rating value={5} onChange={callBack}/>
export const RatingChanging = () => {
    let [rating, setRating] = useState<RatingValueType>(4)
    return <Rating value={rating} onChange={setRating}/>
}