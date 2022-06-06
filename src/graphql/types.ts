export interface Thumbnail {
    height?: number,
    width?: number,
    url: string,
}

export interface File {
    height: number,
    width: number,
    scale: number,
    url: string,
    thumbnails: Thumbnail[]
}

export interface Artboard {
    files: File[],
    isArtboard: boolean,
    name: string
}

export interface Document {
    artboards: Artboard[],
    name: string
}