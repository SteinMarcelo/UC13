import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()

async function main()  {
    let visitante: Prisma.visitantesCreateInput;
  
    // Check if posts should be included in the query
      visitante = {
        nome: 'Marcelo',
        doc: '402520'
      }
    // Pass 'user' object into query
    const createVisitante= await prisma.visitantes.create({ data: visitante })
}

main()