import { CSSObject } from '@emotion/css';
import { ReactNode } from 'react';

export interface ContextProviderProps {
	children: ReactNode;
}

export interface CurrentPageContextType {
	currentPage: number;
	setCurrentPage: (number: number) => void;
}

export interface DynamicStyles {
	default: CSSObject,
	alternate: CSSObject,
};

export interface FlowerProps {
	id: number;
	dX: number;
	dY: number;
	rotation: number;
};

export interface PageType {
	pageNumber: number;
	link: string;
}

export interface ResponsiveNavStyles {
	default: CSSObject,
	mobile: CSSObject,
	home: CSSObject,
};
