import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { DescriptionComponent, PriceHighlight, TransactionContainer, TransactionTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm/>
        <TransactionTable>
          <tbody>
            <tr>
              <DescriptionComponent>Desenvovimento de Site</DescriptionComponent>
              <td>
                <PriceHighlight variant="income">
                  R$ 12.000.00
                </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <DescriptionComponent>Hamburger</DescriptionComponent>
              <td>
                <PriceHighlight variant="outcome">
                  - R$ 12.000.00
                </PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>

    </div>
  )
}