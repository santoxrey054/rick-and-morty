// CharacterList.js
import { useState, useEffect } from "react";
import "../assets/styles/characterList.css";
import { CharacterCart } from "./CharacterCard";
import { CharacterFilter } from "./CharacterFilter"; // Importar el componente de filtro

export function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState({
    status: "unknown",
    gender: "",
    species: "",
  });

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const baseUrl = "https://rickandmortyapi.com/api/character";
        const queryParams = new URLSearchParams(filters).toString();
        const response = await fetch(`${baseUrl}?${queryParams}`);
        const data = await response.json();
        setCharacters(data.results || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCharacters();
  }, [filters]);

  return (
    <div>
      <div className="character-list">
        <CharacterFilter filters={filters} setFilters={setFilters} />

        <div className="characters">
          {characters.map((character, key) => {
            if (key < 6) {
              return (
                <CharacterCart
                  key={character.id}
                  name={character.name}
                  status={character.status}
                  specie={character.species}
                  image={character.image}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
