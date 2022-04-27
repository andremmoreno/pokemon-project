import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Heading, Image, Text } from '@chakra-ui/react'
import { Card, ImgDiv } from "./style";

interface ITypesPT {
  fire: string,
  grass: string,
  electric: string,
  water: string,
  ground: string,
  rock: string,
  fairy: string,
  poison: string,
  bug: string,
  dragon: string,
  psychic: string,
  flying: string,
  fighting: string,
  normal: string,
  white: string
}

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

interface Props {
  name: string,
}

const PokemonCard: React.FC<Props> = ({ name }) => {
  const [info, setInfo] = useState<IPokemon>()

  useEffect(() => {
    api.get(`/pokemon/${name}`).then(response => {
      setInfo(response.data);
    })
  }, [name])

  const colors = {
    fire: 'Fogo',
    grass: 'Grama',
    electric: 'Elétrico',
    water: 'Água',
    ground: 'Terra',
    rock: 'Pedra',
    fairy: 'Fada',
    poison: 'Veneno',
    bug: 'Inseto',
    dragon: 'Dragão',
    psychic: 'Psíquico',
    flying: 'Voador',
    fighting: 'Lutador',
    normal: 'Normal',
    white: ''
  };

  return (
    <Card bgcolor={ info?.types[0].type.name }>
      <ImgDiv>
        <Image 
          src={ info?.sprites.front_default }
          alt={ info?.name }
          boxSize='150px'
        />
      </ImgDiv>
      <Heading 
        as='h2'
        size='md'
      >
        { info?.name.replace(/^./, info?.name[0].toUpperCase()) }
      </Heading>
      <Text
        color='gray.600'
        fontSize='sm'
      >
        { `Tipo: ${colors[info?.types[0].type.name as keyof ITypesPT]}` }
      </Text>
    </Card>
  )
}

export default PokemonCard;
