import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Route from "./components/Route";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items =[
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework. I love it.'
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components.'
    }
]

const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value: 'green'
    },
    {
        label: 'The color Orange',
        value: 'orange'
    }
];


export default () => {
    const [selected, setSelected] = useState(options[0]);
    
    return <div>
            <Header></Header>
            <Route path='/'>
                <Accordion items={items} />
            </Route>
            <Route path='/list'> 
                <Search />
            </Route>
            <Route path='/dropdown' >
                <Dropdown 
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChage={setSelected}/>
            </Route>
            <Route path='/translate' >
                <Translate />
            </Route>
        </div>;
};