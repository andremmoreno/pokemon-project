import { Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = () => {
  return (
    <Link to='/'>
      <LogoDiv>
        <Image 
          align="center"
          src="https://pokedex.sleduardo.dev/img/logo.svg"
          alt="Logo"
          width='500px'
          />
      </LogoDiv>
    </Link>
  )
}

export default Logo

const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
`