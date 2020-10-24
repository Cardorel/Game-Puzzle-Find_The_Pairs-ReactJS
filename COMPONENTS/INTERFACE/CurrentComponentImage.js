import React from "react";
import { Image, ImageContentDiv } from "../../STYLEDCOMPONENTS/Image.styled";

export default function CurrentComponentImage(allImages , HandleImage ,size) {
  return (
    allImages.imgs &&
    Array(2)
      .fill([...allImages.imgs.slice(0, size)])
      .reduce((a, b) => a.concat(...b))
      .map((i, index) => {
        return (
          <ImageContentDiv
            onClick={(e) => {
              HandleImage(e, index);
            }}
            id="ImgCard"
            key={index}
          >
            <Image src={i.img} alt={i.column} data-image={i.column} />
          </ImageContentDiv>
        );
      })
  );
}
