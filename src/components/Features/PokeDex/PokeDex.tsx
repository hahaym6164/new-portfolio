import { ChangeEvent, Fragment, useEffect, useState } from "react";
import "./style.css";
import { State, AppDispatch } from "../../state";
import { fetchAsyncPokemon, pageFlip } from "../../state/Features/pokeDexSlice";
import SinglePokemon from "./SinglePokemon";
import { Pagination } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
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
        <ClipLoader
          color={"#fee715ff"}
          loading={poke.pokemonShowList.length == 0}
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
