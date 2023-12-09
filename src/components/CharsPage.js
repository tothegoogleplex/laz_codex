import { Fragment, useState } from 'react';
import { NavBar } from '../components/NavBar';
import { CharList } from '../components/CharList';
import { characters } from '../characters';

export function CharsPage() {
    const [data] = useState(Object.entries(characters));

    return (
        <Fragment>
            <div className="App h-screen">
                <NavBar />
                <div className="container sm:w-screen lg:w-3/4 h-auto z-50">
                    <CharList className="char-list" data={data} />
                </div>
            </div>
        </Fragment>
    );
}