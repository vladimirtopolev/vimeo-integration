export enum MediaProvider {
  VIMEO = 'Vimeo',
  // here you may include any other providers
}

export type MediaVimeoItem = {
  provider: MediaProvider.VIMEO;
  id: string;
};

export type MediaItem = {
  provider: MediaProvider;
} & MediaVimeoItem;

export interface Uploader {
  upload(
    file: File,
    onProgress?: (bytesUploaded: number, bytesTotal: number) => void
  ): Promise<MediaItem>;
}
