import 'express-async-errors'
import cors from 'cors'

import express, { NextFunction, Request, Response } from 'express'
import { router } from './routes'
import { ZodError } from 'zod'
import { AppError } from './errors/AppError'

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof ZodError) {
      return response
        .status(400)
        .json({ message: 'Validation error.', issues: error.format() })
    }

    if (error instanceof AppError) {
      return response
        .status(error.statusCode)
        .json({ status: 'error', message: error.message })
    }

    console.log(error)

    return response
      .status(500)
      .json({ status: 'error', message: 'Internal server error' })
  },
)

app.listen(3333, () =>
  console.log('🚀 Server running at http://localhost:3333/'),
)
