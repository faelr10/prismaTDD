import { prismaClient } from "../../database/prismaClient"

class UserRepository{

    async create(name:string){
        const user = await prismaClient.user.create({
            data:{
                name
            }
        })
        return user
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