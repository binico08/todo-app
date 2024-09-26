import "./assets/scss/Footer.scss";
import "./assets/scss/Filter.scss";

export const Filter = ({ currFilter, onChangeFilter, className }) => {
  
  function handleFilterChange(e) {
    onChangeFilter(e.target.value);
  }

  return (
    <form className={`footer-filter ${className}`}>
      <fieldset>
        <input
          type="radio"
          id="all"
          name="all"
          value="all"
          checked={currFilter === "all"}
          onChange={handleFilterChange} />
        <label htmlFor="all" className={currFilter === "all" ? "active" : ""}>
          All
        </label>

        <input
          type="radio"
          id="active"
          name="active"
          value="active"
          checked={currFilter === "active"}
          onChange={handleFilterChange} />
        <label
          htmlFor="active"
          className={currFilter === "active" ? "active" : ""}
        >
          Active
        </label>

        <input
          type="radio"
          id="completed"
          name="completed"
          value="completed"
          checked={currFilter === "completed"}
          onChange={handleFilterChange} />
        <label
          htmlFor="completed"
          className={currFilter === "completed" ? "active" : ""}
        >
          Completed
        </label>
      </fieldset>
    </form>
  );
};
