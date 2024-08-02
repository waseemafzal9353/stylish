const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    user: {
        email: '',
        password: ''
    },
    isAuthenticated: false,
    email: ''
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
        },
        forgotPassword: (state, action) =>{
            console.log(action.payload, 'ppppppppppppppp')
            state.email = action.payload.email
        }
    }
});

export const {login, logout, forgotPassword} = authSlice.actions;
export default authSlice.reducer