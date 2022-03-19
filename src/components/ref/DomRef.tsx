import { useRef, useEffect } from "react";

const DomRef = () => {
	//add non null (null!) assertion when invoking useRef to avoid optional chaining...
	const inputRef = useRef<HTMLInputElement>(null!);
	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<div>
			<input type="text" ref={inputRef} />
		</div>
	);
};

export default DomRef;
