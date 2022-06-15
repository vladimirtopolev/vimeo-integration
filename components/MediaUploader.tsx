import { useState } from 'react';
import { MediaUploaderVimeo } from '../utils/media-uploader-vimeo';

const MediaUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [isUploading, setUploading] = useState(false);

  return (
    <>
      <input
        type='file'
        accept='video/*'
        onChange={(e) => {
          if (e.target.files) {
            setFile(e.target.files[0]);
          }
        }}
      />
      <button
        disabled={!file}
        onClick={async () => {
          if (file) {
            setProgress(0);
            setUploading(true);
            const uploader = new MediaUploaderVimeo();
            const videoMeta = await uploader.upload(
              file,
              (bytesUploaded, bytesTotal) => {
                setProgress((bytesUploaded * 100) / bytesTotal);
              }
            );
            console.log(videoMeta);
            setUploading(false);
          }
        }}
      >
        Upload
      </button>
      {isUploading && <div>Progress: {Math.floor(progress)}%</div>}
    </>
  );
};

export default MediaUploader;
