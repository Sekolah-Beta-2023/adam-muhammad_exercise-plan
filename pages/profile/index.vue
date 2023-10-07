<template>
    <div>
        <h1>Supabase and Vuex Example</h1>
        <div v-if="!dataAuth">
            <button @click="loginWithGoogle">Login with Google</button>
        </div>
        <div v-else>
            <p>Welcome {{ dataAuth.user.user_metadata.full_name }} !</p>
            <button @click="logout">Logout</button>
            <!-- <div v-if="$store.state.googleCalendarData"> -->
                <!-- <p>Google Calendar Data: {{ $store.state.googleCalendarData }}</p> -->
        </div>
    </div>
</template>
<script>
import { mapGetters  } from "vuex"
export default {
    layout: "dashboard",
    async mounted() {
        try {
            await this.$store.dispatch('supabase/getAuth')
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
        }
    },
    computed: {
        ...mapGetters({
            getAuth: 'supabase/getAuth',
        }),
        dataAuth() {
            console.log(this.getAuth)
            return this.getAuth
        }
    },
    methods: {
        async loginWithGoogle() {
            try {
                // Panggil action loginWithGoogle dari store
                await this.$store.dispatch('supabase/loginWithGoogle');
            } catch (error) {
                console.error('Login error:', error);
            }
        },
        async logout() {
            try {
                // Panggil action logout dari store
                await this.$store.dispatch('supabase/logout');
            } catch (error) {
                console.error('Logout error:', error);
            }
        },
    },
}
</script>  
