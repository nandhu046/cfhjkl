import {Li, VisitButton, Name, Para} from './styles'

const Countries = props => {
  const {data, visitFun} = props
  const {id, name, isVisited} = data

  const clickOnVisit = () => {
    visitFun(id)
  }

  const visitOrNot = isVisited ? (
    <Para>Visited</Para>
  ) : (
    <VisitButton onClick={clickOnVisit}>Visit</VisitButton>
  )

  return (
    <Li>
      <Name>{name}</Name>
      {visitOrNot}
    </Li>
  )
}

export default Countries
