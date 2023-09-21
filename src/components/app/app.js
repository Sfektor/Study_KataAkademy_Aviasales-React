import TicketSelectionFilter from "../ticket-selection-filter/ticket-selection-filter";
import TransfersFilter from "../transfers-filter/transfers-filter";
import TiketList from "../tiket-list/tiket-list";
import classes from "./app.module.scss";

const App = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.logo}>
        <img src={require("./logo.png")} alt="Logo" />
      </div>
      <div className={classes.main}>
        <TransfersFilter />
        <div>
          <TicketSelectionFilter />
          <TiketList />
        </div>
      </div>
    </div>
  );
};

export default App;
