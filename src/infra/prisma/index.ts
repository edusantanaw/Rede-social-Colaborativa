import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const { user, collaborators, project, invites, task  } = prisma;

export { user , collaborators, project, invites, task};
