import {Li, CountryNameAndRemove, Image, RemoveButton, Para} from './styles'

const VisitedCountries = props => {
  const {data, removeFun} = props
  const {imageUrl, name, id} = data

  const onRemove = () => {
    removeFun(id)
  }

  return (
    <Li>
      <Image src={imageUrl} alt="thumbnail" />
      <CountryNameAndRemove>
        <Para>{name}</Para>
        <RemoveButton onClick={onRemove}>Remove</RemoveButton>
      </CountryNameAndRemove>
    </Li>
  )
}

export default VisitedCountries
