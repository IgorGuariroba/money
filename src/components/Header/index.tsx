import { HeaderContainer, HeaderContent, LogoImage,LogoContainer, NewTransactionsButton } from "./styles";
import { Wallet } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
        <Wallet size={40} color='#96c95c' />
        <span>Money</span>
        </LogoContainer>
        <NewTransactionsButton>Nova transação</NewTransactionsButton>
      </HeaderContent>
    </HeaderContainer>
  )
}