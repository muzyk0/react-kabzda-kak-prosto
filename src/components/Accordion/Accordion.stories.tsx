import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from './Accordion';
import {action} from '@storybook/addon-actions';
import {Story} from '@storybook/react/types-6-0';

const GetCategoryObj = (categoryName: 'Colors' | 'Events' | 'Main') => ({
    table: {
        category: categoryName
    }
})


export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategoryObj('Colors')
        },
        onChange: {...GetCategoryObj('Events')},
        titleValue: {...GetCategoryObj('Main')},
        collapsed: {...GetCategoryObj('Main')},

    }
};

const callBack = action('Accordion mode change event fired')
const onClick = action('some item wos clicked')

const Template: Story<AccordionPropsType> = (args => <Accordion {...args} />)
const callBackProps = {
    onChange: callBack
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callBackProps,
    titleValue: 'Menu',
    collapsed: true,
}
export const UsersUncollapsedMode = Template.bind({})
UsersUncollapsedMode.args = {
    ...callBackProps,
    titleValue: 'Users',
    collapsed: false,
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    let [value, setValue] = useState<boolean>(true)
    const items = [
        {value: 1, title: 'Vlad'},
        {value: 2, title: 'Valery'},
        {value: 3, title: 'Katy'},
        {value: 4, title: 'Nasty'},
    ]

    return <Accordion {...args}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      items={items}
                      onClick={(id) => alert(id)}
    />
}
ModeChanging.args = {
    titleValue: 'ModeChanging',
}