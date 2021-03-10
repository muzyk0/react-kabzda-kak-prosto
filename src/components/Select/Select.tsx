import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css'

export type ItemPropsType = {
    title: string
    value: any
}

export type AccordionBodyPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemPropsType[]
}

export function SelectCustom(props: AccordionBodyPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    useEffect( () => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const selectedItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredElementValue)
    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                <div className={s.items}>
                    {props.items.map(el => <div
                            onMouseEnter={() => setHoveredElementValue(el.value)}
                            className={s.item + ' ' + (hoveredItem === el ? s.selected : '')}
                             key={el.value}
                             onClick={() => onItemClick(el.value)}
                        >{el.title}
                        </div>)}
                </div>
                }
            </div>
        </>
    )
}


export default SelectCustom;