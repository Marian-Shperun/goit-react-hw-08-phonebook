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
            marginTop: '20px',
          }}
        >
          <Skeleton
            variant="rectangular"
            width="100%"
            height={30}
            style={{ borderRadius: 5 }}
          />
          <Skeleton
            variant="rectangular"
            width={80}
            height={30}
            style={{ borderRadius: 5 }}
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
