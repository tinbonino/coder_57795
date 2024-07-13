import useFetch from "../customHooks/useFetch";



function Poke() {

    const {data,loading,error}=useFetch("https://pokeapi.co/api/v2/pokemon?limit=10")

    if(loading) return <p>Loading...</p>;

    if(error) return <p>Error: {error.message}</p>


  return (
    <div>
        <h2>Pokémon</h2>
        <ul>
            {data.results.map((poke) => (
                <li key={poke.name}>
                    <h2>{poke.name}</h2>
                    
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Poke