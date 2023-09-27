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
            if (state.exercises.length > 0) {
                return
            }
            
            const response = await this.$axios.get('/exercises', {params: {limit: '1324'}})
            const exercises = response.data
            commit('SET_EXERCISES', exercises)

        } catch (error) {
            console.error('error:', error)
        }
    }
}

const getters = {
    getAllExercises: (state) => {
        return state.exercises
    },
    getExercisesByNames: (state) => (exerciseNames) => {
        return state.exercises.filter((exercise) => exerciseNames.includes(exercise.name));
    },
}

export default {
    state,
    getters,
    mutations,
    actions,
}