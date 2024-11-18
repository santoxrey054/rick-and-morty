import  '../assets/styles/characterFilter.css'

export function CharacterFilter({ filters, setFilters }) {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value, 
    }));
  };

  return (
    <div className="filtro">
      <label>
        Estado:
        <select
          name="status"
          value={filters.status}
          onChange={handleFilterChange}
        >
          <option value="alive">Vivo</option>
          <option value="dead">Muerto</option>
          <option value="unknown">Desconocido</option>
        </select>
      </label>
      <label>
        Género:
        <select
          name="gender"
          value={filters.gender}
          onChange={handleFilterChange}
        >
          <option value="">Todos</option>
          <option value="female">Femenino</option>
          <option value="male">Masculino</option>
          <option value="genderless">Sin género</option>
          <option value="unknown">Desconocido</option>
        </select>
      </label>
      <label>
        Especie:
        <input
          type="text"
          name="species"
          value={filters.species}
          onChange={handleFilterChange}
          placeholder="Ej. Human"
        />
      </label>
    </div>
  );
}
