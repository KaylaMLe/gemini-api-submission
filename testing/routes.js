import { lazy } from 'react';
import { HOME, LOGIN, ABOUT_ME, FLEXBOX_FUN, NOT_FOUND_ERROR } from './hooks/PageNumbers';

const Home = lazy(() => import('./components/Pages/Home'));
const Login = lazy(() => import('./components/Pages/Login'));
const AboutMe = lazy(() => import('./components/Pages/AboutMe'));
const FlexboxFun = lazy(() => import('./components/Pages/FlexboxFun'));
const NotFoundError = lazy(() => import('./components/Pages/NotFoundError'));

const routes = [
	{ path: HOME.link, component: Home },
	{ path: LOGIN.link, component: Login },
	{ path: ABOUT_ME.link, component: AboutMe },
	{ path: FLEXBOX_FUN.link, component: FlexboxFun },
	{ path: NOT_FOUND_ERROR.link, component: NotFoundError },
];

export default routes;
