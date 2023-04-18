import styled from 'styled-components'


const FormLayout = styled.div`
    border: "1px solid
`;

const CarName = styled.input<{ error?: boolean }>`
    border: ${(props) => (props.error ? "1px solid red" : "none")}
`;

const CarAttr = styled.input<{ error?: boolean }>`
    border: ${(props) => (props.error ? "1px solid red" : "none")};
    margin-top: 4px;
    padding: 4px;
`;

const ControlNumber = styled.input<{ error?: boolean }>`
    border: ${(props) => (props.error ? "1px solid red" : "none")};
    margin-top: 4px;
    padding: 4px;
`;

const LogoContainer = styled.div`
    margin-top: 4px;
    padding: 4px;
`;

const FormContainer = styled.div`
    margin-top: 4px;
    padding: 4px;
`;

const HeaderContainer = styled.div`
    margin-top: 4px;
    padding: 4px;
`;

const FieldsContainer = styled.div`
    margin-top: 4px;
    padding: 4px;
`;


const ButtonContainer = styled.div`
    margin-top: 4px;
    padding: 4px;
`;

const Button = styled.button`
    margin-top: 8px;
`;

export { FormLayout, CarAttr, CarName, ControlNumber, LogoContainer, FormContainer, HeaderContainer, FieldsContainer, ButtonContainer, Button}
