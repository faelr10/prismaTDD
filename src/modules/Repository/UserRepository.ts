import { prismaClient } from "../../database/prismaClient"
import prisma from '../../../client'

class UserRepository{

    async create(name:string){
        const user = await prisma.user.create({
            data:{
                name
            }
        })
        return user
    }

    async findAll():Promise<object>{
        const result = await prisma.user.findMany()
        return result
    }

    async delete(id:string){
        await prismaClient.user.delete({
            where: {
                id
            }
        })
    }

}

export {UserRepository}