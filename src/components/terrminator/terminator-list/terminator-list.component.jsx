import React from "react";
import Terminator from "../terminator.component";

const TerminatorList = ({ models }) => {
  /*const terminatorComponents = models.map((model) => {
    return (
      <Terminator
        key={model.id}
        id={model.id}
        name={model.name}
        serialNumber={model.serialNumber}
      />
    );
  }); 
  //és return div terminatorComponents div
  */
  return (
    <div>
      {models.map((model) => {
        return (
          <Terminator
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

export default TerminatorList;
