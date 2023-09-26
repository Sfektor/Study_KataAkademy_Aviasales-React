/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import cn from 'classnames';

import cls from './modal.module.scss';

function Modal({ children, visible, setVisible }) {
	const bodyClasses = cn({
		[cls.body_active]: visible,
	});
	const contentClasses = cn({
		[cls.body__content_active]: visible,
	});

	return (
		<div className={`${cls.body} ${bodyClasses}`} onClick={() => setVisible(false)}>
			<div className={`${cls.body__content} ${contentClasses}`} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
}

export default Modal;
