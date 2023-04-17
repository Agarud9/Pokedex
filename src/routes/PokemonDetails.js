import {useParams} from 'react-router-dom'
import PokemonDetails from '../components/PokemonDetails'

export default function PokemonDetailed() {
const {id} = useParams();

return(
    <>
    <PokemonDetails id={id}/> 
    </>
    )
}
