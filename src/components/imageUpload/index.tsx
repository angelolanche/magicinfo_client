import React from 'react';

export function ImageUpload({ register, errors }: any) {

    return (
        <div>
            <p>Insira uma imagem para ser apresentada no Toten:</p>
            <label htmlFor="inputTag">
                Selecionar
                <input id="inputTag" type='file' {...register("image", { required: true })} />
            </label>
            {errors.exampleRequired && <span>This field is required</span>}
        </div>
    )
}
