import  '../assets/styles/characterCard.css'
export function CharacterCart({ key,
            name,
            status,
            specie,
            image}) {
  return (
    <div className="character-card" key={key}>
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="information">
        <h1>{name}</h1>
        <div className="info">
          <h3>Especie:</h3>
          <p>
            {specie}
          </p>
        </div>
        <div className="info">
          <h3>Estado:</h3>
          <p>
            {status}
          </p>
        </div>
      </div>
    </div>
  );
}
