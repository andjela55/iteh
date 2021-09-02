import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Find more about endagered species</h1>
            <div className="cards_container">
                <div className="cards_wrapper">

                    <ul className="cards_item">
                        <CardItem src="images/andes.jpg" text="Tropical Andes" label="Rainforest" path="/tropical-andes" />
                        <CardItem src="images/borneo2.jpg" text="Borneo rainforest" label="Rainforest" path="/borneo" />
                        <CardItem src="images/coral.jpg" text="Coral triangle" label="Corals" path="/corals" />
                       
                    </ul>
                
                </div>
            </div>
        </div>
    )
}

export default Cards
