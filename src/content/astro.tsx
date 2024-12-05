import { FilmEntry } from "./film";
import { PhotoEntry } from "./photo";

export interface AstroEntry {
    photo: string; // Media file URL
    title: string;
    description: string;
    photographer: string;
    camera: string;
    date: string; // ISO 8601 format
    location?: { lat: number, lon: number };
    conditions?: string;
    target: string;
    telescopius?: string;
    catalogId: string;
    constellation?: string;
    classification?: string;
    iso?: number;
    fstop?: string; // Format: f/[1-2 digits].[1 digit]
    exposure?: string;
    focalLength?: number;
    backfocus?: number;
    rotation?: number;
    filter: string;
    lights?: number;
    darks?: number;
    flats?: boolean;
    bias?: boolean;
    nights?: number;
    bortle: number;
    integration?: string;
    astrobin?: string;
    telescope: string;
    guider: string;
    guidescope: string;
    mount: string;
    reducer: string;
    software: string;
    postProcessing?: string;
    tags?: string[];
}

export interface AstroCollection {
    photos: string[]; // Array of media file URLs
    title: string;
    description: string;
    date: string;
    photographer: string;
    camera: string;
    location?: { lat: number, lon: number };
    conditions?: string;
    targets?: string[];
    bortle: number;
    software?: string[];
    postProcessing?: string;
    tags?: string[];
    entries?: AstroEntry[] | FilmEntry[] | PhotoEntry[];
}