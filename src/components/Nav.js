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
  margin: 0 auto;
  max-width: 500px;
`
const NavBtn = styled(Link)`
  border: 1px solid black;
  border-radius: 2px;
  color: black;
  cursor: pointer;
  height: 50%;
  font-size: 0.75rem;
  padding: 10px 1rem;
  text-decoration: none;
  :hover {
    box-shadow: 2px 2px;
  }
  &:nth-child(2) {
    margin-left: 5%;
  }
`
const Logo = styled(Link)`
  text-decoration: none;
  color: black;
  h1 {
    margin: 0;
  }
`
