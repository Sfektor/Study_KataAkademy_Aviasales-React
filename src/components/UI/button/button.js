/* eslint-disable react/jsx-props-no-spreading */
import cn from 'classnames';

import cls from './button.module.scss';

function Button({ children, active, ...props }) {
	const activeClasses = cn({
		[cls.btn_active]: active,
	});
	return (
		<button type="button" {...props} className={`${cls.btn} ${activeClasses}`}>
			<span>{children}</span>
		</button>
	);
}

export default Button;
