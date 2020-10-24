import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { SizeSelectorCreated } from "../../RESELECT";
import { Container } from "../../STYLEDCOMPONENTS/Container";
import { App } from "../../STYLEDCOMPONENTS/Home.styled";
import InterFaceImage from './index';
import ChooseSize from '../PAIRSSIZE';
import { Header } from "../../STYLEDCOMPONENTS/Header";

function Main({size}) {
  return (
    <Container size={size}>
        <Header>Find Pairs</Header>
      <App>
        <InterFaceImage />
        <ChooseSize />
      </App>
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
    size: SizeSelectorCreated
  })

export default connect(mapStateToProps , null)(Main);
