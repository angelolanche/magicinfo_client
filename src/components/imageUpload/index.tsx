import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useAPI } from '../../contexts/ApiContext'

interface FormData {
    image: FileList
}

function ImageUpload() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const { imageUpdateService } = useAPI()

    const onSubmit: SubmitHandler<FormData> = data => {
        imageUpdateService(data)

    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <div>
                <p>Insira uma imagem para ser apresentada no Toten:</p>
                <label htmlFor="inputTag">
                    Selecionar
                    <input id="inputTag" type='file' {...register("image", { required: true })} />
                </label>
                <button type='submit'>enviar</button>
                {errors.image?.ref && <span>This field is required</span>}
            </div>
        </form>
    )
}

export {ImageUpload}
