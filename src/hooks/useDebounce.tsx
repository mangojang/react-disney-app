import React, { useEffect, useState } from 'react';

const useDebounce = (value: any, delay: number): string => {
	const [debounceValue, setDebounceValue] = useState('');
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebounceValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);
	return debounceValue;
};

export default useDebounce;
