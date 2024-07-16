export interface Task {
  id: number;
  name: string;
  detail: string;
  status: boolean;
}

export interface Data {
  newTask: string;
  tasks: Task[];
}

const data: Data = {
  newTask: "",
  tasks: [
    {
      id: 1,
      name: "Task 1",
      detail: "Task detail",
      status: false,
    },
    {
      id: 2,
      name: "Task 2",
      detail: "Task detail",
      status: false,
    },
    {
      id: 3,
      name: "Task 3",
      detail: "Task detail",
      status: false,
    },
  ],
};

export default data;
