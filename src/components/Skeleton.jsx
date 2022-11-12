import React from 'react';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

export const ContsctSkeleton = () => {
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <Stack spacing={1}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Skeleton variant="circular" width={50} height={50} />
          <Skeleton
            variant="rectangular"
            width="193px"
            height={20}
            sx={{ mr: 2, ml: 2, borderRadius: 1 }}
          />
          <Skeleton
            variant="rectangular"
            width="60px"
            height={30}
            sx={{ borderRadius: 1, ml: 'auto' }}
          />
        </div>
        <div></div>
      </Stack>
    </div>
  );
};
export const TextSkeleton = () => {
  return (
    <Box component="p" style={{ width: 'fit-content' }}>
      <Skeleton width={200} height={40} animation="wave" />
    </Box>
  );
};
