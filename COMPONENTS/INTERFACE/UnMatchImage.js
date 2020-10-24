export const ImagesUnMatch = (
  ImagesSelector,
  dispatchQuantity,
  firstImgIndex,
  secondImgIndex
) => {
    if(firstImgIndex != secondImgIndex)
    {
        ImagesSelector[firstImgIndex].classList.add("ShowImage");
        ImagesSelector[secondImgIndex].classList.add("ShowImage");
        ImagesSelector[firstImgIndex].classList.remove("blockFirstImg");
        dispatchQuantity();
    }
    return;
};
