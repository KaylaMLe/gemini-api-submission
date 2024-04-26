import { css } from '@emotion/css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrentPage } from '../../hooks/PageNumberContext';
import externalLink from '../../assets/images/external-link.png';

export function ExternalLink({ text, link }) {
	const externalLinkStyle = css({
		color: 'inherit',
		display: 'flex',
		justifyContent: 'center',
		gap: '0.2rem',
		boxSizing: 'border-box',
		padding: '0.25rem',
		paddingBottom: '0',
		alignItems: 'center',
	});

	return (
		<a
			className={externalLinkStyle}
			href={link}
			aria-label={`${text} (opens in a new tab)`}
			target='_blank'
			rel='noopener noreferrer'
		>
			{text}
			<img src={externalLink} alt='' aria-hidden={true} />
		</a>
	);
}

export function InternalLink({ text, targetPage, styleFunction }) {
	const { currentPage } = useCurrentPage();

	return (
		<Link
			className={styleFunction(targetPage.pageNumber, currentPage)}
			to={targetPage.link}
		>
			{text}
		</Link >
	);
}
