<template>
    <div>
        <button @click="login" v-if="!isAuthenticated">Login with Google</button>
        <button @click="logout" v-else>Logout</button>
    </div>
</template>


<script>
export default {
    layout: 'dashboard',
    computed: {
        isAuthenticated() {
            return this.$store.getters['auth/isAuthenticated'];
        },
    },
    methods: {
        login() {
            this.$store.dispatch('auth/login');
        },
        logout() {
            this.$store.dispatch('auth/logout');
        },
    },
};
</script>
