import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:Xf5hBa7iwxsR@ep-damp-wind-a56mq52c.us-east-2.aws.neon.tech/AI-Form?sslmode=require'
  }
});     