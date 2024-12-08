import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeAstroCollectionFields {
    photos: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.RichText;
    date: EntryFieldTypes.Date;
    photographer: EntryFieldTypes.Symbol;
    camera: EntryFieldTypes.Symbol;
    location?: EntryFieldTypes.Location;
    conditions?: EntryFieldTypes.Symbol;
    targets?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    bortle: EntryFieldTypes.Integer;
    software: EntryFieldTypes.Array<EntryFieldTypes.Symbol<"Deep Sky Stacker" | "Kstars/Ekos" | "Lightroom" | "NINA" | "PHD2" | "PIPP" | "Photoshop" | "PixInsight" | "SharpCap" | "Siril" | "StarNet" | "Topaz Denoise" | "Topaz Gigapixel" | "Topaz Sharpen">>;
    postProcessing?: EntryFieldTypes.RichText;
    tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    entries?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAstroEntrySkeleton | TypeFilmEntrySkeleton | TypePhotoEntrySkeleton>>;
}

export type TypeAstroCollectionSkeleton = EntrySkeletonType<TypeAstroCollectionFields, "astroCollection">;
export type TypeAstroCollection<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeAstroCollectionSkeleton, Modifiers, Locales>;

export interface TypeAstroEntryFields {
    photo: EntryFieldTypes.AssetLink;
    title: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    synopsis?: EntryFieldTypes.RichText;
    photographer?: EntryFieldTypes.Symbol;
    camera: EntryFieldTypes.Symbol;
    date: EntryFieldTypes.Date;
    location?: EntryFieldTypes.Location;
    conditions?: EntryFieldTypes.Symbol;
    telescopius?: EntryFieldTypes.Symbol;
    catalogId: EntryFieldTypes.Symbol;
    constellation?: EntryFieldTypes.Symbol;
    classification?: EntryFieldTypes.Symbol<"Bright Nebula" | "Dark Nebula" | "Emission Nebula" | "Galaxy" | "Globular Cluster" | "Open Cluster" | "Planetary Nebula" | "Reflection Nebula" | "Supernova Remnant">;
    iso?: EntryFieldTypes.Integer;
    fstop?: EntryFieldTypes.Symbol;
    exposure?: EntryFieldTypes.Symbol;
    focalLength?: EntryFieldTypes.Integer;
    backfocus?: EntryFieldTypes.Integer;
    rotation?: EntryFieldTypes.Integer;
    filter: EntryFieldTypes.Symbol<"None" | "Optolong L-Extreme">;
    lights?: EntryFieldTypes.Integer;
    darks?: EntryFieldTypes.Integer;
    flats?: EntryFieldTypes.Boolean;
    bias?: EntryFieldTypes.Boolean;
    nights?: EntryFieldTypes.Integer;
    bortle: EntryFieldTypes.Integer;
    integration?: EntryFieldTypes.Symbol;
    astrobin?: EntryFieldTypes.Symbol;
    telescope: EntryFieldTypes.Symbol<"NIKKOR 18-135mm" | "NIKKOR 50mm 1.8G" | "SVBony SV503 80ED">;
    guider: EntryFieldTypes.Symbol<"None" | "QHYCCD QHY5L-II M">;
    guidescope: EntryFieldTypes.Symbol<"None" | "SVBony SV165 30mm">;
    mount: EntryFieldTypes.Symbol<"Skywatcher EQM-35 Pro">;
    reducer: EntryFieldTypes.Symbol<"SVBony SV193 2-inch 0.8x">;
    software: EntryFieldTypes.Array<EntryFieldTypes.Symbol<"Deep Sky Stacker" | "Kstars/Ekos" | "Lightroom" | "NINA" | "PHD2" | "PIPP" | "Photoshop" | "PixInsight" | "SharpCap" | "Siril" | "StarNet" | "Topaz Denoise" | "Topaz Gigapixel" | "Topaz Sharpen">>;
    postProcessing?: EntryFieldTypes.RichText;
    tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

export type TypeAstroEntrySkeleton = EntrySkeletonType<TypeAstroEntryFields, "astroEntry">;
export type TypeAstroEntry<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeAstroEntrySkeleton, Modifiers, Locales>;

export interface TypeFilmCollectionFields {
    photos: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    title: EntryFieldTypes.Symbol;
    date: EntryFieldTypes.Date;
    description: EntryFieldTypes.RichText;
    photographer: EntryFieldTypes.Symbol;
    location?: EntryFieldTypes.Location;
    camera: EntryFieldTypes.Symbol;
    lenses?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    iso?: EntryFieldTypes.Integer;
    film: EntryFieldTypes.Symbol;
    format: EntryFieldTypes.Symbol<"120mm" | "35mm" | "5x4">;
    postProcessing?: EntryFieldTypes.RichText;
    tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    entries?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAstroEntrySkeleton | TypeFilmEntrySkeleton | TypePhotoEntrySkeleton>>;
}

export type TypeFilmCollectionSkeleton = EntrySkeletonType<TypeFilmCollectionFields, "filmCollection">;
export type TypeFilmCollection<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeFilmCollectionSkeleton, Modifiers, Locales>;

export interface TypeFilmEntryFields {
    photo: EntryFieldTypes.AssetLink;
    title: EntryFieldTypes.Symbol;
    date: EntryFieldTypes.Date;
    description: EntryFieldTypes.RichText;
    photographer: EntryFieldTypes.Symbol;
    location?: EntryFieldTypes.Location;
    camera: EntryFieldTypes.Symbol;
    lens?: EntryFieldTypes.Symbol;
    fstop?: EntryFieldTypes.Symbol;
    exposure?: EntryFieldTypes.Symbol;
    iso?: EntryFieldTypes.Integer;
    film: EntryFieldTypes.Symbol;
    format: EntryFieldTypes.Symbol<"120mm" | "35mm" | "5x4">;
    postProcessing?: EntryFieldTypes.RichText;
    tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

export type TypeFilmEntrySkeleton = EntrySkeletonType<TypeFilmEntryFields, "filmEntry">;
export type TypeFilmEntry<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeFilmEntrySkeleton, Modifiers, Locales>;

export interface TypePhotoCollectionFields {
    photos: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    title: EntryFieldTypes.Symbol;
    date: EntryFieldTypes.Date;
    description: EntryFieldTypes.RichText;
    photographer: EntryFieldTypes.Symbol;
    location?: EntryFieldTypes.Location;
    camera: EntryFieldTypes.Symbol;
    lenses?: EntryFieldTypes.Array<EntryFieldTypes.Symbol<"NIKKOR 18-105mm" | "NIKKOR 18-55mm" | "NIKKOR 50mm 1.8G">>;
    postProcessing?: EntryFieldTypes.RichText;
    tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    entries?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAstroEntrySkeleton | TypeFilmEntrySkeleton | TypePhotoEntrySkeleton>>;
}

export type TypePhotoCollectionSkeleton = EntrySkeletonType<TypePhotoCollectionFields, "photoCollection">;
export type TypePhotoCollection<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePhotoCollectionSkeleton, Modifiers, Locales>;

export interface TypePhotoEntryFields {
    photo: EntryFieldTypes.AssetLink;
    title: EntryFieldTypes.Symbol;
    date: EntryFieldTypes.Date;
    description: EntryFieldTypes.RichText;
    photographer: EntryFieldTypes.Symbol;
    location?: EntryFieldTypes.Location;
    camera: EntryFieldTypes.Symbol;
    lens?: EntryFieldTypes.Symbol<"NIKKOR 18-105mm" | "NIKKOR 18-55mm" | "NIKKOR 50MM 1.8G">;
    postProcessing?: EntryFieldTypes.RichText;
    tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    fstop?: EntryFieldTypes.Symbol;
    exposure?: EntryFieldTypes.Symbol;
    iso?: EntryFieldTypes.Integer;
}

export type TypePhotoEntrySkeleton = EntrySkeletonType<TypePhotoEntryFields, "photoEntry">;
export type TypePhotoEntry<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePhotoEntrySkeleton, Modifiers, Locales>;
