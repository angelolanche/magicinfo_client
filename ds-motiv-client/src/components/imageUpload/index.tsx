import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useAPI } from '../../contexts/ApiContext'
import { PreviewImage, 
  SubmitImageContainer, 
  SectionContainer, 
  LabelButton, 
  SelectButtonContainer, 
  SubmitButton, 
  SelectContainer, 
  PreviewContainer 
} from './styles'

interface FormData {
    image: FileList,
    password: string
}

interface Submitted {
    error?: string,
    submitted: boolean
}

interface PreviewImage {
    name: string,
    img: string,
}

function ImageUpload() {
    const [previewImage, setPreviewImage] = useState<PreviewImage>({ name: '', img: '' });
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<Submitted>({ error: '', submitted: false })

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const { imageUpdateService } = useAPI()

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        // try {
        //     const imageUpdate = await imageUpdateService(data)

        //     if (imageUpdate && !imageUpdate.error) {
        //         setIsSubmitted({ error: '', submitted: true })
        //         setPreviewImage({ name: '', img: '' })
        //         reset()

        //         return
        //     }

        //     if (imageUpdate && imageUpdate.error) {
        //         setIsSubmitted({ error: imageUpdate.error, submitted: false })

        //         return
        //     }
        // } catch (error) {
        //     setIsSubmitted({ submitted: false })
        //     console.error('Submission failed: ', error)
        // }
    };

    const handleLabelClick = () => {
        setIsClicked(!isClicked);
    };

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];

        if (file) {
            setIsSubmitted({ error: '', submitted: false })

            const reader = new FileReader();
            reader.onload = () => {
                setPreviewImage({ name: file.name, img: reader.result as string });
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
                        {!isSubmitted.submitted &&
                            <p>{previewImage.name}</p>
                        }
                        <input id="inputTag" type='file' {...register("image", { required: true })} onChange={handleFileInputChange} />
                    </SelectButtonContainer>
                </SelectContainer>
                <PreviewContainer>
                    {
                        previewImage.img && <PreviewImage src={previewImage.img} alt='preview image' />
                    }
                </PreviewContainer>
                <SubmitImageContainer>
                    {
                      errors.image?.ref && !previewImage.img && 
                        < span style={{ color: 'red', paddingLeft: '1rem' }}>
                          *Sem imagem selecionada!
                        </span>
                    }
                    {
                      isSubmitted.error && 
                        <span style={{ color: 'red', paddingLeft: '1rem' }}> 
                          *Senha inválida!
                        </span>
                    }
                    {
                      isSubmitted.submitted && !isSubmitted.error && !errors.image?.ref && 
                        <span style={{ color: 'green', paddingLeft: '1rem' }}> 
                          Imagem enviada!
                        </span>
                    }
                    <input type="password" placeholder='senha' {...register("password", { required: true })} />
                    <SubmitButton type='submit'>enviar</SubmitButton>
                </SubmitImageContainer>
            </form >
        </SectionContainer >
    )
}

export { ImageUpload }
