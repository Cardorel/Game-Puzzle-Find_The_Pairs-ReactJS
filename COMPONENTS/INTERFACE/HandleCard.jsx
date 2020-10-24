import { ImagesMatched } from "./MatchImage";
import { ImagesUnMatch } from "./UnMatchImage";

//Initial values
let firstImage, secondImage;
let hasClickedImage = false;
let blockThirdImage = false;
let firstImgIndex;
let secondImgIndex;

function HandleCard(
  target,
  ImagesSelector,
  index,
  dispatchQuantity,
  dispatchScore
) {
  if (blockThirdImage) return;

  ImagesSelector[index].classList.remove("ShowImage");
  if (!hasClickedImage) {
    //Let know if the player clicked
    hasClickedImage = true;
    //put the first index clicked by the player
    firstImgIndex = index;
    //that means it's a first click
    firstImage = target;
    //dont allow a player to click 2 times in the first image image
    firstImage.classList.add('blockFirstImg');
    //dont allow a player to click 2 times in the div container
    ImagesSelector[firstImgIndex].classList.add("blockFirstImg");
  } else {
    //Set a first time clicked false and help to get a second
    hasClickedImage = false;
    //Put the second index;
    secondImgIndex = index;
    //Set a value when the second image has been clicked
    secondImage = target;
    //Check if the first and second image clicked are a same
    if (firstImage.dataset.image === secondImage.dataset.image) {
      if (firstImgIndex != secondImgIndex) {
        blockThirdImage = true;
        setTimeout(() => {
          ImagesMatched(
            firstImage,
            secondImage,
            dispatchScore,
            firstImgIndex,
            secondImgIndex,
            ImagesSelector
          );
          blockThirdImage = false;
        }, 1000);
      }
      return;
    } else {
      blockThirdImage = true;
      setTimeout(() => {
        ImagesUnMatch(
          ImagesSelector,
          dispatchQuantity,
          firstImgIndex,
          secondImgIndex
        );
        blockThirdImage = false;
      }, 1000);
    }
  }
}

export default HandleCard;
