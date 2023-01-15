import styled from "styled-components";

export const Fieldset = styled.fieldset`
    display: block;
    max-width: 600px;
    margin: 10px auto;
    border-radius: 5px;
    border-color: hsl(39, 100%, 50%);
    background-color: hsl(0, 0%, 100%);
    position: relative;
    box-shadow: 5px -5px 24px 0px rgba(127, 82, 0, 0.30);
`;

export const LoadingText = styled.p`
    font-size: 20px;
    line-height: 2.0;
    margin: 0;
    text-align: center;
    color: hsl(0, 0%, 100%);
`;

export const ErrorText = styled.p`
    font-size: 20px;
    line-height: 2.0;
    margin: 0;
    text-align: center;
    color: hsl(0, 0%, 100%);
`;

export const Loading = styled.div`
    display: flex;
    justify-content: center;
`;

export const Spinner = styled.p`
    width: 50px;
    height: 50px;
    border: 7px solid hsl(39, 100%, 50%);
    border-bottom-color: hsla(0, 0%, 0%, 0);
    border-radius: 50%;
    display: inline-block;
    animation: rotation 1s linear infinite;
    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
`;