import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        name: null,
        username: null,
        followers: 0, 
        public_repos: 0,
        avatar_url: null,
        email: null,
        location: ""
    },
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { name, login, email, followers, public_repos, avatar_url } = action.payload;
                state.name = name || 'No disponible'
                state.username = login
                state.followers = followers
                state.public_repos = public_repos
                state.image = avatar_url
                state.email = email
                state.location = location
        },
    },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;