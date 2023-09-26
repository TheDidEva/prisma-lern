import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({ log: ["query"] });

async function main() {

    await prisma.user.deleteMany();
    const user = await prisma.user.create({
        data: {
            name: "kyle",
            email: "kyle@gmail.com",
            age: 27,
            userPreference: {
                create: {
                    emailUpdates: true,
                },
            },
        },

        //в console.log отримаємо дані з таблиці userPreference

        // include: {
        //     userPreference: true
        // }

        //робимо select запит, в console.log виведе імя юзера та табл. userPreference
        select: {
            name: true,
            userPreference: true,
        }
    });

    //------- CREATE_MANY

    const users = await prisma.user.createMany({
        data: [{
            name: "Sally",
            email: "Sally@gmail.com",
            age: 22,
        }, {
            name: "Miky",
            email: "Miky@gmail.com",
            age: 23,
        }, {
            name: "Miky",
            email: "Mik2y@gmail.com",
            age: 24,
        }]
    });

    console.log(user);
    console.log(users);
}

main()
    .catch(e => {
        console.log(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });