export const RemoveClassHidden = (ImagesSelector) =>{
    ImagesSelector.forEach((img) => {
        img.classList.remove('hidden');
      });
}