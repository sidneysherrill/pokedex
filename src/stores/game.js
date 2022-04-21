import { defineStore } from "pinia";
import { single } from "@/api/pokemon";
import { createToast } from "mosha-vue-toastify";

export const useGameStore = defineStore("game", {
  state: () => {
    return { options: [], id: null, show: false, submissions: [] };
  },
  actions: {
    reset() {
      this.id = null;
      this.show = false;
      this.submissions = [];
      this.options = [];
    },
    fetchOptions(quantity, max) {
      this.reset();
      const randomPokemonIds = [];
      while (randomPokemonIds.length < quantity) {
        var candidateId = Math.floor(Math.random() * max) + 1;
        if (randomPokemonIds.indexOf(candidateId) === -1)
          randomPokemonIds.push(candidateId);
      }
      this.id =
        randomPokemonIds[Math.floor(Math.random() * randomPokemonIds.length)];
      Promise.all(
        randomPokemonIds.map((randomPokemonId) => single(randomPokemonId))
      ).then((data) => (this.options = data));
    },
    checkAnswer(id) {
      this.submissions.push(id);
      if (id === this.id) {
        createToast(
          {
            title: "Correct",
            description: `You selected the correct Pokémon!`,
          },
          {
            type: "success",
            timeout: 3000,
          }
        );
        this.show = true;
      } else {
        createToast(
          {
            title: "Incorrect",
            description: `You did not select the correct Pokémon!`,
          },
          {
            type: "danger",
            timeout: 3000,
          }
        );
      }
    },
  },
  getters: {
    submittedCorrectAnswer() {
      return this.submissions.includes(this.id);
    },
  },
});
