import photosApi from "../api/photosApi";

export const apiGetPhotos = async () => {
  try {
    const { data } = await photosApi.get('/photos');
    return data;
  } catch (error) {
    console.log('error en obtener fotos');
  }
};