
import { useDispatch, useSelector } from 'react-redux';

import photosApi from '../api/photosApi';
import { addPhotos, deletePhotos } from '../store/photosSlice';

export const useMoveable = () => {
  const dispatch = useDispatch();
  const { photos, current_photo_id } = useSelector(state => state.photo);

  // const apiGetPhotos = async () => {
  //   try {
  //     const { data } = await photosApi.get('/photos');
  //     setPhotos(data.slice(0, 1));
  //   } catch (error) {
  //     console.log('error en obtener fotos');
  //   }
  // };

  const apiAddPhotos = async () => {

    try {
      const { data } = await photosApi.get('/photos');
      let count = 0;
      data.map(p => {
        if (p.id !== current_photo_id && p.id > current_photo_id && count === 0) {
          dispatch(addPhotos({ albumId: p.albumId, id: p.id, title: p.title, url: p.url, thumbnailUrl: p.thumbnailUrl }));
          count = 1;
        }
      });

    } catch (error) {
      console.log('error');
    }
  }


  const apiDeletePhotos = () => {

    try {

      dispatch(deletePhotos());

    } catch (error) {
      console.log('error');
    }
  }



  return {
    //Propiedades
    photos,
    //metodos
    apiAddPhotos,
    apiDeletePhotos
  }


}


