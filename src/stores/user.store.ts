import { defineStore } from "pinia";

const useUserStore = defineStore({
  id: "user",
  state: () => ({
    token: "",
    user: {},
  }),
  getters: {
    isAuthenticated: (state) => !(Object.keys(state.user).length == 0),
  },
  actions: {
    login(userName, password) {
      console.log(userName);

      this.user = {
        username: userName,
        token: "1233123",
      };
    },
  },
});

export default useUserStore;
