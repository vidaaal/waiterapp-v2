import { TextInput } from '../../components/TextInput'
import { Container, Content, Fields, Form } from './styles'

export function Login() {
  return (
    <Container>
      <Content>
        <Form>
          <Fields>
            <TextInput label="E-mail" placeholder="Seu e-mail de acesso" />

            <TextInput
              label="Senha"
              placeholder="Informe sua senha"
              type="password"
            />
          </Fields>
        </Form>
      </Content>
    </Container>
  )
}
