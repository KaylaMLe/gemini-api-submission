import { PageType } from './alltypes';

export const NOT_FOUND_ERROR: PageType = {
	pageNumber: -1,
	link: '*',
};
export const HOME: PageType = {
	pageNumber: 0,
	link: '/',
};
export const LOGIN: PageType = {
	pageNumber: 1,
	link: '/login',
};
export const ABOUT_ME: PageType = {
	pageNumber: 2,
	link: '/about-me',
};
export const FLEXBOX_FUN: PageType = {
	pageNumber: 3,
	link: '/flexbox-fun',
};
