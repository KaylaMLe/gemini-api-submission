import React, { createContext, useContext, useState } from 'react';
import { ContextProviderProps, CurrentPageContextType } from './alltypes';

const defaultContextValue: CurrentPageContextType = {
	currentPage: 0,
	setCurrentPage: () => { },
};

const CurrentPageContext = createContext<CurrentPageContextType>(defaultContextValue);

export const useCurrentPage = () => useContext(CurrentPageContext);

export const CurrentPageProvider: React.FC<ContextProviderProps> = ({ children }) => {
	const [currentPage, setCurrentPage] = useState(0);

	return (
		<CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
			{children}
		</CurrentPageContext.Provider>
	);
};
