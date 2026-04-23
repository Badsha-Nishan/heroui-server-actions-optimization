import { revalidatePath } from "next/cache";
import { postTasks } from "./tasks";
import { redirect } from "next/navigation";

export async function createATask(formData) {
  "use server";
  //   const title = formData.get("name");
  //   const description = formData.get("description");
  //   const status = formData.get("status");
  //   const priority = formData.get("priority");
  //   const assignedTo = formData.get("assignedTo");

  const newTask = Object.fromEntries(formData.entries());

  const res = await postTasks(newTask);
  if (res.ok) {
    revalidatePath("/tasks");
  }
  return res;
}

export async function AddATask(formData) {
  "use server";
  const newTask = Object.fromEntries(formData.entries());
  const res = await postTasks(newTask);
  if (res.ok) {
    revalidatePath("/tasks");
    redirect("/tasks");
  }
  return res;
}
