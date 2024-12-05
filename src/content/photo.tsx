import { AstroEntry } from "./astro";
import { FilmEntry } from "./film";

export interface PhotoEntry {
    photo: string; // Media file URL
    title: string;
    date: string;
    description: string;
    photographer: string;
    location?: { lat: number, lon: number };
    camera: string;
    lens?: string;
    postProcessing?: string;
    tags?: string[];
    fstop?: string; // Format: f/[1-2 digits].[1 digit]
    exposure?: string;
    iso?: number;
}

export interface PhotoCollection {
    photos: string[]; // Array of media file URLs
    title: string;
    date: string;
    description: string;
    photographer: string;
    location?: { lat: number, lon: number };
    camera: string;
    lenses?: string[];
    postProcessing?: string;
    tags?: string[];
    entries?: AstroEntry[] | FilmEntry[] | PhotoEntry[];
}
  