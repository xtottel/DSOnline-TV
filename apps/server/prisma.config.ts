// prisma.config.ts
import 'dotenv/config'
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    // Add seed command if you have one
    // seed: 'tsx prisma/seed.ts',
  },
  datasource: {
    url: process.env.DATABASE_URL!,
  },
});