import React from 'react'
import { ImageUpload } from '../components/imageUpload/'
import { PorscheDetailsForm } from '../components/porscheDetailsForm/'
import { useForm, SubmitHandler } from "react-hook-form";
import { useAPI } from '../contexts/ApiContext'

interface FormData {
    image: FileList
}

export default function Home() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const { imageUpdateService } = useAPI()

    const onSubmit: SubmitHandler<FormData> = data => {
        imageUpdateService(data)


    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <PorscheDetailsForm register={register} errors={errors}/>
                    <ImageUpload register={register} errors={errors} />
                    <input type="submit" />
            </form>
        </div>
    )
}

