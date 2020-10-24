export const DeleteClassVisible = (ImagesSelector) => {
    ImagesSelector.forEach((img) => {
        img.classList.remove("ShowImage");
      });
}