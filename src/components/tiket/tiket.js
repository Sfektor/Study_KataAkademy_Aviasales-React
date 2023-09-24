import cls from "./tiket.module.scss";

const Tiket = () => {
  return (
    <div className={cls.body}>
      <div className={cls["row-header"]}>
        <div className={cls["row-header__column"]}>13 400 P</div>
        <div className={cls["row-header__column"]}>
          <img src={require("./logo.png")} alt="Logo" />
        </div>
      </div>
      <div className={cls["row-main"]}>
        <div className={cls["row-main__column"]}>
          <div className={cls["row-main__block-text"]}>
            <span>MOW – HKT</span>
            <span>10:45 – 08:00</span>
          </div>
          <div className={cls["row-main__block-text"]}>
            <span>MOW – HKT</span>
            <span>11:20 – 00:50</span>
          </div>
        </div>
        <div className={cls["row-main__column"]}>
          <div className={cls["row-main__block-text"]}>
            <span>В пути</span>
            <span>21ч 15м</span>
          </div>
          <div className={cls["row-main__block-text"]}>
            <span>В пути</span>
            <span>13ч 30м</span>
          </div>
        </div>
        <div className={cls["row-main__column"]}>
          <div className={cls["row-main__block-text"]}>
            <span>2 пересадки</span>
            <span>HKG, JNB</span>
          </div>
          <div className={cls["row-main__block-text"]}>
            <span>1 пересадка</span>
            <span>HKG</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiket;
