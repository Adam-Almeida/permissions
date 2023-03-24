import { User } from '@prisma/client'
import { hash } from 'bcryptjs'
import { UsersAlreadyExistsError } from './errors/user-already-exists-error'
import UsersRepository from '@/repositories/users-respository'

interface RegisterUseCaseRequest {
  name: string
  email: string
  password: string
}

interface RegisterUseCaseResponse {
  user: User
}

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    name,
    email,
    password,
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const emailAlreadyExists = await this.usersRepository.findByEmail(email)

    const passwordHash = await hash(password, 6)

    if (emailAlreadyExists) {
      throw new UsersAlreadyExistsError()
    }
    // const prismaUsersRepository = new PrismaUsersRepository()

    const user = await this.usersRepository.create({
      name,
      email,
      password_hash: passwordHash,
    })

    return { user }
  }
}
