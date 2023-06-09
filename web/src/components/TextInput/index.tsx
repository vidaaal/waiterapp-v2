import { Eye, EyeSlash, WarningCircle } from 'phosphor-react'
import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useState,
} from 'react'
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

const TextInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  TextInputProps
> = ({ label, errorMessage, ...rest }, ref) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const { type } = { ...rest }

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState)
  }

  return (
    <Container>
      <TextLabel>{label}</TextLabel>

      <Content error={!!errorMessage}>
        <RawInput
          {...rest}
          ref={ref}
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

export const TextInput = forwardRef(TextInputBase)
