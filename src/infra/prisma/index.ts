import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const { user, collaborators, project, invites, task, message  } = prisma;

export { user , collaborators, project, invites, task, prisma, message};
