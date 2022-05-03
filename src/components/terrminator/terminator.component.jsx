import React from "react";

const Terminator = ({ id, name, serialNumber, image, link, musicName }) => {
  //props a paraméternek is aztán
  //const { id, name, serialNumber } = props;
  //vagy props.id, props.name stb..
  return (
    <div className="tc bg-light-blue dib br3 pa3 ma2 grow">
      {/*<img src={`https://robohash.org/${id}?size=180x180`} alt="terminátor" />*/}
      <img src={`${image}`} alt="terminátor" width="180" height="180" />
      <div>
        <h2>{name}</h2>
        <a href={`${link}`} target="_blank">
          {musicName}
        </a>
      </div>
    </div>
  );
};

export default Terminator;
