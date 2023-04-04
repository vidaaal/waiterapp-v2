import { TextInput } from '../../components/TextInput'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Container, Content, Fields, Form, Header } from './styles'

import logo from '../../assets/images/logo.svg'
import { Button } from '../../components/Button'

const loginFormSchema = z.object({
  email: z.string().email({ message: 'Formato de e-mail inválido.' }),
  password: z
    .string()
    .min(6, { message: 'Senha deve ter pelo menos 6 caracteres.' }),
})

type LoginFormFields = z.infer<typeof loginFormSchema>

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>({
    resolver: zodResolver(loginFormSchema),
  })

  function handleLogin(data: LoginFormFields) {
    console.log(data)
  }

  return (
    <Container>
      <Content>
        <Header>
          <p>Bem-vindo(a) ao</p>

          <img src={logo} alt="WaiterApp" />
        </Header>

        <Form onSubmit={handleSubmit(handleLogin)} noValidate>
          <Fields>
            <TextInput
              label="E-mail"
              placeholder="Seu e-mail de acesso"
              type="email"
              errorMessage={errors.email?.message}
              {...register('email')}
            />

            <TextInput
              label="Senha"
              placeholder="Informe sua senha"
              type="password"
              errorMessage={errors.password?.message}
              {...register('password')}
            />
          </Fields>

          <Button type="submit">Fazer Login</Button>
        </Form>
      </Content>
    </Container>
  )
}
