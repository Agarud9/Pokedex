import '../styles/pokemonDetails.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


export default function PokemonBox({id}) {

    
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .then(data => {
                setPokemonData(data);
            });
    }, [id]);

    return (
        pokemonData && (
            <div className="pokemon-details">
                <div className="left-div">
                    <div className="imgae">
                        <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                    </div>
                    <div className="name">
                        <div className="pokemon-name">{capitalize(pokemonData.name)}</div>
                    </div>
                </div>
                <div className="right-div">
                <div className="pokemonAbilities">
                {pokemonData.abilities.map((ability) => (
                    <div className="ability">
                        <h6>ABILITY</h6>
                        {capitalize(ability.ability.name)}
                    </div>
                    ))}
                    </div>
                    <div className="weight">
                        <h6>WEIGHT</h6>
                        {pokemonData.weight}
                    </div>
                    <div className="height">
                        <h6>HEIGHT</h6>
                        {pokemonData.height}
                    </div>
                    <div className="experience">
                        <h6>BASE EXPERIENCE</h6>
                        {pokemonData.base_experience}
                    </div>
                </div>
            </div>
        )
    );
    }