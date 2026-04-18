import prisma from "./prisma/index.js"

async function main() {
    const user = await prisma.user.create ({
        data: {
            email: "test@example.com",
            name: "Hamza",
            password: "12345" 
        }
    });

    console.log(user);
    
}

main();