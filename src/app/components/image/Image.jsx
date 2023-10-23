import Image from "next/image";
import React from "react";

export default function Picture({ name, imgUrl, width = "", height = "" }) {
  return (
    <Image
      className={"card-img-top"}
      src={imgUrl}
      alt={`${name} profile pic`}
      width={width}
      height={height}
      style={{
        objectFit: "contain",
        border: "black 4px",
      }}
      loading="lazy"
    />
  );
}
