import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const Project = pgTable("project", {
  id: serial("id").primaryKey(),
  name: varchar("name"),
  url: text("url"),
  description: text("description"),
});
