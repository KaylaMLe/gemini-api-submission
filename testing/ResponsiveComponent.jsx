import React from 'react';
import { css } from '@emotion/css';
import { useIsMobile } from '../../hooks/ViewPortContext';

export function ResponsiveComponent({ Component, allStyles, children, ...props }) {
	const { isMobile } = useIsMobile();

	const style = isMobile ? { ...allStyles.default, ...allStyles.alternate }
		: allStyles.default;

	return (
		<Component className={css(style)} {...props}>
			{children}
		</Component>
	);
}
