import { HeaderContainer, HeaderContent, LogoImage,LogoContainer, NewTransactionsButton } from "./styles";
import logoimage from "../../assets/money.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <h1>Fatura<LogoImage src={logoimage} alt="" /></h1>
        </LogoContainer>
        <NewTransactionsButton>Nova transação</NewTransactionsButton>
      </HeaderContent>
    </HeaderContainer>
  )
}