import cls from "./modal.module.scss";
import cn from "classnames";

const Modal = ({ children, visible, setVisible }) => {
  let bodyClasses = cn({
    [cls["body_active"]]: visible,
  });
  let contentClasses = cn({
    [cls["body__content_active"]]: visible,
  });

  return (
    <div
      className={`${cls.body} ${bodyClasses}`}
      onClick={() => setVisible(false)}
    >
      <div
        className={`${cls["body__content"]} ${contentClasses}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
