const counterModule = {
  state: {
    count: 0
  },
  mutations: {
    SOCKET_COUNTER_INCREMENT(state, counter) {
      state.count = counter[0];
    },
    SOCKET_COUNTER_DECREMENT(state, counter) {
      state.count = counter[0];
    }
  },
  actions: {
    socket_increment: ({
      state,
      rootState
    }) => {
      rootState.io.emit('increment', state.count);
    },
    socket_decrement: ({
      state,
      rootState
    }) => {
      rootState.io.emit('decrement', state.count);
    }
  },
  getters: {
    count: (state) => state.count
  }
};

export default counterModule;
