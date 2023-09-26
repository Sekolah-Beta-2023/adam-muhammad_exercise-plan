import axios from 'axios';

const state = {
    exercises: [],
}

const mutations = {
    SET_EXERCISES(state, exercises) {
        state.exercises = exercises
    },
}

const actions = {
    async fetchExercises({commit, state}) {
        try {
            console.log('masukfetch')
            if (state.exercises.length > 0) {
                console.log('Data sudah ada di state, tidak perlu pengambilan ulang.');
                return
            }
            
            const response = await this.$axios.get('/exercises', {params: {limit: '1324'}})
            const exercises = response.data;
            console.log(exercises)
            commit('SET_EXERCISES', exercises);

        } catch (error) {
            console.error('error:', error)
        }
    }
}

const getters = {
    getAllExercises: (state) => {
        return state.exercises
    },
    getExercises: (state) => (limit) => {
        return state.exercises.slice(0, limit);
    },
    getExerciseByIds: (state) => (ids) => {
        return state.exercises.filter((exercise) => ids.includes(exercise.id));
    },
}

export default {
    state,
    getters,
    mutations,
    actions,
}