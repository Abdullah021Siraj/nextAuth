import {PrismaClient} from '@prisma/client'

export const db = globalThis.prisma || new PrismaClient()

// all we are doing here is making sure that prisma is only initialized once

if(process.env.NODE_ENV !== 'production') globalThis.prisma = db

