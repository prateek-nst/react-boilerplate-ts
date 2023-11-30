import React from 'react';

import Drawer from '@mui/material/Drawer';

import list from './List';

interface State {
	value: boolean;
}

interface CustomDrawerProps {
	anchor: 'top' | 'left' | 'bottom' | 'right';
	state: State;
	Component: React.FC;
	props?: any;
}

export default function CustomDrawer({
	anchor,
	state,
	Component,
	props,
}: CustomDrawerProps) {
	const toggleDrawer = () => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' ||
				(event as React.KeyboardEvent).key === 'Shift')
		) {
			return;
		}

		state.value = false;
	};

	return (
		<div>
			<Drawer anchor={anchor} open={state.value} onClose={toggleDrawer()}>
				{list(anchor, state, Component, props)}
			</Drawer>
		</div>
	);
}
