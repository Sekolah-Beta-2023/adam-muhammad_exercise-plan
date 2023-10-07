export const state = () => ({
    googleAuth: null,
    calendar_list: null,
    authData: null,
});

export const mutations = {
    SET_AUTH(state, auth) {
        state.googleAuth = auth;
    },
    CLEAR_AUTH(state) {
        state.googleAuth = null;
    },
    SET_AUTH_DATA(state, data) {
        state.authData= data
    },
    SET_CALENDAR_LIST(state, data) {
        state.calendar_list = data
    },
};

export const actions = {
    async loginWithGoogle({commit}) {
        try {
            // Gunakan Supabase untuk melakukan otentikasi dengan Google
            const data = await this.$supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    // scopes: 'https://www.googleapis.com/auth/calendar',
                    queryParams: {
                        access_type: 'offline',
                        prompt: 'consent',
                    },
                },
            });
            console.log(data)
        } catch (error) {
            console.error('Google login error:', error);
        }   
    },

    async logout({ commit }) {
        try {
            // Gunakan Supabase untuk logout
            await this.$supabase.auth.signOut();
            
            // Hapus informasi pengguna dari Vuex
            commit('CLEAR_AUTH');
        } catch (error) {
            console.error('Logout error:', error);
        }
    },

    getAuth({commit}) {
        if (process.client) {
            const localAuth = localStorage.getItem('sb-aabcdkxxkotuahyxoehv-auth-token')
            console.log(JSON.parse(localAuth))
            commit('SET_AUTH', JSON.parse(localAuth));
        }
    },

    async getCalendarList({state}) {
        try {
            console.log('masuk action calendar')
            console.log(state.googleAuth.provider_refresh_token)
            const options = {
                method: 'GET',
                
                headers: {
                    'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Origin': "*",
                    // 'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
                    'Authorization': 'bearer ' + state.googleAuth.provider_refresh_token
                }
            };
            
            const response = await fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList', options);
            const calendarList = response.data
            console.log(calendarList)
            console.log('lewat calendar')
            commit('SET_CALENDAR_LIST', calendarList)
        } catch(error) {
            console.log(error)
        }
    }
}

export const getters = {
    getAuth: (state) => {
        return state.googleAuth
    },
    getCalendarList: (state) => {
        return state.calendar_list
    }
}