const postState = [];
const reducer = (state = postState, action) => {
	switch (action.type) {
		case "FETCH_ALL":
			return action.payload;
		case "CREATE":
			return {
				...state,
			};
		default:
			return state;
	}
};
export default reducer;
