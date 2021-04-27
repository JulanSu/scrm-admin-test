

interface UserState {
	token: string
	name: string
	avatar: string
	roleId: string
	userInfo: object
}

interface Modules {
	namespaced?: boolean
	state: UserState
	mutations: object
	actions: object
}

const namespaced: boolean = true
const getDefaultState = (): UserState => {
	return {
		token: '',
		name: 'adsada',
		avatar: '',
		roleId: '',
		userInfo: {}
	}
}

const state = getDefaultState()

const mutations = {
	RESET_STATE: (state) => {
		Object.assign(state, getDefaultState())
	},
	SET_TOKEN: (state, token: string) => {
		state.token = token
	},
	SET_NAME: (state, name) => {
		state.name = name
	},
	SET_AVATAR: (state, avatar) => {
		state.avatar = avatar
	},
	SET_ROLEID: (state, roleId) => {
		state.roleId = roleId
	},
	SET_USERINFO: (state, userInfo) => {
		state.userInfo = userInfo
	}
}

const actions = {
	// get user info
	getInfo({ commit, state }) {
		
	},
	// remove token
	logout({ commit }) {
	},
}

const user: Modules = {
	namespaced,
	state: getDefaultState(),
	mutations,
	actions
}
export default user

	

