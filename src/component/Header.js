import React from 'react'
import styled from "styled-components"
import {NavLink} from "react-router-dom"
import "./header.css"

function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo/>
        <Navigation>
            < Nav to=""  activeClassName=""     >Home</Nav>
            < Nav to="/about">About</Nav>
            < Nav to="/Todo">Todo</Nav>
           

        </Navigation>
      </Wrapper>
    </Container>
  )
}

export default Header
const Logo = styled.div`
width: 100px;
height: 60px;
background-color: white;
margin-right: 10px;
`
const Navigation = styled.div `
display: flex;
`
const Nav = styled(NavLink)`
padding: 15px;
display: flex;
justify-content: center;
align-items: center;
color: white;
text-decoration: none;

:hover{
  cursor: pointer;
  background-color:grey;
  color: white;
}
`

const Container = styled.div`
height: 80px;
width: 100%;
background-color: #0070B8;
`
const Wrapper = styled.div`
display: flex;
padding: 10px;
align-items: center;
`
