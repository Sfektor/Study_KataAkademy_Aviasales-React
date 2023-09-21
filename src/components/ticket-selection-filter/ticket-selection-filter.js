import classes from "./ticket-selection-filter.module.scss";

const TicketSelectionFilter = () => {
  return (
    <div className={classes["tiket-filter"]}>
      <ul className={classes["tiket-filter__items"]}>
        <li className={classes["tiket-filter__item"]}>самый дешёвый</li>
        <li className={classes["tiket-filter__item"]}>самый быстрый</li>
        <li className={`${classes["tiket-filter__item"]} ${classes.active}`}>
          оптимальный
        </li>
      </ul>
    </div>
  );
};

export default TicketSelectionFilter;
