// store/modules/exerciseSession.js

const state = () => ({
    sessions: []
});

const mutations = {
    ADD_SESSION(state, exerciseSession) {
        state.sessions.push(exerciseSession);
        localStorage.removeItem('session')
        localStorage.setItem('session', JSON.stringify(state.sessions))
    },
    REMOVE_SESSION(state, exerciseSessionName) {
        const index = state.sessions.findIndex(session => session.session_name === exerciseSessionName)
        if (index !== -1) {
            state.plan.splice(index, 1)
            localStorage.setItem('session', JSON.stringify(state.sessions))
        }
    },
    RETRIEVE_DATA(state, session) {
        session.forEach(item => state.sessions.push(item))
    }
};

const actions = {
    saveSession({ commit }, exerciseSession) {
        commit("ADD_SESSION", exerciseSession);
    },

    deleteSession({ commit }, sessionName) {
        commit('REMOVE_SESSION', sessionName)
    },

    loadSessionFromLocalStorage({ commit, state }) {
        if (process.client && state.sessions.length === 0) {
            const storedSession = localStorage.getItem('session')
            if (storedSession) {
                commit('RETRIEVE_DATA', JSON.parse(storedSession))
            }
        }
    }
};

const getters = {
    getSessions: (state) => {
        return state.sessions
    },
    getSessionByName: (state) => (name) => {
        return state.sessions.filter(session => name.includes(session.session_name))
    }
};



export default {
    state,
    getters,
    mutations,
    actions,
};
