import React from "react";
import {
  FontWeight,
  Paragraph,
  ParagraphSize,
  SelectContainer,
  SelectOption,
} from "../../STYLEDCOMPONENTS/ChooseSize.styled";

export default function Select({ handleChanged }) {
  return (
    <div>
      <Paragraph><FontWeight>Options</FontWeight></Paragraph>
      <SelectContainer>
        <ParagraphSize>Size</ParagraphSize>
        <SelectOption defaultValue="6" onChange={handleChanged}>
          <option value="6">6 pairs</option>
          <option value="8">8 pairs</option>
          <option value="10">10 pairs</option>
          <option value="12">12 pairs</option>
          <option value="15">15 pairs</option>
          <option value="18">18 pairs</option>
          <option value="21">21 pairs</option>
        </SelectOption>
      </SelectContainer>
    </div>
  );
}
