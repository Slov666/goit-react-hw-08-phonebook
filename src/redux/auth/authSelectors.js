const isAuthenticated = (state) => state.auth.token;
const getUserName = (state) => state.auth.user.name;
const getLoading = (state) => state.auth.loading;

export default { isAuthenticated, getUserName,getLoading };
