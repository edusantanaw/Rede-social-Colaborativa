import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const { user, collaborators, project, invites  } = prisma;

export { user , collaborators, project, invites};
