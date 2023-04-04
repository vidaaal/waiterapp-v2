import { TextInput } from '../../components/TextInput'
import { Container, Content, Fields, Form, Header } from './styles'

import logo from '../../assets/images/logo.svg'
import { Button } from '../../components/Button'

export function Login() {
  return (
    <Container>
      <Content>
        <Header>
          <p>Bem-vindo(a) ao</p>

          <img src={logo} alt="WaiterApp" />
        </Header>

        <Form>
          <Fields>
            <TextInput label="E-mail" placeholder="Seu e-mail de acesso" />

            <TextInput
              label="Senha"
              placeholder="Informe sua senha"
              type="password"
            />
          </Fields>

          <Button type="submit" disabled>Fazer Login</Button>
        </Form>
      </Content>
    </Container>
  )
}
