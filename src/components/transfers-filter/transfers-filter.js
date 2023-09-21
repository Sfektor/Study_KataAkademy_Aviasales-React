import classes from "./transfers-filter.module.scss";

const TransfersFilter = () => {
  return (
    <div className={classes.filter}>
      <h2 className={classes["filter__title"]}>Количество пересадок</h2>
      <form>
        <div className={classes["filter__checkbox"]}>
          <label className={classes["filter__checkbox-custom"]}>
            <input type="checkbox" name="all" value="all" />
            <span>Все</span>
          </label>
        </div>

        <div className={classes["filter__checkbox"]}>
          <label className={classes["filter__checkbox-custom"]}>
            <input type="checkbox" name="noTransfers" value="noTransfers" />
            <span>Без пересадок</span>
          </label>
        </div>

        <div className={classes["filter__checkbox"]}>
          <label className={classes["filter__checkbox-custom"]}>
            <input type="checkbox" name="oneTransfers" value="oneTransfers" />
            <span>1 пересадка</span>
          </label>
        </div>

        <div className={classes["filter__checkbox"]}>
          <label className={classes["filter__checkbox-custom"]}>
            <input type="checkbox" name="twoTransfers" value="twoTransfers" />
            <span>2 пересадки</span>
          </label>
        </div>

        <div className={classes["filter__checkbox"]}>
          <label className={classes["filter__checkbox-custom"]}>
            <input
              type="checkbox"
              name="threeTransfers"
              value="threeTransfers"
            />
            <span>3 пересадки</span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default TransfersFilter;
