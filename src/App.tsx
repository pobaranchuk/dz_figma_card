import React from 'react';
import './App.css';
import {MainCardStyled} from "./components/MainCard.styled";
import {MainPictureStyled} from "./components/MainPicture.styled";
import mainImg from "./assets/images/my_picture.jpg"
import {HeaderStyled} from "./components/Header.styled";
import {ParagraphStyled} from "./components/Paragraph.styled";

function App() {
    return (
        <div className="App">
            <MainCardStyled>
                <MainPictureStyled src={mainImg}/>
                <HeaderStyled>Headline</HeaderStyled>
                <ParagraphStyled>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</ParagraphStyled>

            </MainCardStyled>

        </div>
    );
}

export default App;
