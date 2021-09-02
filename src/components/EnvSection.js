import React from 'react';
import '../App.css';
import { Button } from './Button';
import './EnvSection.css';


export default function EnvSection() {
    return (
        <div className="env-container">
            <h1>LIFE ON EARTH</h1>
            <p>The time for change is now!</p>

            <div className="env-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' route='/trailer'>
                    WATCH TRAILER
                </Button>

            </div>
            <div className="env-part">

            </div>
        </div>
    )
}
