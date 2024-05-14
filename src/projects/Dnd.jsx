import React from "react";

const Dnd = () => {
  const initialTasks = JSON.parse(localStorage.getItem("tasks")) || {
    backlogs: [],
    inProgress: [],
    completed: [],
  };

  const [inputValue, setInputValue] = React.useState("");
  const [backlogs, setBacklogs] = React.useState(initialTasks.backlogs);
  const [inProgress, setInProgress] = React.useState(initialTasks.inProgress);
  const [completed, setCompleted] = React.useState(initialTasks.completed);

  React.useEffect(() => {
    // storing the tasks in local storage
    localStorage.setItem(
      "tasks",
      JSON.stringify({ backlogs, inProgress, completed })
    );
  }, [backlogs, inProgress, completed]);

  const onItemAdd = (e) => {
    e.preventDefault();
    if (!inputValue) return;

    if (
      backlogs.includes(inputValue) ||
      inProgress.includes(inputValue) ||
      completed.includes(inputValue)
    ) {
      alert("Task already exists");

      setInputValue("");
      return;
    }

    setBacklogs([...backlogs, inputValue]);
    setInputValue("");
  };

  const handleDragStart = (e, task, source) => {
    e.dataTransfer.setData("task", task);
    e.dataTransfer.setData("source", source);
  };

  const handleDrop = (e, column) => {
    const task = e.dataTransfer.getData("task");
    const source = e.dataTransfer.getData("source");
    if (source !== column) {
      switch (column) {
        case "backlog":
          setBacklogs([...backlogs, task]);
          break;
        case "in progress":
          setInProgress([...inProgress, task]);
          break;
        case "completed":
          setCompleted([...completed, task]);
          break;
        default:
          break;
      }
    }

    if (source !== column) {
      switch (source) {
        case "backlog":
          setBacklogs(backlogs.filter((item) => item !== task));
          break;
        case "in progress":
          setInProgress(inProgress.filter((item) => item !== task));
          break;
        case "completed":
          setCompleted(completed.filter((item) => item !== task));
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="dnd-container border-2 border-red-300 min-h-screen">
      <div className="input-container text-center m-4">
        <form onSubmit={onItemAdd}>
          <input
            type="text"
            className="rounded-md border-2 border-gray-200 p-2 w-1/4 outline-none focus:transition-all focus:border-gray-400"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <button
            className="bg-purple-200 p-2 hover:bg-purple-400 hover:text-white rounded-md ml-2 transition-colors duration-100"
            type="submit"
          >
            Add Task
          </button>

          <button
            className="bg-red-200 p-2 hover:bg-red-400 hover:text-white rounded-md ml-2 transition-colors duration-100"
            type="button"
            onClick={() => {
              setBacklogs([]);
              setInProgress([]);
              setCompleted([]);

              localStorage.removeItem("tasks");
            }}
          >
            Delete All Task
          </button>
        </form>
      </div>
      <div className="dnd flex justify-around gap-4">
        <Column
          name="backlog"
          tasks={backlogs}
          onDragStart={handleDragStart}
          onDrop={(e) => handleDrop(e, "backlog")}
        />

        <Column
          name="in progress"
          tasks={inProgress}
          onDragStart={handleDragStart}
          onDrop={(e) => handleDrop(e, "in progress")}
        />

        <Column
          name="completed"
          tasks={completed}
          onDragStart={handleDragStart}
          onDrop={(e) => handleDrop(e, "completed")}
          handleRemove={(e) => {
            // deleting based on the task name
            // this can be improved by adding a unique id to each task
            // we are allowing user to delete a task which is completed only
            setCompleted([
              ...completed.filter(
                (item) => item !== e.target.previousSibling.textContent
              ),
            ]);
          }}
        />
      </div>
    </div>
  );
};

function Column({ name, tasks, onDragStart, onDrop, handleRemove }) {
  return (
    <div
      className={`colum min-h-96 w-96 ${
        name === "backlog"
          ? "bg-red-200"
          : name === "in progress"
          ? "bg-green-200"
          : "bg-blue-200"
      } `}
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
    >
      <h2 className="text-center font-bold py-2 border-2 border-purple-400">
        {name.toUpperCase()}
      </h2>
      <div className="tasks transition-all duration-150">
        {tasks.map((task, index) => (
          <Task
            key={task + index}
            title={name}
            task={task}
            onDragStart={onDragStart}
            onDrop={onDrop}
            handleRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
}

function Task({ title, task, onDragStart, handleRemove = () => {} }) {
  return (
    <div
      className="task bg-purple-100 p-2 m-2 border-2 border-purple-400 rounded-md flex justify-between"
      draggable
      onDragStart={(e) => onDragStart(e, task, title)}
    >
      <span>{task}</span>
      {title === "completed" && (
        <span className="cursor-pointer" onClick={handleRemove}>
          X
        </span>
      )}
    </div>
  );
}

export default Dnd;
