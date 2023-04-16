import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { json } from "stream/consumers";

const url = "https://pokeapi.co/api/v2/pokemon";

interface initialState {
  status: string;
  pokemonList: Pokemon[];
  displayNumberOnPage: number;
  pageNum: number;
  pokemonShowList: Pokemon[];
}
const initialState: initialState = {
  status: "",
  pokemonList: [],
  displayNumberOnPage: 8,
  pokemonShowList: [],
  pageNum: 1,
};
interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export type Pokemon = {
  name: string;
  imgUrl: string;
  types: PokemonType[];
  star: boolean;
};

export const fetchAsyncPokemon = createAsyncThunk(
  "poke/fetchPokeData",
  async () => {
    try {
      const response = await fetch(url + "?limit=100&offset=0");
      const jsonData = await response.json();
      const pokeRes = jsonData.results;
      let res: Pokemon[] = [];
      for (let i = 0; i < pokeRes.length; i++) {
        let pokemon = pokeRes[i];
        try {
          if (pokemon.url) {
            const response = await fetch(pokemon.url);
            const jsonData = await response.json();
            let thePokemon: Pokemon = {
              name: jsonData.name,
              imgUrl: jsonData.sprites.front_default,
              types: jsonData.types,
              star: false,
            };
            res.push(thePokemon);
          }
        } catch (e) {
          console.log(e);
        }
      }
      return res;
    } catch (error) {
      console.error(error);
    }
  }
);
export const fetchPokeSlice = createSlice({
  name: "poke",
  initialState: initialState,
  reducers: {
    pageFlip: (state, action: PayloadAction<number>) => {
      console.log(action.payload, "a p");

      state.pageNum = action.payload;
      state.pokemonShowList = state.pokemonList.slice(
        state.pageNum * 8 - 8,
        state.pageNum * 8
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAsyncPokemon.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAsyncPokemon.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array

        state.pokemonList = action.payload ?? [];
        state.pokemonShowList = state.pokemonList.slice(
          state.pageNum * 8 - 8,
          state.pageNum * 8
        );
      })
      .addCase(fetchAsyncPokemon.rejected, (state, action) => {
        state.status = "failed";
        console.log(action.error.message, "err");
      });
  },
});

export default fetchPokeSlice.reducer;
export const { pageFlip } = fetchPokeSlice.actions;
