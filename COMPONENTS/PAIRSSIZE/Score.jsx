import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { QuantityTriedCreated, ScoreCreated } from "../../RESELECT";
import {
  FontWeight,
  LevelSpan,
  Paragraph,
  ScoreContainer,
  ScoreSpan,
} from "../../STYLEDCOMPONENTS/ChooseSize.styled";

function Score({ size, quantityTried, score }) {
  return (
    <ScoreContainer>
      <Paragraph><FontWeight>Score</FontWeight></Paragraph>
      <Paragraph>
        <ScoreSpan>{score}</ScoreSpan> <LevelSpan>/ {size}</LevelSpan>
      </Paragraph>
      <Paragraph>Tries: {quantityTried}</Paragraph>
      <hr />
    </ScoreContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  quantityTried: QuantityTriedCreated,
  score: ScoreCreated,
});

export default connect(mapStateToProps)(Score);
