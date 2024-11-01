import PropTypes from 'prop-types';
import "./pokemon.css";
import pokemon from "./pokemon.json"
const PokemonRow = ({ pokemon }) => (
    <tr>
        <td>{pokemon.name.english}</td>
        <td>{pokemon.type.join(', ')}</td>
    </tr>
);


PokemonRow.propTypes = {
    pokemon: PropTypes.string, 
}
export default function Pokemon() {
    return (
        <div style={{
            margin: "auto",
            width: 800,
            padding: "1rem"
        }}>
            <h1 className="title">Pokemon Search</h1>
            <table width="100%">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemon.slice(0, 30).map(pokemon => (
                        <PokemonRow pokemon={pokemon} key={pokemon.id} />
                        
                    ))}

                </tbody>
            </table>
        </div>
    )
}