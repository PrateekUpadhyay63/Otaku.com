import React, {useState, createContext} from "react";

export const ApiContext = createContext();

export const ApiProvider = props => {
	const [truevalue, settruevalue] = useState(false);

	return (
		<ApiContext.Provider value={{truevalue, settruevalue}}>
			{props.children}
		</ApiContext.Provider>
	);
};
