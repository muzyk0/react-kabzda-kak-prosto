import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState<boolean>(false);

    return (
            <div>
                <AccordionTitle title={props.titleValue} toggle={() => setCollapsed(!collapsed)}/>
                {!collapsed && <AccordionBody/>}
            </div>
        )

}
/*function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false);

    return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <button onClick={() => setCollapsed(!collapsed)} >TOGGLE</button>
                {!collapsed && <AccordionBody/>}
            </div>
        )

}*/

type AccordionTitlePropsType = {
    title: string
    toggle: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => props.toggle()}>{props.title}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>)
}

export default UncontrolledAccordion;