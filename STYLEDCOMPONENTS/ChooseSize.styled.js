import styled , {css} from "styled-components";



export const ChooseContainer = styled.div`  
background-color: white;
width: 100%;
flex: 1;
height: 100%;
padding: 10px 10px;
border-radius: 3px;
margin: 0 20px;
`;


export const ScoreContainer = styled.div`
width: 40%;
`
const Span = css
`
font-size: 21px;
font-weight: bolder;
`

export const ScoreSpan = styled.span
`
${Span}
color: #0078D7;
`


export const LevelSpan=styled.span
`
${Span}
`

export const FontWeight = styled.span
`
font-weight: bold;
`

export const Paragraph = styled.p`
margin: 15px 0;
`


export const Button = styled.button`  
padding: 8px 15px;
color: white;
outline: none;
background-color: #0078D7;
font-size: 16px;
cursor: pointer;
border-radius: 3px;
border: none;`

export const ParagraphSize = styled.p`
margin: 0 8px 0 0;
font-weight: bold;
margin-bottom: 0 !important;
`

export const SelectContainer =styled.div`  
display: flex;
margin: 8px 0;
align-items: center;
padding: 15px 0px;
`


export const SelectOption =styled.select
`
width: 90px;
height: 20px;
`