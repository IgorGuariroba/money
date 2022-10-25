import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.header`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 2rem;
    font-weight: 700;
    padding-left: 0.25rem;
  }
`

export const NewTransactionsButton = styled.button`
  height: 3.1rem;
  border: 0;
  background: ${(props) => props.theme['blue-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['blue-700']};
    transition: backgroud-color 0.2s;
  }
`
