import { CreateUserDTO } from '@/dtos/create-user-dto'
import { User } from '@prisma/client'

export interface UsersRepository {
  create: (data: CreateUserDTO) => Promise<User>
  findByEmail: (email: string) => Promise<User | null>
}
