import Vue from "Vue";
import Vuex from "Vuex";

Vue.use(Vuex);

export const store = new Vuex.store({
    state: {
        products: [
            {
              name: 'Banana Skin',
              price: 20
            },
            {
              name: 'Shiny Star',
              price: 40
            },
            {
              name: 'Green Shells',
              price: 60
            },
            {
              name: 'Red Shells',
              price: 80
            },
        ]
    }
});