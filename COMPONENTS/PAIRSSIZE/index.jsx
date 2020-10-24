import React from "react";
import { connect } from "react-redux";
import {
  ResetQuantityTriedAction,
  ResetScoreAction,
  ResetTheGameAction,
  SizeAction,
} from "../../REDUX/Action/Action";
import { ResetGameCreated, SizeSelectorCreated } from "../../RESELECT";
import Select from "./Select";
import Score from "./Score";
import { createStructuredSelector } from "reselect";
import {
  Button,
  ChooseContainer,
} from "../../STYLEDCOMPONENTS/ChooseSize.styled";

//Block choose and view all score...

function ChooseSize({
  dispatchSize,
  size,
  dispatchQuantity,
  dispatchScore,
  dispatchResetGame
}) {
  const HandleChangedSelect = (e) => {
    dispatchSize(e.target.value);
    dispatchQuantity(0);
    dispatchScore(0);
    dispatchResetGame(Math.random());
  };

  const HandleResetBtn = () => {
    dispatchQuantity(0);
    dispatchScore(0);
    dispatchResetGame(Math.random());
  }

  return (
    <ChooseContainer>
      <Score size={size} />
      <Select
        handleChanged={(e) => {
          HandleChangedSelect(e);
        }}
      />
      <Button
        onClick={HandleResetBtn}
      >
        Reset
      </Button>
    </ChooseContainer>
  );
}

//Redux
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSize: (size) => {
      dispatch(SizeAction(size));
    },
    dispatchQuantity: () => {
      dispatch(ResetQuantityTriedAction());
    },
    dispatchScore: () => {
      dispatch(ResetScoreAction());
    },
    dispatchResetGame: (b) => {
      dispatch(ResetTheGameAction(b));
    },
  };
};

const mapStateToProps = createStructuredSelector({
  size: SizeSelectorCreated,
  re_render: ResetGameCreated,
});

export default connect(mapStateToProps, mapDispatchToProps)(ChooseSize);
