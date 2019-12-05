const app = {
  state: {
    requestLoading: 0
  },
  getters: {
    requestLoading(state) {
      return state.requestLoading;
    }
  },
  mutations: {
    SET_LOADING: (state, status) => {
      // error 的时候直接重置
      if (status === 0) {
        state.requestLoading = 0;
        return;
      }
      const num = status ? 1 : -1;
      state.requestLoading += num;
    }
  },
  actions: {
    SetLoading({
      commit
    }, status) {
      commit('SET_LOADING', status);
    }
  }
};

export default app;
