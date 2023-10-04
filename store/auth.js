// store/auth.js
export const state = () => ({
    user: null,
});

export const mutations = {
    SET_USER(state, user) {
        state.user = user;
    },
};

export const actions = {
    async login({ commit }) {
        try {
            await this.$auth.loginWith('google');
            const user = this.$auth.user;
            commit('SET_USER', user);
        } catch (error) {
            console.error('Error while logging in:', error);
        }
    },

    async logout({ commit }) {
        try {
            await this.$auth.logout();
            commit('SET_USER', null);
        } catch (error) {
            console.error('Error while logging out:', error);
        }
    },
};

export const getters = {
    isAuthenticated(state) {
        return !!state.user;
    },
};

// // store/auth.js

// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = "https://aabcdkxxkotuahyxoehv.supabase.co";
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhYmNka3h4a290dWFoeXhvZWh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU4MDAzMDIsImV4cCI6MjAxMTM3NjMwMn0.GaCDrYROM6p7bYa4PYsEPC5VCGKAf7WQw8h99nOKwKA";

// const supabase = createClient(supabaseUrl, supabaseKey);

// const state = () => ({
//   isAuthenticated: false, // Set default status login sebagai "false"
//   user: null, // Tambahkan properti user untuk menyimpan data pengguna yang berhasil login
// });

// const mutations = {
//     SET_AUTHENTICATED(state, isAuthenticated) {
//         state.isAuthenticated = isAuthenticated;
//     },
//     SET_USER(state, user) {
//         state.user = user; // Simpan data pengguna di dalam state
//     },
// };

// const actions = {
//     async login({ commit }) {
//         try {
//         // Lakukan proses login dengan menggunakan Supabase
//         const { user, session, error } = await supabase.auth.signInWithOAuth({
//             provider: 'google', // Ganti dengan provider autentikasi yang sesuai
//             options: {
//                 redirectTo: 'http://localhost:3000/profile',
//             },
//         });

//         if (user) {
//             commit('SET_AUTHENTICATED', true);
//             commit('SET_USER', user); // Simpan data pengguna ke dalam state
//         } else if (error) {
//             console.error('Error saat login:', error.message);
//         }
//         } catch (error) {
//             console.error('Terjadi kesalahan saat login:', error.message);
//         }
//     },

//     async logout({ commit }) {
//         try {
//         // Lakukan proses logout
//             await supabase.auth.signOut();
//             commit('SET_AUTHENTICATED', false);
//             commit('SET_USER', null); // Hapus data pengguna dari state saat logout
//         } catch (error) {
//             console.error('Terjadi kesalahan saat logout:', error.message);
//         }
//     },
// };

// const getters = {
//     isAuthenticated: (state) => state.isAuthenticated,
//     user: (state) => state.user, // Getter untuk mengakses data pengguna
// };

// export default {
//     state,
//     mutations,
//     actions,
//     getters,
// };
