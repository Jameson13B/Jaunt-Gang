import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Jaunt from '../components/Jaunt'
import { db, now } from '../Firebase'

const JauntList = props => {
  const [jaunts, setJaunts] = useState([])

  useEffect(() => {
    db.collection('jaunts')
      .where('date', '>', now)
      .onSnapshot(res => {
        let jaunts = []
        res.forEach(doc => jaunts.push({ ...doc.data(), id: doc.id }))
        setJaunts(jaunts)
      })
  }, [])

  return (
    <Container>
      {jaunts.map(jaunt => {
        return <Jaunt key={jaunt.id} jaunt={jaunt} />
      })}
    </Container>
  )
}

export default JauntList

const Container = styled.div`
  margin: 0 auto;
  max-width: 600px;
`
