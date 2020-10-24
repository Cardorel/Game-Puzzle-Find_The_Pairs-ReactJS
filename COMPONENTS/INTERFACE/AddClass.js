
export const AddClassVisible = (ImagesSelector) =>{
    ImagesSelector.forEach((img) => {
        img.classList.add("ShowImage");
      });
}