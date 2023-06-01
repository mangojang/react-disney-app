import React, { useEffect } from 'react';

const useOnClickOutside = (ref: React.RefObject<HTMLDivElement>, handler: () => void) => {
	useEffect(() => {
		const listener = (event: any): void => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			handler();
		};
		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, handler]);
};

export default useOnClickOutside;
