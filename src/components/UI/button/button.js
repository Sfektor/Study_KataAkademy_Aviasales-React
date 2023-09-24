import cls from "./button.module.scss";
import cn from "classnames";

const Button = ({ children, active, ...props }) => {
  let activeClasses = cn({
    [cls["btn_active"]]: active,
  });
  return (
    <button {...props} className={`${cls.btn} ${activeClasses}`}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
