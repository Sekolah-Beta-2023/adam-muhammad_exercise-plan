export const state = () => ({
    googleAuth: null,
    calendar_list: null,
});

export const mutations = {
    SET_AUTH(state, auth) {
        state.googleAuth = auth;
    },
    CLEAR_AUTH(state) {
        state.googleAuth = null;
    },
    SET_CALENDAR_LIST(state, data) {
        state.calendar_list = data
    },
};

export const actions = {
    async loginWithGoogle() {
        try {
            // Gunakan Supabase untuk melakukan otentikasi dengan Google
            const { data, error } = await this.$supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    scopes: 'https://www.googleapis.com/auth/calendar',
                    queryParams: {
                        access_type: 'offline',
                        prompt: 'consent',
                    },
                },
            });
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
            console.log(state.googleAuth.provider_token)
            const options = {
                method: 'GET',
                url: 'https://www.googleapis.com/calendar/v3/users/me/calendarList',
                headers: {
                    'Authentication': 'Bearer ' + state.googleAuth.provider_token
                }
            };
            
            const response = await this.$axios.request(options);
            const calendarList = response.data
            commit('SET_CALENDAR_LIST', calendarList)
        } catch(error) {

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