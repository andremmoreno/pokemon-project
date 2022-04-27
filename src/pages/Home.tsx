import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PokemonCard from "../components/PokemonCard";
import api from "../services/api";

interface IPokemons {
    name: string,
    url: string
}

const Home = () => {
    const [pokemons, setPokemons] = useState<IPokemons[]>([])
    const [offset, setOffset] = useState<number>(0)

    useEffect(() => {
      api.get('/pokemon?limit=10&offset=0').then(response => {
        setPokemons(response.data.results);
      })
    }, [])

    return (
      <CardsDiv>
        { pokemons.map((pokemon, id) => <PokemonCard key={ id } name={ pokemon.name }/> )}
      </CardsDiv>
    )
}

export default Home;

const CardsDiv = styled.div`
  display: flex; 
  width: 70%;
  max-width: 700px;
  margin: 10px auto;
  justify-content: space-around;
  flex-wrap: wrap;
`
