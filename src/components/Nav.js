import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = props => {
  return (
    <NavBar>
      <Logo to='/'>
        <h1>Jaunt Gang</h1>
      </Logo>
      <div style={{ flexGrow: 1, textAlign: 'right' }}>
        <NavBtn to='/jaunts'>Jaunts</NavBtn>
        <NavBtn to='/about'>About</NavBtn>
      </div>
    </NavBar>
  )
}

export default Nav

const NavBar = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 15px auto;
  max-width: 600px;
`
const NavBtn = styled(Link)`
  border: 1px solid black;
  border-radius: 2px;
  color: black;
  cursor: pointer;
  height: 50%;
  font-family: Oswald, sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 10px 1rem;
  text-decoration: none;
  :hover {
    box-shadow: 3px 3px;
  }
  &:nth-child(2) {
    margin-left: 5%;
  }
  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`
const Logo = styled(Link)`
  text-decoration: none;
  color: black;
  h1 {
    margin: 0;
    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
`
