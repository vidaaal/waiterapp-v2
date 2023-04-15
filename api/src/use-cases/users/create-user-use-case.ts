import bcrypt from 'bcrypt'

import { AppError } from '@/errors/AppError'
import { UsersRepository } from '@/repositories/users-repository'
import { User } from '@prisma/client'

interface CreateUserUseCaseRequest {
  name: string
  email: string
  password: string
  role?: 'WAITER' | 'ADMIN'
}

interface CreateUserUseCaseResponse {
  user: User
}

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(
    data: CreateUserUseCaseRequest,
  ): Promise<CreateUserUseCaseResponse> {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new AppError('Usuário já existe!')
    }

    const passwordHash = await bcrypt.hash(data.password, 8)

    const user = await this.usersRepository.create({
      email: data.email,
      name: data.name,
      password_hash: passwordHash,
      role: data.role,
    })

    return { user }
  }
}
