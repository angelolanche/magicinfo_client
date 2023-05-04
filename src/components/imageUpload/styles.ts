import styled from 'styled-components';

const SectionContainer = styled.div`
    padding: 0 5rem;
    width: 100%;
    min-width: 1920px;
`;

const SelectContainer = styled.div`
    margin: 4rem 0 1rem;
    
    > p {     
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }

    input {
        height: 0;
    }
`;

const SelectButtonContainer = styled.div`
    display: flex;

    p {
        font-size: 1.5rem;
    }
`;

const LabelButton = styled.label<{ isClicked: boolean }>`
    font-size: 1.2rem;
    padding: 0.2rem 1rem;
    border: 1px solid gray;
    border-radius: 1rem;
    letter-spacing: 1px;
    cursor: pointer;
    margin-right: 1rem;
`;

const PreviewContainer = styled.div`
    display: flex;
    justify-content: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding: 2rem;
`;

const PreviewImage = styled.img`
    max-width: 100%;
    height: auto;
    border: 1px solid black;
    border-radius: 2rem;
    overflow: hidden;
`;

const SubmitImageContainer = styled.div`
    padding: 1rem 0;
    display: flex;
    justify-content: end;
    align-items: center;
`;

const SubmitButton = styled.button`
    padding: 0.5rem 1rem;
    border: 1px solid gray;
    border-radius: 1rem;
    background: #fff;

    &:active {
        background: #f6f6f6;
    }
`;

export { SectionContainer, SelectContainer, LabelButton, SelectButtonContainer, PreviewContainer, PreviewImage, SubmitImageContainer, SubmitButton }
