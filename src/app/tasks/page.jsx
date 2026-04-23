import { AddTask } from "@/components/AddTask";
import TasksCard from "@/components/TasksCard";
import { createATask } from "@/lib/actions";
import { getTasks } from "@/lib/tasks";
import React from "react";

const TasksPage = async () => {
  const tasksPromise = await getTasks();
  const tasks = tasksPromise.tasks;
  return (
    <div>
      <h2>Tasks: {tasks.length}</h2>
      <AddTask createATask = {createATask} />
      <div className="grid grid-cols-3 gap-4 pt-6">
        {tasks.map((task) => (
          <TasksCard key={task.id} task={task}></TasksCard>
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
