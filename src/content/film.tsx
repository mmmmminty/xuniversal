import { AstroEntry } from "./astro";
import { PhotoEntry } from "./photo";

export interface FilmEntry {
    photo: string; // Media file URL
    title: string;
    date: string;
    description: string;
    photographer: string;
    location?: { lat: number, lon: number };
    camera: string;
    lens?: string;
    fstop?: string; // Format: f/[1-2 digits].[1 digit]
    exposure?: string;
    iso?: number;
    film: string;
    format: string;
    postProcessing?: string;
    tags?: string[];
}

export interface FilmCollection {
    photos: string[]; // Array of media file URLs
    title: string;
    date: string;
    description: string;
    photographer: string;
    location?: { lat: number, lon: number };
    camera: string;
    lenses?: string[];
    iso?: number;
    film: string;
    format: string;
    postProcessing?: string;
    tags?: string[];
    entries?: AstroEntry[] | FilmEntry[] | PhotoEntry[];
}