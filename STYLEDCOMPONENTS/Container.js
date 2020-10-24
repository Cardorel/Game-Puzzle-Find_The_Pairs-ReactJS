import styled from 'styled-components';


export const Container = styled.div`
width: ${({size}) => (size % 2 == 0) ? '70%;' : '90%;' }
margin: 25px auto;
`