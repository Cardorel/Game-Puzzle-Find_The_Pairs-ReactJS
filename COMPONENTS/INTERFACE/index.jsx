import React, { useEffect, useCallback} from "react";
import { connect } from "react-redux";
import { ImageContainer } from "../../STYLEDCOMPONENTS/ImageContainer.styled";
import {
  ImageAction,
  QuantityTriedAction,
  ScoreAction,
} from "../../REDUX/Action/Action";
import { createStructuredSelector } from "reselect";
import {
  SizeSelectorCreated,
  ImgSelectorCreated,
  ScoreCreated,
  ResetGameCreated,
} from "../../RESELECT";
import HandleCard from "./HandleCard";
import { FetchingData } from "./Fetch";
import { AddClassVisible } from "./AddClass";
import { DeleteClassVisible } from "./DeleteClass";
import { shuffleImage } from "./ShuffleImage";
import CurrentComponentImage from "./CurrentComponentImage";
import { RemoveClassHidden } from "./removeClassHidden";

///***************************************** */

function InterFaceImage({
  dispatchImage,
  size,
  allImages,
  dispatchQuantity,
  dispatchScore,
  score,
  resetGame
}) {
  //********************************************fetch data*/
  useEffect(() => {
    ///fetch data
    FetchingData(dispatchImage);
    //update Game
    RemoveClassHidden(document.querySelectorAll("#ImgCard"));
    //wait 2s
    const timeOut = setTimeout(() => {
      const ImagesSelector = document.querySelectorAll("#ImgCard");
      AddClassVisible(ImagesSelector);
    }, 2000);
    return () => {
      //clear
      clearInterval(timeOut);
    };
  }, [size,resetGame]);

  //************************Put the alert box */
  useEffect(() => {
    if (size == score) {
      alert("Wouaaaaa! you're one of our champions of today.");
      window.location.reload();
    }
  }, [score]);

  //************************************** */
  useEffect(() => {
    const ImagesSelector = document.querySelectorAll("#ImgCard");
    DeleteClassVisible(ImagesSelector);
  }, [size , resetGame]);
  //***********************************end */

  //*****************************************Get a order.... */
  useEffect(() => {
    const ImagesSelector = document.querySelectorAll("#ImgCard");
    shuffleImage(ImagesSelector);
  }, [size]);
  /************************************end */

  //*******************************Handle the Image */
  const HandleImage = useCallback((e, index) => {
    const ImagesSelector = document.querySelectorAll("#ImgCard");
    const target = e.target;
    HandleCard(target, ImagesSelector, index, dispatchQuantity, dispatchScore);
  }, []);
  //*********************************************End */
  return (
    <ImageContainer>
      {CurrentComponentImage(allImages, HandleImage, size)}
    </ImageContainer>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchImage: (img) => {
      dispatch(ImageAction(img));
    },
    dispatchQuantity: () => {
      dispatch(QuantityTriedAction());
    },
    dispatchScore: () => {
      dispatch(ScoreAction());
    },
  };
};

const mapStateToProps = createStructuredSelector({
  size: SizeSelectorCreated,
  allImages: ImgSelectorCreated,
  score: ScoreCreated,
  resetGame: ResetGameCreated,
});

export default connect(mapStateToProps, mapDispatchToProps)(InterFaceImage);
