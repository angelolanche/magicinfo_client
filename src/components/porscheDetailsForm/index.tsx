import { LogoContainerSup, SaveImageContainer, SaveImageButton, CarName, MainAttrLabel, MainAttrInput, CurrencyMark, PriceContainer, PriceInput, PriceLabel, BottomContainer, MainAttrContainer, OptAttrContainer, ControlNumber, LogoContainer, FormContainer, HeaderContainer, FieldsContainer, ButtonContainer, Button, FormLayout } from './styles'
import formParams from '../../../public/data/porscheDetails.json'
import Image from 'next/image';
import { useForm} from "react-hook-form";
import { TextAreaAutosize } from './../autosizeTextInput'

import downloadjs from 'downloadjs';
import { changeComponents } from './changeComponents';


interface FormData {
    [key: string]: string,
    textarea1: string,
    textarea2: string,
    textarea3: string,
}

export function PorscheDetailsForm() {
    const { register, formState: { errors } } = useForm<FormData>({
        defaultValues: { message: '' }
    });

    const handleCaptureClick = async () => {
        const canvas = await changeComponents()

        if (canvas) {
            const dataURL = canvas.toDataURL('image/png');
            downloadjs(dataURL, 'download.png', 'image/png');
        }
    };


    const { mainAttr, logo } = formParams
    return (
        <>
            <FormLayout id='formId'>
                <LogoContainer>
                    <LogoContainerSup>
                        <Image alt={logo.alt} src={logo.path} width={500} height={500} style={
                            {
                                display: "block",
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }} />
                    </LogoContainerSup>
                </LogoContainer>
                <FormContainer>
                    <HeaderContainer>
                        <CarName type='text' id='CarName' className='h2' placeholder='Nome do Carro' required={true}></CarName>
                        <div>
                            <label htmlFor='ControlNumber' >Número de controle: </label>
                            <ControlNumber type='text' className='h3' id='ControlNumber' required={true}></ControlNumber>
                        </div>
                    </HeaderContainer >
                    <FieldsContainer>
                        <MainAttrContainer>
                            {
                                mainAttr.map((attr) => (
                                    <div key={attr.name}>
                                        <MainAttrLabel htmlFor={attr.name}>{attr.label}:</MainAttrLabel>
                                        <MainAttrInput
                                            className={'mainAttr'}
                                            type={attr.type}
                                            id={attr.name}
                                            required={attr.required}
                                            {...register(attr.name, { required: attr.required })}>
                                        </MainAttrInput>
                                        {errors[attr.name]?.type === 'required' && <span>Max length exceeded</span>}
                                    </div>
                                ))
                            }
                        </MainAttrContainer>
                        <OptAttrContainer>
                            <span>Opcionais do veiculo:</span>
                            <ul>
                                <li>
                                    <TextAreaAutosize
                                        id={'textArea1'} register={register} placeholder='escreva aqui' maxRows={16} />
                                </li>
                                <li>
                                    <TextAreaAutosize
                                        id={'textArea2'} register={register} placeholder='escreva aqui' maxRows={16} />
                                </li>
                                <li>
                                    <TextAreaAutosize
                                        id={'textArea3'} register={register} placeholder='escreva aqui' maxRows={16} />
                                </li>
                            </ul>
                        </OptAttrContainer>
                    </FieldsContainer>
                </FormContainer >
                <BottomContainer>
                    <span>* Para consultar opções de financiamento fale com um dos nossos acessores</span>
                    <PriceContainer>
                        <PriceLabel htmlFor={'price'}>Preço final</PriceLabel>
                        <CurrencyMark>
                            <span>R$</span>
                            <PriceInput id={'price'} className='h2' placeholder='Preço' />
                        </CurrencyMark>
                    </PriceContainer>
                </BottomContainer>
            </FormLayout>
            <SaveImageContainer>
                <SaveImageButton type="button" onClick={handleCaptureClick} >Salvar</SaveImageButton>
            </SaveImageContainer>
        </>
    )
};
