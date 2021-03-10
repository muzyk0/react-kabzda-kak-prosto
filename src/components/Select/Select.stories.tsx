import React, {useState} from 'react';
import SelectCustom from './Select';
import {action} from '@storybook/addon-actions';


export default {
    title: 'components/SelectCustom',
    component: SelectCustom,
};

const items = [
    {value: '1', title: 'Vlad'},
    {value: '2', title: 'Valery'},
    {value: '3', title: 'Katy'},
    {value: '4', title: 'Nasty'},
]

export const WithValue = () => {

    const [value, setValue] = useState('2')

    return <>
        <SelectCustom value={value} onChange={setValue} items={items}/>
    </>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <>
        <SelectCustom value={value} onChange={setValue} items={items}/>
    </>
}