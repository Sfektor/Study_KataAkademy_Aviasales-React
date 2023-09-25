import cls from "./tiket.module.scss";
import { tiketsLoad } from "../../redux/action";
import { connect } from "react-redux";
import { flightEndDate, flightStartDate } from "../utils/formatDataForTiket";

const Tiket = ({ tiketsLoadReducer }) => {
  const tikets = tiketsLoadReducer?.state?.map((el) => {
    const forward = el.segments[0];
    const back = el.segments[1];
    const startDateForward = flightStartDate(forward.date);
    const endDateForward = flightEndDate(forward.date, forward.duration);
    const startDateBack = flightStartDate(back.date);
    const endDateBack = flightEndDate(back.date, back.duration);
    const numberWithSpaces = (num) =>
      num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    const getTimeFromMins = (mins) => {
      let hours = Math.trunc(mins / 60);
      let minutes = mins % 60;
      return `${hours}ч ${minutes}м`;
    };
    return (
      <div className={cls.body} key={Date.now() * Math.random()}>
        <div className={cls["row-header"]}>
          <div className={cls["row-header__column"]}>
            {`${numberWithSpaces(el.price)} P`}
          </div>
          <div className={cls["row-header__column"]}>
            <img
              src={`https://pics.avs.io/99/36/${el.carrier}.png`}
              alt="Logo"
            />
          </div>
        </div>
        <div className={cls["row-main"]}>
          <div className={cls["row-main__column"]}>
            <div className={cls["row-main__block-text"]}>
              <span>{`${forward.origin} - ${forward.destination}`}</span>
              <span>{`${startDateForward} - ${endDateForward}`}</span>
            </div>
            <div className={cls["row-main__block-text"]}>
              <span>{`${back.origin} - ${back.destination}`}</span>
              <span>{`${startDateBack} - ${endDateBack}`}</span>
            </div>
          </div>
          <div className={cls["row-main__column"]}>
            <div className={cls["row-main__block-text"]}>
              <span>В пути</span>
              <span>{`${getTimeFromMins(forward.duration)}`}</span>
            </div>
            <div className={cls["row-main__block-text"]}>
              <span>В пути</span>
              <span>{`${getTimeFromMins(back.duration)}`}</span>
            </div>
          </div>
          <div className={cls["row-main__column"]}>
            <div className={cls["row-main__block-text"]}>
              <span>
                {`${
                  forward.stops.length === 0
                    ? "Прямой рейс"
                    : // eslint-disable-next-line no-useless-concat
                      back.stops.length + " " + "пересадки"
                }`}
              </span>
              <span>{`${forward.stops.join(", ")}`}</span>
            </div>
            <div className={cls["row-main__block-text"]}>
              <span>
                {`${
                  back.stops.length === 0
                    ? "Прямой рейс"
                    : // eslint-disable-next-line no-useless-concat
                      back.stops.length + " " + "пересадки"
                }`}
              </span>
              <span>{`${back.stops.join(", ")}`}</span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{tikets}</>;
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    load: dispatch(tiketsLoad()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tiket);
