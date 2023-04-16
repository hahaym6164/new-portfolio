import React, { Fragment, SyntheticEvent, useState } from "react";
import { Paper } from "@mui/material";
import {  getColor } from "./typeColor/colors";
import { Pokemon } from "./PokeDex";

interface PokemonProps {
  pokemon: Pokemon;
}

const SinglePokemon = (props: PokemonProps) => {
  const { pokemon } = props;

  const [isStar, setIsStar] = useState(pokemon.star);

  return (
    <Fragment>
      <Paper elevation={3} >
        <button>
          <i
            className={isStar ? "fa-solid fa-star" : "fa-regular fa-star"}
            onClick={(e) => {
              setIsStar(!isStar);
            }}
          ></i>
        </button>
        <h4>{pokemon.name}</h4>
        <img src={pokemon.imgUrl}></img>
        <div className="types">
          {pokemon.types.map((j) => (
            <p
              key={pokemon.name + " " + j.type.name}
              style={{ background: getColor(j.type.name) }}
            >
              {j.type.name}
            </p>
          ))}
        </div>
      </Paper>
    </Fragment>
  );
};

export default SinglePokemon;
