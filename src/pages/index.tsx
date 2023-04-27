import React from 'react'
import { ImageUpload } from '../components/imageUpload/'
import { PorscheDetailsForm } from '../components/porscheDetailsForm/'

export default function Home() {
    return (
        <div>
            <PorscheDetailsForm />
            <ImageUpload />
        </div>
    )
}

