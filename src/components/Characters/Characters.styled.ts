import styled from "styled-components";

export const MainContainer = styled.div`
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: absolute;
`
export const CardCharacter = styled.div`
    position: relative;
    outline: 1px solid lightblue;
    border-top-left-radius: 11px;
    border-top-right-radius: 5px;
    justify-content: center;
    text-align: center;
    width: 150px;
    height: auto;
`
export const NameChar = styled.h1`
    font-size: medium;
    font-family: sans-serif;
`