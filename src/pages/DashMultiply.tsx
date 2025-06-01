import React, { useCallback, useRef, useState } from 'react';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { uploadDataFile, selectFileStatus } from '../redux/slices/fileSlice';

const DashMultiply: React.FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectFileStatus);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.name.endsWith('.txt')) {
        setSelectedFile(file);
      } else {
        alert('Only .txt files are allowed');
      }
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
      const file = files[0];
      if (file.name.endsWith('.txt')) {
        setSelectedFile(file);
      } else {
        alert('Only .txt files are allowed');
      }
    }
  };

  const handleSend = () => {
    if (selectedFile) {
        dispatch(uploadDataFile({ file: selectedFile, serviceType: 'matrix_operations' }));
    }
  };

  return (
    <Box sx={{
      flex: '1 1 auto',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }}>
      <Box sx={{
        display: 'flex',
        flex: '0 0 auto',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        gap: 1,
        p: isMobile ? 0 : 2
      }}>
        <Typography
          variant="h5"
          color="white"
          textAlign="center"
          sx={{ fontSize: 'clamp(1.2rem, 2vw, 2rem)' }}
        >
          Trimiteți două matrici — iar noi le înmulțim pentru dumneavoastră
        </Typography>

        <Typography
          variant="body1"
          color="#ccc"
          textAlign="left"
          sx={{
            fontSize: 'clamp(0.95rem, 1.2vw, 1.25rem)'
          }}
        >
          - Se efectuează înmulțirea a două matrici  
          - Rezultatul este o matrice nouă  
          - Formatul fișierului trebuie să conțină două blocuri separate
        </Typography>

        <Typography
          variant="caption"
          color="#888"
          textAlign="center"
          sx={{
            fontSize: 'clamp(0.75rem, 1vw, 1.1rem)'
          }}
        >
          * Se acceptă doar fișiere .txt • Maxim 10×10 per matrice
        </Typography>
      </Box>

      <Box sx={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        gap: 2
      }}>
        <Box
          onClick={handleBoxClick}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          sx={{
            width: '100%',
            height: '100%',
            flex: 1,
            maxWidth: '850px',
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
            {selectedFile ? selectedFile.name : 'Drag & drop sau apăsați pentru a încărca'}
          </Typography>
          <input
            type="file"
            hidden
            accept=".txt"
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
            maxWidth: '600px',
            borderRadius: '24px'
          }}
        >
          {status === 'loading' ? 'Se procesează...' : 'Trimite'}
        </Button>
      </Box>
    </Box>
  );
};

export default DashMultiply;
