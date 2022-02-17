import { createContext, useReducer } from "react";
import auth from "./reducers/auth";

export const GlobalContext = createContext({});
export const GlobalProvider = ({ children }) => {
	const [authState, dispatch] = useReducer(auth, initialAuthState);
	const [contactsState, contactsDispatch] = useReducer(
		contacts,
		initialContactsState
	);

	return (
		<GlobalContext.Provider value={authState}>
			{Children}
		</GlobalContext.Provider>
	);
};
