import { Hourglass } from 'react-loader-spinner';

function LoaderSpiner({ children }) {
	return (
		<>
			{children}
			<Hourglass
				visible
				height="40"
				width="40"
				ariaLabel="hourglass-loading"
				wrapperStyle={{}}
				wrapperClass=""
				colors={['#306cce', '#72a1ed']}
			/>
		</>
	);
}

export default LoaderSpiner;
