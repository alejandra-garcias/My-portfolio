import React from "react";
import Image from "next/image";
import { IconosGradiant } from "./IconMapGradiant";

const IconGradiant = ({ name }) => {
  return (
    <>
      {name ? (
        <Image
          className="icono"
          src={IconosGradiant[name]}
          alt={name}
          width={10}
          height={10}
        ></Image>
      ) : (
        <></>
      )}
    </>
  );
};

export default IconGradiant;
