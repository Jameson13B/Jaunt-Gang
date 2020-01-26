import React from 'react'
import styled from 'styled-components'

const Home = props => {
  return (
    <Container>
      <h2>Welcome to the Jaunt Gang</h2>
      <h4>
        This site will provde details of upcoming jaunts. We hope you join the
        gang and make jaunting a part of your life.
      </h4>
      <h6>What is a jaunt?</h6>
      <h6>How to join?</h6>
      {/* Check if registered if yes, show profile else, show register/login cta */}
    </Container>
  )
}

export default Home

const Container = styled.div`
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
`
