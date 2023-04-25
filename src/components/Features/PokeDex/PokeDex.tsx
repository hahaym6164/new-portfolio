import { ChangeEvent, Fragment, useEffect, useState } from "react";
import "./style.css";
import { State, AppDispatch } from "../../state";
import {
  fetchAsyncPokemon,
  pageFlip,
  fetchMoreAsyncPokemon,
} from "../../state/Features/pokeDexSlice";
import SinglePokemon from "./SinglePokemon";
import { Button, Pagination } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import ClipLoader from "react-spinners/ClipLoader";
import MyButton from "../../CustomStyle/MyButton";
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
const useAppDispatch = () => useDispatch<AppDispatch>();
const PokeDex = () => {
  const dispatch = useAppDispatch();
  const handleMorePoke = () => {
    dispatch(fetchMoreAsyncPokemon(poke.pokemonList.length));
  };
  const poke = useSelector((state: State) => state.poke);
  const getList = async () => {
    dispatch(fetchAsyncPokemon());
  };

  const handleChange = (e: ChangeEvent<unknown>, p: number) => {
    dispatch(pageFlip(p));
  };

  useEffect(() => {
    getList();
  }, []);
  return (
    <>
      <div style={{ paddingTop: "20px" }}>
        <h1>Pokedex</h1>
        <h4>
          Resources from {" "}
          <a target="_blank" className="job-link " href="https://pokeapi.co/">
            https://pokeapi.co/{" "}
          </a>
        </h4>
        <div
          className={
            poke.pokemonShowList.length > 1
              ? "pokemon-section show"
              : "pokemon-section"
          }
        >
          {poke.pokemonShowList.map((i) => (
            <Fragment key={i.name}>
              {i ? <SinglePokemon pokemon={i} /> : ""}
            </Fragment>
          ))}
        </div>
        {poke.status === "succeeded" &&
        poke.pageNum === Math.ceil(poke.pokemonList.length / 8) ? (
          <MyButton
            style={{ margin: "20px" }}
            variant="outlined"
            onClick={handleMorePoke}
          >
            More Pokemon
          </MyButton>
        ) : (
          ""
        )}

        <ClipLoader
          color={"#fee715ff"}
          loading={poke.status === "loading"}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        {poke.pokemonShowList.length > 0 ? (
          <Pagination
            count={Math.ceil(poke.pokemonList.length / 8)}
            onChange={handleChange}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default PokeDex;
