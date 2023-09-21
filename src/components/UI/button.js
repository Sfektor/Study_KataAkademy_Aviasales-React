import classes from "./button.module.scss";

const Button = () => {
  return (
    <button className={classes.btn}>
      <span>показать ещё 5 билетов</span>
    </button>
  );
};

export default Button;
