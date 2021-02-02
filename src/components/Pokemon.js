import React, { useState } from 'react';
import axios from 'axios';
const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const on = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => { setPokemon(response.data.results) })

    }
    return (
        <div>
            <button type="submit" onClick={on}>Fetch names</button>
            {
                pokemon.map((item, index) => {
                    return <ul><li key={index}>{item.name}</li></ul>
                })
            }
        </div>
    );
}
export default Pokemon;