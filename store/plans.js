export const state = () => ({
    plans: []
})

export const mutations = {
    ADD_PLAN(state, plan) {
        state.plans.unshift(plan)
    }
}

export const actions = {
    addPlan(context, plan) {
        context.commit('ADD_PLAN', plan)
    }
}

export const getters = {
    getPlans: (state) => {
    return state.plans
    },
    getPlanByName: (state) => (name) => {
        return state.plans.find(plan => plan.plan_name === name)
    }
}

// export const getters = {
//     get_plans(state) {
//         return state.plans
//     },
// }

