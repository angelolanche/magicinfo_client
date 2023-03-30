import React from 'react'
import ImageUpload from '../components/imageUpload/'
import { useForm, SubmitHandler } from "react-hook-form";
import {useAPI} from '../contexts/AuthContext'
type Inputs = {
    image: any
};


export default function Home() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const {imageUpdateService} = useAPI()

    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log('data: ', data.image[0])
        imageUpdateService(data.image[0])

    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ImageUpload register={register} errors={errors} />
                <input type="submit" />
            </form>
        </div>
    )
}

/* 

{
  "apiVersion": 2,
  "errorCode": 200,
  "errorMessage": "OK",
  "items": {
    "categoryList": [
      {}
    ],
    "contentCount": 0,
    "contentList": [
      {
        "contentDuration": 1,
        "contentDurationMilli": "string",
        "contentId": "00000000-0000-0000-0000-000000000000",
        "contentName": "Content",
        "contentOrder": 1,
        "expiredDate": "2016-01-01 00:00:00",
        "hasDefaultPlayTime": true,
        "mediaType": "IMAGE",
        "playTime": 0,
        "playlistId": "00000000-0000-0000-0000-000000000000",
        "resolution": "string",
        "startDate": "2016-01-01 00:00:00",
        "subPlaylist": true,
        "syncPlayGroupOrder": 0,
        "tagList": "string",
        "tagMatchType": "string",
        "tagValue": "string",
        "thumbFileId": "00000000-0000-0000-0000-000000000000",
        "thumbFileName": "string",
        "thumbFilePath": "string",
        "versionId": 1
      }
    ],
    "creatorId": "admin",
    "deviceType": "SPLAYER",
    "deviceTypeVersion": 3,
    "groupId": 1,
    "groupName": "default",
    "lastModifiedDate": "2016-01-01 00:00:00",
    "metaData": "-",
    "playTime": 0,
    "playlistId": "32FA85B4-2389-476C-845A-0FC6F1D10D81",
    "playlistName": "New Playlist",
    "playlistType": 0,
    "shareFlag": 1,
    "shuffleFlag": "N",
    "syncPlayGroupCount": 0,
    "thumbFileName": "string",
    "thumbFilePath": "string",
    "totalSize": 0,
    "versionId": 1
  },
  "pageSize": 20,
  "startIndex": 1,
  "status": "Success",
  "totalCount": 47
}

*/
