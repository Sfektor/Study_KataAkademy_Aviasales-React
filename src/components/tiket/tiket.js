import classes from "./tiket.module.scss";

const Tiket = () => {
  return (
    <div className={classes.tiket}>
      <div
        className={`${classes["tiket__row-header"]} ${classes["row-header"]}`}
      >
        <div className={classes["row-header__column"]}>13 400 P</div>
        <div className={classes["row-header__column"]}>
          <img src={require("./logo.png")} alt="Logo" />
        </div>
      </div>
      <div className={`${classes["tiket__row-main"]} ${classes["row-main"]}`}>
        <div className={classes["row-main__column"]}>
          <div className={classes["row-main__block-text"]}>
            <span>MOW – HKT</span>
            <span>10:45 – 08:00</span>
          </div>
          <div className={classes["row-main__block-text"]}>
            <span>MOW – HKT</span>
            <span>11:20 – 00:50</span>
          </div>
        </div>
        <div className={classes["row-main__column"]}>
          <div className={classes["row-main__block-text"]}>
            <span>В пути</span>
            <span>21ч 15м</span>
          </div>
          <div className={classes["row-main__block-text"]}>
            <span>В пути</span>
            <span>13ч 30м</span>
          </div>
        </div>
        <div className={classes["row-main__column"]}>
          <div className={classes["row-main__block-text"]}>
            <span>2 пересадки</span>
            <span>HKG, JNB</span>
          </div>
          <div className={classes["row-main__block-text"]}>
            <span>1 пересадка</span>
            <span>HKG</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiket;
