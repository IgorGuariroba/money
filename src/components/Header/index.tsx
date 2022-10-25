import {
  HeaderContainer,
  HeaderContent,
  LogoContainer,
  NewTransactionsButton,
} from './styles'
import { Wallet } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <Wallet size={40} color="#96c95c" />
          <span>Money</span>
        </LogoContainer>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionsButton>Nova transação</NewTransactionsButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
