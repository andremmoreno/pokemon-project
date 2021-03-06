import { Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import api from "../services/api";
import Logo from "../components/Logo";
import { CardsDiv, LoadingDiv } from "./styles";

interface IPokemons {
    name: string,
    url: string
}

const Home = () => {
    const [pokemons, setPokemons] = useState<IPokemons[]>([])
    const [offset, setOffset] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
      setLoading(true);
      window.addEventListener("scroll", handleScroll)

      api.get(`/pokemon?limit=10&offset=${offset}`).then(response => {
        setPokemons([...pokemons, ...response.data.results]);
        setLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offset])

    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop < 
        document.documentElement.offsetHeight) {
          return;
      }
      setOffset(offset + 10)
    }

    return (
      <div>
        <Logo />
        <CardsDiv>
          { pokemons.map((pokemon, id) => <PokemonCard key={ id } name={ pokemon.name }/> )}
        </CardsDiv>
        <LoadingDiv>
          <Spinner
            hidden={ !loading }
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        </LoadingDiv>
      </div>
    )
}

export default Home;
