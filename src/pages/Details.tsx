import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Logo from "../components/Logo";
import PokemonDetails from "../components/PokemonDetails";
import api from "../services/api";

interface IPokemon {
  name: string,
  url: string,
  id: number,
  sprites: {
    front_default: string,
  },
  types: ITypes[]
}

interface ITypes {
type: {
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
      <div>
        <Logo />
        <PokemonDetails info={ info as IPokemon} />
      </div>
    )
}

export default Details;
