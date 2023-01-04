import styled from "styled-components";

export const Label = styled.label`
    font-weight: 700;
    margin: 5px;
    padding: 5px;

    @media (max-width: 767px) {
        display: grid;
        grid-template-columns: min-content ;
    }
`;

export const InputField = styled.input`
margin: 5px 5px;

@media (max-width: 767px) {
        margin: 5px 0px;
    }
`;