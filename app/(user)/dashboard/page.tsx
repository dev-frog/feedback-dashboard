import NewProjBtn from "@/components/new-proj";
import { db } from "@/db";
import { Project } from "@/db/schema";

export default async function Page() {
  const allProjects = await db.select().from(Project);

  return (
    <div>
      <NewProjBtn />
    </div>
  );
}
