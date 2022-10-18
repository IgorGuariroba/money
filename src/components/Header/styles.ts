import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
  max-height: 8rem;

  @media (max-width: 700px) {
    padding: 1rem 0 1rem;
    max-height: 18rem;
  }
`

export const HeaderContent = styled.header`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    border: solid 1px white;
    justify-content: space-around; 
    gap: 1rem;
    padding: 0.5rem 0.35rem;
    text-align: start;
    align-items: flex-start;
  }  
`
export const LogoImage = styled.img`
  height: 3rem;
  padding: 0 0.3rem 0 1rem;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NewTransactionsButton = styled.button`
  height: 3.1rem;
  border: 0;
  background: ${props => props.theme['blue-500']};
  color: ${props => props.theme['white']};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme['blue-700']};
    transition: backgroud-color 0.2s;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
  `