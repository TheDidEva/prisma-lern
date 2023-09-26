import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({ log: ["query"] });

async function main() {
    // const user = await prisma.user.findUnique({
    //     where: {
    //         email: "kyle@gmail.com"
    //     }
    // });
    // console.log(user);

    // const user2 = await prisma.user.findUnique({
    //     where: {
    //         age_name: {
    //             age: 27,
    //             name: "kyle"
    //         }
    //     }
    // });
    // console.log(user2);

    // const user3 = await prisma.user.findMany({ //findMany
    //     where: {
    //         name: "Miky"
    //     }
    // });
    // console.log(user3);

    // const user4 = await prisma.user.findMany({ //findMany
    //     where: {
    //         name: "Miky"
    //     },
    //     take: 2, //виведе 2 елементи з імям Miky
    // });
    // console.log(user4);


    //  --------------------FILTER----------------------

    // const user5 = await prisma.user.findMany({ //findMany
    //     where: {
    //         name: { notIn: ["Miky"] }//замість equals: "name" можна використовувати not, 
    //         //Або in:["name1", "name2"] щоб отримати всі поля в  яких є імя з параметрів, також є notin
    //     },
    // });
    // console.log(user5);

    // const user6 = await prisma.user.findMany({ //findMany
    //     where: {
    //         age: {gt: 23} // виведе всі поля де age < 23
    //         //gt виведе всі поля де більше вказаного парамктра
    //         //lte манше або дорінює параметру
    //         //gte більше або дорінює параметру
    //     },
    // });
    // console.log(user6);


    const user7 = await prisma.user.findMany({ //findMany
        where: {
            // email: {contains: "@gmail.com"} //contains - перевіряє чи є десь в стрінгу заданий параметр
            //endsWith перевіряє чи знаходися в кінці
            //startsWith перевіряє чи знаходится на початку


            // AND: [
            //     { email: { startsWith: "Sally" } },
            //     { name: "Sally" }
            // ]

            // OR: [
            //     { email: { startsWith: "Sally" } },
            //     { age: { gt: 23 } }
            // ]

            NOT: [
                { email: { startsWith: "Sally" } },
                { age: { gt: 23 } }
            ]
        },
    });
    console.log(user7);
}

main()
    .catch(e => {
        console.log(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });