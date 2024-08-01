import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()

async function main()  {
    let motorista: Prisma.motoristaCreateInput;
  
    // Check if posts should be included in the query
      motorista = {
        id: 4,
        nome: 'fff',
        cnh: 402520,
        data_emi: '2024-07-30T00:00:00.000Z'
      }
    // Pass 'user' object into query
    const createMotorista = await prisma.motorista.create({ data: motorista })
}

main()