import styled from "styled-components";

const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
  white: '#FFF'
};

interface ICard {
  bgcolor?: string,
}

interface IColor {
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

export const Card = styled.div`
  display: flex;
  border-radius: 10px;
  margin: 20px 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const ImgDiv = styled.div<ICard>`
  background-color:  ${(props) => colors[props.bgcolor as keyof IColor] || '#F2ECDF'};
	border-radius: 50%;
	width: 300px;
	text-align: center;
`

export const StatusDiv = styled.div`
`