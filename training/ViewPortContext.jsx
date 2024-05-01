import React, { createContext, useState, useEffect } from 'react';

const defaultContextValue = {
	isMobile: false,
	setIsMobile: () => { },
};

const IsMobileContext = createContext(defaultContextValue);

export const useIsMobile = () => React.useContext(IsMobileContext);

export const IsMobileProvider = ({ children }) => {
	const [isMobile, setIsMobile] = useState(false);

	// initialize isMobile state based on window.innerWidth
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 600);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<IsMobileContext.Provider value={{ isMobile, setIsMobile }}>
			{children}
		</IsMobileContext.Provider>
	);
};
