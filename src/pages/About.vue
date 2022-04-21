<template>
  <h1
    class="capitalize text-3xl sm:text-4xl pb-8 px-4 text-center sm:text-left"
  >
    About
  </h1>
  <div class="grid md:grid-cols-2 gap-4">
    <article class="shadow hover:shadow-lg rounded-md p-4 bg-white">
      <img
        src="@/assets/sidney.jpg"
        alt=""
        class="w-12 float-right rounded-full"
      />
      <h2 class="font-bold text-xl mb-2">Sidney Sherrill</h2>
      <p>
        I’m a junior web developer who creates intuitive user experiences and
        prioritizes following best practices. I’ve enjoyed implementing this
        Pokédex application using modern technologies such as Tailwind and
        Pinia. My goal with this project was to make a performant and useable
        single-page application that consumes an external API.
      </p>
    </article>
    <article class="shadow hover:shadow-lg rounded-md p-4 bg-white">
      <img src="@/assets/vue.svg" alt="" class="w-12 float-right" />
      <h2 class="font-bold text-xl mb-2">Vue</h2>
      <p>
        A versatile framework for building web user interfaces. Vue.js laid the
        groundwork for the application by allowing for smaller web components
        rather than monolithic HTML, CSS, and JavaScript files.
      </p>
    </article>
    <article class="shadow hover:shadow-lg rounded-md p-4 bg-white">
      <img src="@/assets/pokeball.png" alt="" class="w-12 float-right" />
      <h2 class="font-bold text-xl mb-2">PokéAPI</h2>
      <p>
        All Pokemon data was pulled from this RESTful API using the browser’s
        built-in fetch module. I created helper methods to abstract interaction
        with the API instead of making the fetch request directly within the
        component.
      </p>
    </article>
    <article class="shadow hover:shadow-lg rounded-md p-4 bg-white">
      <img src="@/assets/router.png" alt="" class="w-12 float-right" />
      <h2 class="font-bold text-xl mb-2">Router</h2>
      <p>
        The official router for Vue.js, which provides functionality to show
        different components based on the URL in the address bar. This improves
        the organization and user experience of the application.
      </p>
    </article>
    <article class="shadow hover:shadow-lg rounded-md p-4 bg-white">
      <img src="@/assets/pinia.svg" alt="" class="w-12 float-right px-1.5" />
      <h2 class="font-bold text-xl mb-2">Pinia</h2>
      <p>
        A data store that manages the global state of the Pokédex. It allows us
        to abstract the tougher application logic by simplifying components
        using things like actions & getters. It serves to consolidate state
        management, allowing pages to load quicker.
      </p>
    </article>
    <article class="shadow hover:shadow-lg rounded-md p-4 bg-white">
      <img src="@/assets/tailwind.svg" alt="" class="w-12 float-right" />
      <h2 class="font-bold text-xl mb-2">Tailwind CSS</h2>
      <p>
        A utility-first CSS framework that offers a well-optimized library of
        CSS classes. This allows for better consistency and performance when
        styling the application because we don’t need to write our own CSS.
      </p>
    </article>
    <article class="shadow hover:shadow-lg rounded-md p-4 bg-white">
      <img
        src="@/assets/localstorage.png"
        alt=""
        class="w-12 float-right px-1.5"
      />
      <h2 class="font-bold text-xl mb-2">Local Storage</h2>
      <p>
        Persists data for users between browser visits. This is a technology
        that enables the favorites feature. In the future, I’d like to use a
        server-side database to persist the favorites.
      </p>
    </article>
    <article class="shadow hover:shadow-lg rounded-md p-4 bg-white">
      <img src="@/assets/github.svg" alt="" class="w-12 float-right px-1.5" />
      <h2 class="font-bold text-xl mb-2">GitHub</h2>
      <p>I used GitHub to plan, store, version, build, and deploy my code.</p>
    </article>
  </div>
</template>
