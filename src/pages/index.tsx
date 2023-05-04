import React from 'react'
import { ImageUpload } from '../components/imageUpload/'
import { PorscheDetailsForm } from '../components/porscheDetailsForm/'

export default function Home() {
    return (
        <div style={{ overflow: 'scroll' }}>
            <PorscheDetailsForm />
            <ImageUpload />
        </div>
    )
}

