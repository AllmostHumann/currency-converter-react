import styled from "styled-components";

const Header = styled.header`
    font-weight: 700;
    font-family: 'lato', sans-serif;
    font-size: 50px;
    text-align: center;
    margin: 20px auto 50px auto;
    color: hsl(39, 100%, 50%);
    @media (max-width: 767px) {
        font-size: 40px;
    }
`;

export default Header;