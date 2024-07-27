const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    user: {
        email: '',
        password: ''
    },
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => initialState,
        login: (state, action) => {
            state.user = {
                email: action.payload.email,
                password: action.payload.password
            }
        }
    }
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer