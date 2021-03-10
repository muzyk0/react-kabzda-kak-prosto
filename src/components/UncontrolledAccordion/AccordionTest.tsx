import React, {useState} from "react";

//unaccordion
type UnAccordionType = {
    titleValue: string
}

function UnAccordion(props: UnAccordionType) {

    const [collapsed, setCollapsed] = useState(false)

//vlad
//     return (
//         <>
//             <UnAccordionTitle title={props.titleValue} collapsed={collapsed} toggle={setCollapsed} />
//             {!collapsed && <UnAccordionBody/>}
//         </>
//     );
// }

    const toggleMenu = () => {
        setCollapsed(true)
    }

    return (
        <>
            <UnAccordionTitle title={props.titleValue} collapsed={collapsed} toggleMenu={setCollapsed}/>
            {!collapsed && <UnAccordionBody/>}
        </>
    );
}

//title
type UnAccordionTitleType = {
    title: string
    toggleMenu: (b: boolean) => void
    collapsed: boolean
}

//vlad
// type UnAccordionTitleType = {
//     title: string
//     collapsed: boolean
//     toggle: (toggle: boolean) => void
// }

function UnAccordionTitle(props: UnAccordionTitleType) {

    // const toggleMenuHandler = () => {
    //     props.toggleMenu()
    // }

    return (
        <h1 onClick={() => {props.toggleMenu(!props.collapsed)}}>{props.title}</h1>
    );
}

//body

function UnAccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UnAccordion;