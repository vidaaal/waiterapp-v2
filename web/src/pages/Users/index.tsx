import { Users as UsersIcon } from 'phosphor-react'

import { Header } from '../../components/Header'

export function Users() {
  return (
    <>
      <Header
        icon={<UsersIcon />}
        title="Usuários"
        description="Cadastre e gerencie seus usuários"
      />
    </>
  )
}
