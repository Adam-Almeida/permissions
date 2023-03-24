import fastify from 'fastify'

import {} from '@prisma/client'

export const app = fastify()

app.get('/', async (request, reply) => {
  return reply.send('hello world')
})
