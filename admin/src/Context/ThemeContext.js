import { createContext, useContext, useReducer } from "react";
import DarkModeReducer from "./ThemeReducer";

const INITIAL_STATE = {
	darkMode: false,
};

export const ThemeContext = createContext(INITIAL_STATE);

export const ThemeProviderContext = ({ children }) => {
	const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

	return (
		<ThemeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
			{children}
		</ThemeContext.Provider>
	);
};
