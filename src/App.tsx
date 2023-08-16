import React from 'react';
import './App.css';
import {MainCardStyled} from "./components/MainCard.styled";
import {MainPictureStyled} from "./components/MainPicture.styled";
import mainImg from "./assets/image/my_picture.jpg"
import {HeaderStyled} from "./components/Header.styled";

function App() {
    return (
        <div className="App">
            <MainCardStyled>
                <MainPictureStyled src={mainImg}/>
                <HeaderStyled>Headline</HeaderStyled>
            </MainCardStyled>

        </div>
    );
}

export default App;
