import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({ log: ["query"] });

async function main() {
    // const user = await prisma.user.update({
    //     where: {
    //         email: "Sally@gmail.com"
    //     },
    //     data: {
    //         age: 45
    //     }
    // })
    // console.log(user);

    const user2 = await prisma.user.updateMany({
        where: {
            name: "Miky"
        },
        data: {
            name: "NewMiky"
        }
    })
    console.log(user2);
}

main()
    .catch(e => {
        console.log(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });