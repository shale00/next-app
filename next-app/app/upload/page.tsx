'use client';
import React from 'react';
import { CldUploadWidget } from 'next-cloudinary';

const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset='tpchyn21'>
      {({ open }) => (
        <button className='btn btn-primary' onClick={() => open()}>
          Upload
        </button>
      )}
    </CldUploadWidget>
  );
};

export default UploadPage;
