import "./assets/scss/ListItem.scss";
import IconCross from './assets/images/icon-cross.svg'

export const ListItem = ({ item, onToggleCompleted, onDeleteItem }) => {
  return (
    <li
      className={`list-item ${item.complete ? "completed" : ""}`}
      onClick={() => onToggleCompleted(item.id)}
    >
      <p>{item.task}</p>
      <img src={IconCross} onClick={() => onDeleteItem(item)} alt="Close Icon"/>
    </li>
  );
};
