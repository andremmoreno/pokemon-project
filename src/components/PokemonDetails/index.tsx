import React from "react";
import { Heading, Image, Text } from '@chakra-ui/react'
import { Card, ImgDiv, StatusDiv } from "./style";

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
  info: IPokemon,
}

const PokemonDetails: React.FC<Props> = ({ info }) => {


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
    <Card>
      <ImgDiv bgcolor={ info?.types[0].type.name }>
        <Image 
          src={ info?.sprites.front_default }
          alt={ info?.name }
          boxSize='300px'
        />
      </ImgDiv>
      <Heading 
        as='h2'
        size='xl'
      >
        { info?.name.replace(/^./, info?.name[0].toUpperCase()) }
      </Heading>
      <Text
        color='gray.600'
        fontSize='lg'
      >
        { `Tipo: ${colors[info?.types[0].type.name as keyof ITypesPT ] || 'Não definido'}` }
      </Text>

      <StatusDiv>

      </StatusDiv>
    </Card>
  )
}

export default PokemonDetails;
