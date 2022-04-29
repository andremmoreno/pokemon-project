import React from "react";
import { Heading, Image, Stat, StatLabel, StatNumber, Text } from '@chakra-ui/react'
import { Card, ImgDiv, MainDetails, MoreInfo, StatusDiv } from "./style";

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
    <MainDetails>
      <Heading 
        as='h2'
        size='2xl'
        marginBottom='30px'
        marginTop='20px'
      >
        { info?.name.replace(/^./, info?.name[0].toUpperCase()) }
      </Heading>
      <Card>
        <div>
          <ImgDiv bgcolor={ info?.types[0].type.name }>
            <Image 
              src={ info?.sprites.front_default }
              alt={ info?.name }
              boxSize='300px'
            />
          </ImgDiv>
          <StatusDiv>  
            { info?.stats.map((each, index) => {
              return (
                <Stat color='#e2e1e1' key={ index }>
                  <StatLabel>{ each.stat.name.replace('-', ' ').toLocaleUpperCase() }</StatLabel>
                  <StatNumber>{ each.base_stat }</StatNumber>
                </Stat>
              )
            })}
          </StatusDiv>
        </div>
        <div>
          <MoreInfo>
            <Text
              fontSize='2xl'
            >
              { `Tipo: ${colors[info?.types[0].type.name as keyof ITypesPT ] || 'Não definido'}` }
            </Text>
            <Text
              fontSize='2xl'
            >
              { `Tamanho: ${`${(info?.height / 10)}m`  || 'Não definido'}` }
            </Text>
            <Text
              fontSize='2xl'
            >
              { `Peso: ${`${(info?.weight / 10)}kg`  || 'Não definido'}` }
            </Text>
          </MoreInfo>
        </div>
      </Card>
    </MainDetails>
  )
}

export default PokemonDetails;
