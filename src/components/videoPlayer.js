import React from 'react';
import { Video } from 'cloudinary-react';

export default function VideoPlayer({ publicId, className = '' }) {
  return (
    <Video cloudName="dzqdvin5s" publicId={publicId} loop="true" autoplay="true" muted="true">
      <Transformation quality="auto" />
    </Video>
  );
}
