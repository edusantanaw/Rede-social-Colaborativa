import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const {
  user,
  collaborators,
  project,
  invites,
  task,
  message,
  post,
  comments,
  follows,
  likes,
  responses,
} = prisma;

export {
  user,
  collaborators,
  project,
  invites,
  task,
  prisma,
  message,
  responses,
  post,
  comments,
  follows,
  likes,
  
};
