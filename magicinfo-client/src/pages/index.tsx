import React from 'react'
import { ImageUpload } from '../components/imageUpload/'
import { PorscheDetailsForm } from '../components/porscheDetailsForm/'

export default function Home() {
    return (
        <div style={{ overflow: 'scroll', minWidth: '1920px', minHeight: '1080px' }}>
            <PorscheDetailsForm />
            <ImageUpload />
        </div>
    )
}

