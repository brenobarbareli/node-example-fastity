import { FastifyInstance } from 'fastify'
import { ZodError } from 'zod'
import { BadRequest } from './routes/_errors/bad-request'

type FastifyErroHandler = FastifyInstance['errorHandler']

export const errorHandler: FastifyErroHandler = (error, request, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: `Validation error`,
      erros: error.flatten().fieldErrors,
    })
  }

  if (error instanceof BadRequest) {
    return reply.status(400).send({
      message: error.message,
    })
  }

  return reply.status(500).send({
    message: 'Internal server error',
  })
}
