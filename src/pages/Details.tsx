import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Logo from "../components/Logo";
import PokemonDetails from "../components/PokemonDetails";
import api from "../services/api";
import { MainDetails } from "./styles";

interface IPokemon {
  name: string,
  url: string,
  id: number,
  height: number,
  weight: number,
  sprites: {
    front_default: string,
  },
  types: ITypes[],
  stats: IStats[],
}

interface ITypes {
  type: {
    name: string,
  }
}

interface IStats {
  base_stat: number,
  stat: {
    name: string,
  }
}

const Details = () => {
    const { name } = useParams()
    const [info, setInfo] = useState<IPokemon>()

    useEffect(() => {
      api.get(`/pokemon/${name}`).then(response => {
        setInfo(response.data);
      })
    }, [name])

    return (
      <MainDetails>
        <Logo />
        <PokemonDetails info={ info as IPokemon} />
      </MainDetails>
    )
}

export default Details;
