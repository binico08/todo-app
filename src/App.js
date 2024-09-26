import { useMemo, useState } from "react";
import { CreateTask } from "./CreateTask";
import { Footer } from "./Footer";
import { ListContainer } from "./ListContainer";
import DarkIcon from "./assets/images/icon-sun.svg";
import LightIcon from "./assets/images/icon-moon.svg";
import "./assets/scss/App.scss";

const initTodos = [
  {
    task: "Complete React.js",
    complete: true,
    id: 1,
  },
  {
    task: "Jog around the park for 4km",
    complete: false,
    id: 2,
  },
  {
    task: "30 minutes play the guitar",
    complete: true,
    id: 3,
  },
  {
    task: "Read for 1 hour",
    complete: false,
    id: 4,
  },
  {
    task: "Buy groceries",
    complete: false,
    id: 5,
  },
  {
    task: "Complete Todo React",
    complete: false,
    id: 6,
  },
];

function App() {
  const [listItems, setListItems] = useState(initTodos);
  const [currFilter, setCurrFilter] = useState("all");
  const [isDark, setIsDark] = useState(true);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  const filteredList = useMemo(() => {
    if (currFilter === "all") return listItems;
    if (currFilter === "active")
      return listItems.filter((item) => !item.complete);
    if (currFilter === "completed")
      return listItems.filter((item) => item.complete);
  }, [listItems, currFilter]);

  function handleToggleCompleted(taskId) {
    setListItems((items) =>
      items.map((item) =>
        item.id === taskId ? { ...item, complete: !item.complete } : item
      )
    );
  }

  function handleAddItem(e, newItem) {
    if (!newItem) return;

    setListItems([
      ...listItems,
      { task: newItem, complete: false, id: Math.floor(Math.random() * 100) },
    ]);
  }

  function handleClearCompleted() {
    setListItems((items) => items.filter((item) => !item.complete));
  }

  function handleDeleteItem(taskToDelete) {
    setListItems((items) =>
      items.filter((item) => item.id !== taskToDelete.id)
    );
  }

  function handleDarkModeToggle() {
    setIsDark((prev) => !prev);
  }

  function handleEditItem(taskId, task) {
    setEditTaskId(taskId);
    setEditedTask(task);
  }

  function handleCancelEdit() {
    setEditTaskId(null);
    setEditedTask("");
  }

  function handleSaveEdit(taskId) {
    setListItems((items) =>
      items.map((item) =>
        item.id === taskId ? { ...item, task: editedTask } : item
      )
    );
    // Resetting the edit state
    setEditTaskId(null);
    setEditedTask("");
  }

  return (
    <div className={`App ${isDark ? "dark" : "light"}`}>
      <div className="app-container">
        <section className="header">
          <h1>TODO</h1>
          <img
            src={isDark ? DarkIcon : LightIcon}
            alt={isDark ? "Dark Mode Icon" : "Light Mode Icon"}
            onClick={handleDarkModeToggle}
          />
        </section>
        <CreateTask onAddItem={handleAddItem} />
        <ListContainer
          todoItems={filteredList}
          onToggleCompleted={handleToggleCompleted}
          onDeleteItem={handleDeleteItem}
          onEditItem={handleEditItem}
          editTaskId={editTaskId}
          editedTask={editedTask}
          onCancelEdit={handleCancelEdit}
          onSaveEdit={handleSaveEdit}
          onEditedTaskChange={setEditedTask}
        />
        <Footer
          todoItems={listItems}
          currFilter={currFilter}
          onChangeFilter={setCurrFilter}
          onClearCompleted={handleClearCompleted}
        />
      </div>
    </div>
  );
}

export default App;
