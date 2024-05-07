import { ImageUpload } from '../imageUpload/'
import { PorscheDetailsForm } from '../porscheDetailsForm/'

export default function HomePage() {
    return (
        <div style={{ overflow: 'scroll', minWidth: '1920px', minHeight: '1080px' }}>
            <PorscheDetailsForm />
            <ImageUpload />
        </div>
    )
}

