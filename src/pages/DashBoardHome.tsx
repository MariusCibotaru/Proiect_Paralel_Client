import React, { useCallback, useRef, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { uploadDataFile, selectFileStatus } from '../redux/slices/fileSlice';

const DashBoardHome: React.FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectFileStatus);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      setSelectedFile(files[0]);
    }
  }, []);

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleBoxClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleSend = () => {
    if (selectedFile) {
      dispatch(uploadDataFile(selectedFile));
    }
  };

  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 2
    }}>
      <Box
        onClick={handleBoxClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        sx={{
          width: '100%',
          maxWidth: '600px',
          aspectRatio: '1 / 1',
          border: '2px dashed #3b82f6',
          borderRadius: '24px',
          backgroundColor: '#1e1e1e',
          color: '#aaa',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          p: 4,
          cursor: 'pointer',
          transition: '0.2s',
          '&:hover': {
            backgroundColor: '#2a2a2a',
            borderColor: '#2563eb',
            color: '#fff',
          },
        }}
      >
        <Typography variant="h6">
          {selectedFile ? selectedFile.name : 'Drag & drop or click to upload'}
        </Typography>
        <input
          type="file"
          hidden
          ref={fileInputRef}
          onChange={handleFileSelect}
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={handleSend}
        disabled={!selectedFile || status === 'loading'}
        sx={{
          textTransform: 'none',
          fontSize: '26px',
          width: '100%',
          maxWidth: '600px'
        }}
      >
        {status === 'loading' ? 'Processing...' : 'Send'}
      </Button>

    </Box>
  );
};

export default DashBoardHome;
