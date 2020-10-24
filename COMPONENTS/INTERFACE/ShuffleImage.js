export const shuffleImage = (ImagesSelector) => {
     for (let i = ImagesSelector.length - 1; i > 0 ; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        ImagesSelector[random].style.order = i;
        ImagesSelector[i].style.order = random;
    } 
}