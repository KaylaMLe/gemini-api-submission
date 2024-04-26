import { CSSObject } from '@emotion/css';
import { ReactNode } from 'react';

export interface ContextProviderProps {
	children: ReactNode;
}

export interface DynamicStyles {
	default: CSSObject,
	alternate: CSSObject,
};

export interface IsMobileContextType {
	isMobile: boolean;
	setIsMobile: (isMobile: boolean) => void;
}

export interface PageType {
	pageNumber: number;
	link: string;
}

export interface Person {
	name: string;
	age: number;
	isStudent: boolean;
}

export interface ResponsiveNavStyles {
	default: CSSObject,
	mobile: CSSObject,
	home: CSSObject,
};
