import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useAPI } from '../../contexts/ApiContext'
import { PreviewImage, SubmitImageContainer, SectionContainer, LabelButton, SelectButtonContainer, SubmitButton, SelectContainer, PreviewContainer } from './styles'

interface FormData {
    image: FileList
}

function ImageUpload() {
    const [previewImage, setPreviewImage] = useState<string>();
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [imageName, setImageName] = useState<string>();
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const { imageUpdateService } = useAPI()

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            await imageUpdateService(data)
            setIsSubmitted(true)
        } catch (error) {
            setIsSubmitted(false)
            console.error('Submission failed: ', error)
        }
        reset();
    };

    const handleLabelClick = () => {
        setIsClicked(!isClicked);
    };

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];

        if (file) {
            setImageName(file.name)

            const reader = new FileReader();
            reader.onload = () => {
                setPreviewImage(reader.result as string);
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <SectionContainer>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <SelectContainer>
                    <p>Selecione sua imagem:</p>
                    <SelectButtonContainer>
                        <LabelButton htmlFor="inputTag" isClicked={isClicked} onMouseDown={handleLabelClick} onMouseUp={handleLabelClick} style={{ background: isClicked ? '#f6f6f6' : '#fff' }}>
                            Selecionar
                        </LabelButton>
                        <p>{imageName}</p>
                        <input id="inputTag" type='file' {...register("image", { required: true })} onChange={handleFileInputChange} />
                    </SelectButtonContainer>
                </SelectContainer>
                <PreviewContainer>
                    {
                        previewImage && <PreviewImage src={previewImage} alt='preview image' />
                    }
                </PreviewContainer>
                <SubmitImageContainer>
                    <SubmitButton type='submit'>enviar</SubmitButton>
                    {errors.image?.ref && !previewImage ? <span style={{ color: 'red', paddingLeft: '1rem' }}> *Sem imagem selecionada</span> : <></>}
                    {isSubmitted && <span style={{ color: 'green', paddingLeft: '1rem' }}> Imagem enviada!</span>}
                </SubmitImageContainer>
            </form >
        </SectionContainer>
    )
}

export { ImageUpload }
