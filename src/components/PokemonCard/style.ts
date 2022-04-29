import styled from "styled-components";
import { Link } from "react-router-dom";

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
  ghost: '#D5B2DE',
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
  ghost: string,
  white: string
}

export const Card = styled(Link)<ICard>`
  display: flex;
  width: 40%;
  min-width: 200px;
  height: 300px;
  border-radius: 10px;
  margin: 20px 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
  background-color:  ${(props) => colors[props.bgcolor as keyof IColor] || '#F2ECDF'}
`

export const ImgDiv = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
	border-radius: 50%;
	width: 150px;
	text-align: center;
`