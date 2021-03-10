import React from 'react';

export type ItemPropsType = {
    value: any
    title: string
}

export type AccordionBodyPropsType = {
    items: ItemPropsType[]
    onClick: (value: any) => void
}

export type AccordionPropsType = {
    titleValue: string
    /***
     * Element collapsed true or false
     */
    collapsed: boolean
    onChange: (value: boolean) => void
    /**
     * optional color of header text
     */
    color?: string
    items: ItemPropsType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                color={props.color}
                onChange={() => props.onChange(!props.collapsed)}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3
        style={{color: props.color ? props.color : 'black'}}
        onClick={() => props.onChange()}>{props.title}</h3>
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => props.onClick(i.value)}
                                               key={index}>{i.title}</li>)}
        </ul>)
}

export default Accordion;