import React from 'react'
import styled from "styled-components"

function Todo() {
  return (
    <Container>
      <Wrapper>
       <Side1>

       </Side1>
       <Side2>

       </Side2>
      </Wrapper>
    </Container>
  )
}

export default Todo

const Side1 = styled.div`
flex: 1;
`
const Side2 = styled.div`
width: 500px;
background-color: grey;
height: 100vh;
min-height: 100%;
`

const Container = styled.div``
const Wrapper = styled.div`
display: flex;
`
