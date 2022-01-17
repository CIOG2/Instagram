import React from 'react';
// import { Hystories } from '../Hystories';
import { Publications } from '../Publications';
import { Aside } from '../Aside';
import './style.css';

function MainContainer() {
    return (
        <main className="main">
            <section className='main__section--container'>
                <Publications/>
                <Aside />                    
            </section>
        </main>
    );
}

export { MainContainer };