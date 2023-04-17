import { UsersRepository } from '@/repositories/users-repository'
import { User } from '@prisma/client'

interface ListAllUsersUseCaseResponse {
  users: User[]
}

export class ListAllUsersUseCase {
  constructor(private usersRespository: UsersRepository) {}

  async execute(): Promise<ListAllUsersUseCaseResponse> {
    const users = await this.usersRespository.findMany()

    return { users }
  }
}
