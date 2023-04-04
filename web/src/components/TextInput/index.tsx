import { Eye, EyeSlash, WarningCircle } from 'phosphor-react'
import { InputHTMLAttributes, useState } from 'react'
import {
  Container,
  Content,
  ErrorMessageContainer,
  RawInput,
  RightIcon,
  TextLabel,
} from './styles'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  errorMessage?: string
}

export function TextInput({ label, errorMessage, ...rest }: TextInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const { type } = { ...rest }

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState)
  }

  return (
    <Container>
      <TextLabel>{label}</TextLabel>

      <Content>
        <RawInput
          error={!!errorMessage}
          {...rest}
          type={type === 'password' && isPasswordVisible ? 'text' : type}
        />

        {type === 'password' && (
          <>
            <RightIcon type="button" onClick={togglePasswordVisibility}>
              {!isPasswordVisible && <Eye size={20} />}

              {isPasswordVisible && <EyeSlash size={20} />}
            </RightIcon>
          </>
        )}
      </Content>

      {!!errorMessage && (
        <ErrorMessageContainer>
          <WarningCircle size={15} />

          <small>{errorMessage}</small>
        </ErrorMessageContainer>
      )}
    </Container>
  )
}
