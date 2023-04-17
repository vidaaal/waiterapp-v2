import { Request, Response } from 'express'

import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { ListAllUsersUseCase } from '@/use-cases/users/list-all-users-use-case'

export class ListAllUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllOrdersUseCase = new ListAllUsersUseCase(
      new PrismaUsersRepository(),
    )

    const { users } = await listAllOrdersUseCase.execute()

    return response.json(users)
  }
}
