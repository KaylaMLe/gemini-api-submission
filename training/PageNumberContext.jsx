import React, { createContext, useContext, useState } from 'react';

const defaultContextValue = {
	currentPage: 0,
	setCurrentPage: () => { },
};

const CurrentPageContext = createContext(defaultContextValue);

export const useCurrentPage = () => useContext(CurrentPageContext);

export const CurrentPageProvider = ({ children }) => {
	const [currentPage, setCurrentPage] = useState(0);

	return (
		<CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
			{children}
		</CurrentPageContext.Provider>
	);
};
