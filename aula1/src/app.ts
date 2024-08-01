import { PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    var users = await prisma.user.findMany();
    console.log(users);
}
main().catch(e => {
    console.error(e);
    process.exit(1);
});