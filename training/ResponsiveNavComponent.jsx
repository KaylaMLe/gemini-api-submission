import React from 'react';
import { css } from '@emotion/css';
import { HOME } from '../../hooks/PageNumbers';
import { useCurrentPage } from '../../hooks/PageNumberContext';
import { useIsMobile } from '../../hooks/ViewPortContext';

// these are components rendered on all pages and have a different home page style
// e.g., the title, navbar, and overarching page component
export function ResponsiveNavComponent({ Component, allStyles, children, ...props }) {
	const { isMobile } = useIsMobile();
	const { currentPage } = useCurrentPage();

	// mobileStyle takes precedence over homeStyle
	// defaultStyle is always applied but may be overridden
	const style = isMobile ? { ...allStyles.default, ...allStyles.mobile }
		: currentPage === HOME.pageNumber ? { ...allStyles.default, ...allStyles.home }
			: allStyles.default;

	return (
		<Component className={css(style)} {...props}>
			{children}
		</Component>
	);
}