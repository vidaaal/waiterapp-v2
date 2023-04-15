import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { CreateUserUseCase } from '@/use-cases/users/create-user-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createUserBodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string(),
      role: z.enum(['WAITER', 'ADMIN']).optional(),
    })

    const { name, email, password, role } = createUserBodySchema.parse(
      request.body,
    )

    const createUserCase = new CreateUserUseCase(new PrismaUsersRepository())

    const { user } = await createUserCase.execute({
      name,
      email,
      password,
      role,
    })

    return response.status(201).json(user)
  }
}
