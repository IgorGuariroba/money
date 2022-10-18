import { HeaderContainer, HeaderContent, LogoImage,LogoContainer, NewTransactionsButton } from "./styles";
import logoimage from "../../assets/money.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <LogoImage src={logoimage} alt="" />
        </LogoContainer>
        <NewTransactionsButton>Nova transação</NewTransactionsButton>
      </HeaderContent>
    </HeaderContainer>
  )
}