import { useFetch } from '../Hooks/useFetch';
import { useCounter } from '../Hooks/useCounter';
import { LoadingMessage } from '../Components/Loading';
import { PokemonCard } from '../Components/Card';

export const CustomHook = () => {
    const { counter, decrement, increment } = useCounter(1);
    const {data, hasError, isLoading} = useFetch
    (`https://official-joke-api.appspot.com/random_joke`)
    
    return (
        <>
            <h1>Jokes (refresh to get a new one) </h1>
            <hr/>
            <h2>{data?.id}</h2>
            {isLoading ? <LoadingMessage/>
                    : (<PokemonCard setup={data.setup} punchline={data.punchline}/>)}

            <button className='btn btn-primary' onClick= { ()=>decrement() } >Anterior</button>
            <button className='btn btn-primary' onClick= { ()=>increment() } >Siguiente</button>
        </>
    )
}