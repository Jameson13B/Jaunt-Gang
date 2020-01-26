import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const Jaunt = props => {
  const date = moment(props.jaunt.date.toDate())

  return (
    <Container>
      <Top>
        <img
          alt='jaunt hero'
          src='http://go-design.co/koken/storage/cache/images/000/201/jaunt-logo,medium.2x.1571946435.png'
        />
      </Top>
      <Date>
        <Month>{date.format('MMM')}</Month>
        <Day>{date.format('DD')}</Day>
        <Time>{date.format('h:mma')}</Time>
      </Date>
      <Bottom>
        <Title>{props.jaunt.title}</Title>
        <p>{props.jaunt.body}</p>
      </Bottom>
    </Container>
  )
}

export default Jaunt

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid black;
  margin-bottom: 20px;
`
const Top = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  img {
    max-width: 500px;
    width: 100%;
  }
`
const Date = styled.div`
  border: 3px solid black;
  display: flex;
  left: -3px;
  padding-top: 5px;
  padding-bottom: 5px;
  position: relative;
  top: 50%;
  width: 100%;
`
const Month = styled.h1`
  border-bottom: 3px solid black;
  margin: 5px;
  text-transform: uppercase;
  transform: rotate(-90deg);
`
const Day = styled.h1`
  border-right: 3px solid black;
  font-size: 3rem;
  margin: 0;
  padding-right: 10px;
`
const Time = styled.h1`
  font-size: 2rem;
  margin: auto 0;
  padding-left: 10px;
  font-style: italic;
`
const Bottom = styled.div`
  box-sizing: borderbox;
  background: black;
  color: white;
  padding: 15px;
`
const Title = styled.h1`
  margin: 0;
`
