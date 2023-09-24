import TicketFilter from "../ticketFilter/ticketFilter";
import SideFilter from "../sideFilter/sideFilter";
import TiketList from "../tiketList/tiketList";
import cls from "./app.module.scss";
import Modal from "../UI/modal/modal";

import { useState } from "react";
import { useResize } from "../utils/useResize";

import Button from "../UI/button/button";

const App = () => {
  const [modalVisibleTiketFilter, setModalVisibleTiketFilter] = useState(false);
  const [modalVisibleSideFilter, setModalVisibleSideFilter] = useState(false);

  let size = useResize();

  return (
    <>
      <div className={cls.wrapper}>
        <div className={cls.logo}>
          <img src={require("./logo.png")} alt="Logo" />
        </div>
        <div className={cls.main}>
          {size > 767 ? <SideFilter /> : null}
          <div className={cls.content}>
            {size > 767 ? <TicketFilter /> : null}
            {size < 767 ? (
              <div className={cls.button}>
                <Button onClick={() => setModalVisibleTiketFilter(true)}>
                  Пересадки
                </Button>
                <Button onClick={() => setModalVisibleSideFilter(true)}>
                  Сортировка
                </Button>
              </div>
            ) : null}

            <TiketList />
          </div>
        </div>
      </div>

      <Modal
        visible={modalVisibleTiketFilter}
        setVisible={setModalVisibleTiketFilter}
      >
        <TicketFilter />
      </Modal>
      <Modal
        visible={modalVisibleSideFilter}
        setVisible={setModalVisibleSideFilter}
      >
        <SideFilter />
      </Modal>
    </>
  );
};

export default App;
