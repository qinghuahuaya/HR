import { getToken, setToken } from "@/utils/auth"

export default {
  namespaced: true,
  state: () => {
    token : getToken() || '' 
  },
  mutations: {
     setToken  ( state , newToken ) {
      state.token = newToken

      setToken(newToken)
    }
  },
  actions: {}
}
