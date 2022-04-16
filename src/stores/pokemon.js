import { defineStore } from "pinia";
import { index, single } from "@/api/pokemon";

export const usePokemonStore = defineStore("pokemon", {
  state: () => {
    return { list: [], active: null };
  },
  actions: {
    fetchList() {
      index().then((data) => (this.list = data));
    },
    fetchActive(name) {
      single(name).then((data) => (this.active = data));
    },
  },
});
