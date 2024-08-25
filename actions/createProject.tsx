"use server";
import { db } from "@/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Project } from "@/db/schema";
import { redirect } from "next/navigation";

export async function createProject(formData: FormData) {
  const { userId } = auth();

  const projects = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    url: formData.get("url") as string,
    userId,
  };

  const newProject = await db
    .insert(Project)
    .values(projects)
    .returning({ id: Project.id });

  // return newProject[0].id;
  redirect(`/projects/${newProject[0].id}/instructions`);
}
