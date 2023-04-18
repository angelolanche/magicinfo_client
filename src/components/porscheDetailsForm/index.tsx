import { CarAttr, CarName, ControlNumber, LogoContainer, FormContainer, HeaderContainer, FieldsContainer, ButtonContainer, Button, FormLayout } from './styles'
import formParams from '../../../public/data/porscheDetails.json'
import Image from 'next/image';


export function PorscheDetailsForm({ register, errors }: any) {
    const { fields, logo } = formParams

    return (
        <FormLayout>
            <LogoContainer>
                <Image alt={logo.alt} src='' />
            </LogoContainer>
            <FormContainer>
                <HeaderContainer>
                    <CarName type='text' id='CarName' value='Nome do Carro' required={true}></CarName>
                    <ControlNumber type='text' id='ControlNumber' value='Numero de controle' required={true}></ControlNumber>
                </HeaderContainer >
                <FieldsContainer>
                    {
                        fields.map((field) => (
                            <div key={field.name}>
                                <CarAttr
                                    type={field.type}
                                    id={field.name}
                                    value={field.value}
                                    required={field.required}
                                    {...register(field.name, { required: field.required })}>
                                </CarAttr>
                                {errors[field.name] && <p>{`${field.value} is required`}</p>}
                            </div>
                        ))
                    }
                </FieldsContainer>
            </FormContainer >
            <ButtonContainer>
                <Button>Enviar</Button>
            </ButtonContainer>
        </FormLayout>
    )
};
