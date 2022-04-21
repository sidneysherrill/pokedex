import { defineStore } from "pinia";
import { index, single } from "@/api/pokemon";
import { createToast } from "mosha-vue-toastify";

export const usePokemonStore = defineStore("pokemon", {
  state: () => {
    return { list: [], favorites: [], active: null };
  },
  actions: {
    fetchList() {
      index().then((data) => (this.list = data));
    },
    fetchActive(name) {
      single(name).then((data) => (this.active = data));
    },
    fetchFavorites(name) {
      this.favorites =
        JSON.parse(window.localStorage.getItem("favorites")) || [];
    },
    addFavorite(id) {
      if (this.favorites.includes(id)) {
        console.log(`Item ${id} is already favorited`);
      } else {
        this.favorites.push(id);
      }
      createToast(
        {
          title: "Favorite Added",
          description: `The Pokémon was added to your favorites.`,
        },
        {
          type: "success",
          timeout: 3000,
        }
      );
      window.localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
    removeFavorite(id) {
      createToast(
        {
          title: "Favorite Removed",
          description: `The Pokémon was removed from your favorites.`,
        },
        {
          type: "success",
          timeout: 3000,
        }
      );
      const index = this.favorites.indexOf(id);
      console.log(index);
      if (index !== -1) {
        this.favorites.splice(index, 1);
      }
      window.localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
    toggleFavorite(id) {
      this.favorites.includes(id)
        ? this.removeFavorite(id)
        : this.addFavorite(id);
    },
  },
  getters: {
    favoritesList() {
      return this.list.filter((pokemon, index) => {
        const correctIndex = index + 1;
        return this.favorites.includes(correctIndex.toString());
      });
    },
  },
});
