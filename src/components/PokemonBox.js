import '../styles/pokemonBox.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function PokemonBox({ url, color }) {

    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setPokemonData(data);
            });
    }, [url]);

    return (
        pokemonData && (
            <Link to={`/pokemon/${pokemonData.id}`}>
                <div className="box" style={{backgroundColor : color}}>
                <div>
                    <div className="small-text">#{pokemonData.id}</div>
                    <div className="pokemon-name">{capitalize(pokemonData.name)}</div>
                </div>
                <div>
                    <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                </div>
                </div>
            </Link>
        )
    );
    }