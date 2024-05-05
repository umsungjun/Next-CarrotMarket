import { PrismaClient } from "@prisma/client";

/* 실행 명령어: npx prisma db seed */
const client = new PrismaClient();

async function main() {
  for (let item = 0; item < 20; item++) {
    const stream = await client.stream.create({
      data: {
        name: `${item}번째 라이브 방송`,
        description: `${item}번째 라이브 방송 설명`,
        price: `${item * 10000}`,
        user: {
          connect: {
            id: 13,
          },
        },
      },
    });
    console.log("Created stream:", stream);
  }
}

main()
  .catch((e) => console.log(e))
  .finally(() => client.$disconnect());
