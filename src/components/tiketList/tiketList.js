import Tiket from "../tiket/tiket";
import Button from "../UI/button/button";
import cls from "./tiketList.module.scss";

const TiketList = () => {
  return (
    <>
      <div className={cls.body}>
        <Tiket />
        <Button active="true">показать ещё 5 билетов</Button>
      </div>
    </>
  );
};

export default TiketList;
