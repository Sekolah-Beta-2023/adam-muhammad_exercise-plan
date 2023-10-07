export const state = () => ({
    // user: null,
    // googleCalendarData: null,
    googleAuth: null
});

export const mutations = {
    SET_AUTH(state, auth) {
        state.googleAuth = auth;
    },
    CLEAR_AUTH(state) {
        state.googleAuth = null;
    },
    SET_GOOGLE_CALENDAR_DATA(state, data) {
        state.googleCalendarData = data;
    },
};

export const actions = {
    async loginWithGoogle() {
        try {
            // Gunakan Supabase untuk melakukan otentikasi dengan Google
            const { user, session, error } = await this.$supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    scopes: 'https://www.googleapis.com/auth/calendar'
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

    getListCalendar() {
        
    }
}

export const getters = {
    getAuth: (state) => {
        return state.googleAuth
    }
}