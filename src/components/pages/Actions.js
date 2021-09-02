import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';


export default function Actions() {
    return (
        <div className='actions'>
            <h1>WHAT DID WE DO?</h1>
            <div className="cards_container">
                <div className="cards_wrapper">

                    <ul className="cards_item">
                        <CardItem src="images/whale.jpg" text="In just 20 years we've managed to increase whale population from 1000 to over 80.000 species." label="Whales" path="/actions" />
                        <CardItem src="images/albatros.jpg" text="A 98% reduction in seabird deaths after fishermen started attaching colored streamers to their boats, which stopped the birds from pilfering into fishing nets." label="Birds"  path="/actions"/>
                        <CardItem src="images/coral.jpg" text="Researchers in the Florida Keys have determined that coral reefs can be saved from invasive seaweed with the help of a particular species of crab called the “reef goat”." label="Corals" path="/actions" />

                    </ul>

                </div>
            </div>
        </div>
    )

}
