import React from "react";
import Band from "../band.component";

const BandList = ({ models }) => {
  /*const BandrComponents = models.map((model) => {
    return (
      <Band
        key={model.id}
        id={model.id}
        name={model.name}
      />
    );
  }); 
  //és return div BandComponents div
  */
  return (
    <div>
      {models.map((model) => {
        return (
          <Band
            key={model.id}
            id={model.id}
            name={model.name}
            link={model.link}
            image={model.image}
            musicName={model.musicName}
          />
        );
      })}
    </div>
  );
};

export default BandList;
