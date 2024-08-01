import {PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const criterion = {where:{id: {lte: 10}}}
    const users = await prisma.motorista.findMany(criterion)
    console.table(users)    
}

main()