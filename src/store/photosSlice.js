import { createSlice } from '@reduxjs/toolkit';

const tempPhoto = {
  "albumId": 1,
  "id": 1,
  "title": "accusamus beatae ad facilis cum similique qui sunt",
  "url": "https://via.placeholder.com/600/92c952",
  "thumbnailUrl": "https://via.placeholder.com/150/92c952"
};

export const photosSlice = createSlice({
  name: 'photo',
  initialState: {
    photos: [
      tempPhoto
    ],
    current_photo_id: 1,
  },
  reducers: {
    addPhotos: (state, { payload }) => {
      state.photos.push(payload);
      state.current_photo_id = payload.id;
    },
    deletePhotos: (state) => {
      state.photos = state.photos.filter(photo => photo.id === state.current_photo_id);
    }
  }
});


// Action creators are generated for each case reducer function
export const { addPhotos, deletePhotos } = photosSlice.actions;