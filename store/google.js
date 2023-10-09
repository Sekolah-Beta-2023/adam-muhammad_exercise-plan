export const state = {
    calendarId: null,
    calendarEvents: []
}

export const mutations = {
    SET_CALENDAR_ID(state, id) {
        state.calendarId = id;
    },
    SET_CALENDAR_EVENTS(state, events) {
        state.calendarEvents.push(events)
    }
}

export const actions = {
    setCalendarId({commit}, id) {
        commit('SET_CALENDAR_ID', id)
    },
    setCalendarEvents({commit}, events) {
        commit('SET_CALENDAR_EVENTS', events)
    }
}

export const getters = {
    getCalendarId: (state) => {
        return state.calendarId
    },
    getCalendarEvents: (state) => {
        return state.calendarEvents
    }
}