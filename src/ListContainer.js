import "./assets/scss/ListContainer.scss";
import { ListItem } from "./ListItem";

export const ListContainer = ({
  todoItems,
  onToggleCompleted,
  onDeleteItem,
  onEditItem,
  editTaskId,
  editedTask,
  onCancelEdit,
  onSaveEdit,
  onEditedTaskChange,
}) => {
  return (
    <section className="list-body">
      <ul className="todo-list">
        {todoItems.map((el) => (
          <ListItem
            key={el.id}
            item={el}
            onToggleCompleted={onToggleCompleted}
            onDeleteItem={onDeleteItem}
            onEditItem={onEditItem}
            editTaskId={editTaskId}
            editedTask={editedTask}
            onCancelEdit={onCancelEdit}
            onSaveEdit={onSaveEdit}
            onEditedTaskChange={onEditedTaskChange}
          />
        ))}
      </ul>
    </section>
  );
};
