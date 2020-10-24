import styled from 'styled-components'


export const Image = styled.img
`
max-width: 110px;
height: 132.5px;
object-fit: cover;
cursor: pointer;
border-radius: 8px;
opacity: 1;
transition: opacity all 0.35ms;

`

export const ImageContentDiv = styled.div
`
width: 110px;
border-radius: 8px;
margin: 0 4px 8px 4px;
display: flex;
justify-content: center;
align-items: center;
position: relative;

&.blockFirstImg{
    pointer-events: none;
    img{
        pointer-events: none;
    }
}

&.hidden{
    pointer-events: none;
    visibility: hidden;
    cursor: none;
    img{
        pointer-events: none;
        visibility: hidden;
        cursor: none;
        transition: opacity all 0.35ms
    }
}

&.ShowImage{
    background-color: #0078D7;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
     box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    &::before{
        content: "?";
        position: absolute;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 19px;
        font-weight: bold;
    }
    img{
        opacity: 0;
        transition: opacity all 0.35ms
    }
}


`