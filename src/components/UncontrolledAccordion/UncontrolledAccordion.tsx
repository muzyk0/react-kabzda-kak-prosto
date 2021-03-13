import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from './reducer';

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {

    // let [collapsed, setCollapsed] = useState<boolean>(false);
    let [state, dispatch] = useReducer(reducer, {collapsed: false});

    return (
        <div>
            <AccordionTitle title={props.titleValue} toggle={() => dispatch({type: TOGGLE_COLLAPSED}) }/>
            {!state.collapsed && <AccordionBody/>}
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