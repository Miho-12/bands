import React from "react";

const Band = ({ id, name, image, link, musicName }) => {
  //props a paraméternek is aztán
  //const { id, name,  } = props;
  //vagy props.id, props.name stb..
  return (
    <div className="tc bg-light-blue dib br3 pa3 ma2 grow">
      <img src={`${image}`} alt="band_img" width="180" height="180" />
      <div>
        <h2>{name}</h2>
        <a href={`${link}`} target="_blank" rel="noreferrer">
          {musicName}
        </a>
      </div>
    </div>
  );
};

export default Band;
