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

export const MainDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Card = styled.div`
  display: flex;
  max-width: 800px;
  justify-content: center;
  flex-wrap: wrap;
`

export const ImgDiv = styled.div<ICard>`
  background-color:  ${(props) => colors[props.bgcolor as keyof IColor] || '#F2ECDF'};
	border-radius: 10px;
	width: 300px;
	text-align: center;
`

export const StatusDiv = styled.div`
  display: flex;
  text-align: center; 
  align-items: flex-end;
  flex-wrap: wrap;
  margin: 10px 0px;
  width: 300px;
  padding: 15px 0px;
  border-radius: 10px;
  background-color: #606163; 

  dl {
    width: 100px;
  }
`

export const MoreInfo = styled.div`
  background-color: #054f77; 
  color: #e2e1e1;
  align-items: center;
  width: 300px;
  margin: 0px 20px;
  padding: 20px 20px 20px 60px;
  border-radius: 10px;
`