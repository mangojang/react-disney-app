import React, { ReactNode } from 'react';
import Nav from './Nav';

const AppLayout = ({ children }: any) => {
	return (
		<>
			<Nav />
			{children}
		</>
	);
};

export default AppLayout;
