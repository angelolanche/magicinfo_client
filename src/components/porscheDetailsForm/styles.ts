import styled from 'styled-components'


const FormLayout = styled.div`
    max-width: 1920px;
    max-height: 1080px;
    display: grid;  
    grid-template-rows: 1fr 1fr 1fr; 
    padding: 8rem 5rem 1rem;
    gap: 4rem;
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    justify-items: center;
`;

const LogoContainerSup = styled.div`
    display: flex;
    max-width: 15vw; 
    height: auto; 
    max-height: 100%; 
`;

const HeaderContainer = styled.div` 
    display: flex; 
    flex-direction: column; 
    font-family: 'PorscheNextTT', sans-serif;
    border-bottom: 1px solid black;
    
    label {    
        cursor: pointer;
        font-size: 1.4rem;
        margin-right: 0.5rem;
    }
    
    > div {
        display: flex;
    }

`;

const CarName = styled.input<{ error?: boolean }>` 
    border: ${(props) => (props.error ? "1px solid red" : "none")}; 
    font-size: 3rem; 
    font-weight: bolder; 
    cursor: text;
    
    &:focus-visible {
    outline: none;
    }

    ::placeholder {
        color: black;
        opacity: 1;
    }
`;

const ControlNumber = styled.input<{ error?: boolean }>`
    border: ${(props) => (props.error ? "1px solid red" : "none")};
    font-size: 1.5rem;
    height: 33px;
    
    &:focus-visible {
        outline: none;
    }
`;

const FieldsContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 3fr;

`;

const MainAttrContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
    
    div {
        margin-bottom: 0.5rem;
        display: flex;
    }
`;

const MainAttrLabel = styled.label`
    font-weight: bolder;
    font-size: 1.3rem;
    cursor: pointer;
    white-space: nowrap;
`;


const MainAttrInput = styled.input<{ error?: boolean }>`
    border: ${(props) => (props.error ? "1px solid red" : "none")};
    padding-left: 0.5rem;
    font-size: 1.3rem;
    cursor: text;
    width: 100%;

    &:focus-visible {
        outline: none;
    }
`;

const OptAttrContainer = styled.div`
    span {
        font-size: 1.3rem;
        font-weight: bolder;
    }

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
        list-style-type: none;
        gap: 1.4rem;
    }

    input {
        width: 100%;
    }
`;


const FormContainer = styled.div`
`;


const BottomContainer = styled.div` 
    display: flex;
    justify-content: space-between;
    border-top: 1px solid black;
    padding-top: 1rem;

    > span {
        font-size: 1.2rem;
        padding-top: 1.2rem;
    }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

const PriceLabel = styled.label`
    font-size: 3rem;
    font-weight: bolder;
    width: 100%;
    display: inline-flex;
    justify-content: end;
`;

const CurrencyMark = styled.div`
    display: inline-flex;
    
    span {
        display: flex;
        font-size: 3rem;
        font-weight: bolder;
        width: 50%;
        justify-content: end;
        margin: 0 1rem 0 3rem;
    }
`;

const PriceInput = styled.input`
  border: none;
  font-size: 3rem;
  outline: none;
  text-align: end;
  font-weight: bolder;
  width: 100%;
`;

const ButtonContainer = styled.div`
    margin-top: 4px;
    padding: 4px;
`;

const Button = styled.button`
    margin-top: 8px;
`;

const SaveImageContainer = styled.div``;

const SaveImageButton = styled.button``;

export { FormLayout, LogoContainerSup, MainAttrInput, SaveImageContainer, SaveImageButton, CurrencyMark, BottomContainer, MainAttrContainer, OptAttrContainer, PriceContainer, PriceLabel, PriceInput, MainAttrLabel, CarName, ControlNumber, LogoContainer, FormContainer, HeaderContainer, FieldsContainer, ButtonContainer, Button }
