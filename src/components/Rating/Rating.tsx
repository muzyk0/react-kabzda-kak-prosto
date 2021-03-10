import React from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

export type RatingPropsType = {
    value: RatingValueType
    onChange: (value: RatingValueType) => void
}


export function Rating(props: RatingPropsType) {


    return (
        <div>
            <Star selected={props.value > 0} onChange={props.onChange} value={1}/>
            <Star selected={props.value > 1} onChange={props.onChange} value={2}/>
            <Star selected={props.value > 2} onChange={props.onChange} value={3}/>
            <Star selected={props.value > 3} onChange={props.onChange} value={4}/>
            <Star selected={props.value > 4} onChange={props.onChange} value={5}/>
        </div>
    )
}

export type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onChange: (value: RatingValueType) => void
}

const Star = (props: StarPropsType) => {

    return <span onClick={() => props.onChange(props.value)}> {props.selected ? <b>Star</b> : 'Star'} </span>
}