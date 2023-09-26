import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({ log: ["query"] });

async function main() {
    // const user = await prisma.user.findMany({
    //     where: {
    //         userPreference: {
    //             emailUpdates: true,
    //         }
    //     }
    // });
    // console.log(user);

    // const user2 = await prisma.user.findMany({
    //     where: {
    //         writtenPost: {
    //             none: { //every, some
    //                 title: "Test"
    //             }
    //         }
    //     }
    // });
    // console.log(user2);
    
    const user3 = await prisma.post.findMany({
        where: {
            author: {
                is: { //isNot
                    age: 22
                }
            }
        }
    });
    console.log(user3);
}

main()
    .catch(e => {
        console.log(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });