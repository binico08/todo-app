import { Filter } from "./Filter";
import "./assets/scss/Footer.scss";

export const Footer = ({
  todoItems,
  currFilter,
  onChangeFilter,
  onClearCompleted,
}) => {
  const completeTasks = todoItems.filter((el) => el.complete === true);
  const taskRemaining = todoItems.length - completeTasks.length;

  return (
    <>
      <section className="list-footer">
        <span>{taskRemaining} items left</span>
        <Filter currFilter={currFilter} onChangeFilter={onChangeFilter} className={'desktop'}/>
        <button onClick={onClearCompleted}>Clear Completed</button>
      </section>
      <Filter currFilter={currFilter} onChangeFilter={onChangeFilter} className={'mobile'}/>
    </>
  );
};
