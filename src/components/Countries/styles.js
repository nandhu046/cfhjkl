import styled from 'styled-components'

export const Li = styled.li`
  list-style-type: none;
  padding: 15px;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: 'Roboto';
  border-bottom-width: 1.5px;
  border-bottom-style: solid;
  border-color: #334155;
  flex-wrap: wrap;
`

export const Name = styled.p`
  margin: 5px;
  font-size: 18px;
  color: #ffffff;
`

export const Para = styled.p`
  color: #94a3b8;
  margin: 0px;
  padding-right: 10px;
`

export const VisitButton = styled.button`
  background-color: #3b82f6;
  border-width: 0px;
  border-radius: 4px;
  padding: 7px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
  color: #ffffff;
`
