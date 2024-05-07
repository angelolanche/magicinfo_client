import { useEffect, useState } from "react";
import {ImageContainer} from './styles'
import { io } from "socket.io-client";

interface iImageUpdate {
  url: string
}

export default function View() {
  const [imageUpdate, setImageUpdate] = useState<iImageUpdate>({url: import.meta.env.VITE_PORSCH_IMAGE})
  const socket = io(import.meta.env.VITE_API_ADDRESS);

  useEffect(()=> {
    socket.on('imageUpdated', (response) => {
      if(response) {
        setTimeout(() => {
          setImageUpdate({...imageUpdate})
        }, 60000);
      }
    })
  }, [])


  return (
    <ImageContainer>
      <img src={`${imageUpdate.url}?${Date.now()}`} />
    </ImageContainer>
  )
}