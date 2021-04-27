import { createStore } from 'vuex'

import user from './module/user'

const defaultState = {
    count: 0
}

// Create a new store instance.
export default createStore({
    modules: {
        user
    }
})
