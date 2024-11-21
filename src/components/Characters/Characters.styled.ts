import styled from "styled-components";

export const MainContainer = styled.div`
    gap: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 20px;
    height: 120vh;
`
export const CardCharacter = styled.div`
    position: relative;
    outline: 1px solid lightblue;
    border-top-left-radius: 11px;
    border-top-right-radius: 5px;
    border-bottom-right-radius:20px;
    border-bottom-left-radius:5px;
    justify-content: center;
    text-align: center;
    width: 152px;
    height: 152px;
`
export const NameChar = styled.h1`
    font-size: medium;
    font-family: sans-serif;
    position: relative;
`