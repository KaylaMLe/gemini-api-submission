import React from 'react';
import { css } from '@emotion/css';

export function ToggleStyledComponent({ Component, label, condition, styles, children, ...props }) {
	const statefulProps = { ...styles.default };

	if (condition) {
		for (const prop of Object.keys(styles.alternate)) {
			statefulProps[prop] = styles.alternate[prop];
		}
	} else {
		// the transitions use CSS prop names (i.e. kebab-case) but CSSObject uses camelCase
		let transitions = Object.keys(styles.alternate).map(toKebabCase).join(' 0.5s ease, ');
		transitions += ' 0.5s ease';

		statefulProps['transition'] = transitions;
		statefulProps[':hover, :focus-visible'] = styles.alternate;
	}

	return (
		<Component className={css(statefulProps)} {...props}>{label}{children}</Component>
	);
}

// converts camelCase string to kebab-case by replacing capital letters with lowercase letter
// preceded by a hyphen
function toKebabCase(str) {
	return str.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`);
}
