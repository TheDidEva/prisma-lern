import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({ log: ["query"] });

async function main() {

    
    //-----CREATE NEW USER

    // const user = await prisma.user.create({ data: { name: "SecondName" } });
    // console.log(user);

    //-----FIND ALL USERS 

    const findUsers = await prisma.user.findMany();
    console.log(findUsers);


    //-----DELETE MANY

    // const findUsers = await prisma.user.deleteMany();
    // console.log(findUsers);
    

}

main()
    .catch(e => {
        console.log(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });