import * as dotenv from 'dotenv'
import AWS from 'aws-sdk'

interface iUploadImageService {
    image: Image
}

type Image = {
    fieldname: string,
    originalname: string,
    encoding: string,
    mimetype: string,
    buffer: any,
    size: number
}



async function uploadImageService({ image }: iUploadImageService) {
    dotenv.config()
    
    AWS.config.update({
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        accessKeyId: process.env.AWS_ACCESS_KEY,
        region: process.env.AWS_BUCKET_REGION
    })

    const bucketName = process.env.AWS_BUCKET_NAME
    const imageName = process.env.PORSCH_IMAGE_NAME
    const params = {
        Bucket: bucketName || "",
        Key: `${imageName}`,
        Body: image.buffer,
        ContentType: image.mimetype
    }
    const s3 = new AWS.S3()
    const upload = s3.putObject(params)

    const imageUploadResponse = upload.promise().then(
        (data) => {
            console.log("successfuly uploaded image!")
        }
    )

    return imageUploadResponse
}

export { uploadImageService }
