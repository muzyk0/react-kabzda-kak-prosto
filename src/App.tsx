import React, {useState} from 'react';
import './App.css';


import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import Accordion from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import UncontrolledOnOff from './components/uncontrolledOnOff/uncontrolledOnOff';

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    let [accordionCollapsed, setAccordionCollapsed] = useState(true)
    let [switchOn, setSwitchOn] = useState(false);

    return (
        <div>
            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            {/*<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}
            <UncontrolledAccordion titleValue={'Users'}/>
            {/*<Rating value={ratingValue}*/}
            {/*        onClick={setRatingValue}/>*/}
            {/*<UncontrolledRating/>*!/*/}
            {/*<Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onChange={setAccordionCollapsed}/>*/}

                {/*<PageTitle title={'This is APP Component'}/>
                Article 1
                <Rating value={2}/>
                <Accordion titleValue={'Menu'} collapsed={true}/>
                <Accordion titleValue={'Users'}/>
                Article 2
                <Rating value={3}/>
                <Rating value={5}/>*/}


        </div>
);
}

type PageTitlePropsType =
    {
        title: string
    }

function PageTitle(props: PageTitlePropsType)
    {
        return <h1>
            {
                props.title
            }
        </h1>
    }

export default App;
