import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

interface FileUploadState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: FileUploadState = {
  status: 'idle',
  error: null,
};

// Thunk: загрузка файла и получение .root
export const uploadDataFile = createAsyncThunk<
  void,
  File,
  { rejectValue: string }
>('file/uploadDataFile', async (file, thunkAPI) => {
  try {
    const formData = new FormData();
    formData.append('dataFile', file);

    const token = localStorage.getItem('token');
    const response = await axios.post('/file/upload', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      responseType: 'blob', // получаем .root файл
    });

    // 💾 Принудительно скачать файл в браузере
    const blob = new Blob([response.data], { type: 'application/octet-stream' });
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'output.root'; // можешь менять название
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(downloadUrl);

  } catch (error: any) {
    const message = error.response?.data?.message || 'File upload failed';
    return thunkAPI.rejectWithValue(message);
  }
});

const fileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadDataFile.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(uploadDataFile.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(uploadDataFile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Unknown error';
      });
  },
});

export const selectFileStatus = (state: { file: FileUploadState }) => state.file.status;
export const selectFileError = (state: { file: FileUploadState }) => state.file.error;

export default fileSlice.reducer;
