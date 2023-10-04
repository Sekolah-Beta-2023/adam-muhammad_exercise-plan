<template>
    <div>
        <h1>Profile</h1>
        <div v-if="user">
            <p>Name: {{ user.user_metadata.full_name }}</p>
            <p>Email: {{ user.email }}</p>
            <button @click="logout">Logout</button>
            <!-- Tampilkan informasi profil lainnya -->
        </div>
        <div v-else>
            <p>Silakan login untuk melihat profil Anda.</p>
        </div>
    </div>
</template>


<script>
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default {
    layout: 'dashboard',
    data() {
        return {
            user: null,
        };
    },
    async created() {
        // Cek apakah ada pengguna yang sudah login
        const { user } = supabase.auth.session();
        if (user) {
            this.user = user;
        }
    },
    methods: {
        async logout() {
            await supabase.auth.signOut();
            this.user = null;
        },
    },
};
</script>
