import { prismaMock } from './../../singleton'
import { UserRepository } from '../modules/Repository/UserRepository'

describe('test', () => {
  it('test1', async () => {
    const userRepository = new UserRepository()
    const user = { id: '123456', name: 'Rafael' }
    prismaMock.user.create.mockResolvedValue(user)
    await expect(userRepository.create('')).resolves.toEqual({ id: '123456', name: 'Rafael' })
  })

  it('test2', async () => {
    const userRepository = new UserRepository()
    const list = [{ id: '123456', name: 'Rafael' }, { id: '654321', name: 'Adriano' }]
    prismaMock.user.findMany.mockResolvedValueOnce(list)
    await expect(userRepository.findAll()).resolves.toEqual([{ id: '123456', name: 'Rafael' }, { id: '654321', name: 'Adriano' }])
  })

})