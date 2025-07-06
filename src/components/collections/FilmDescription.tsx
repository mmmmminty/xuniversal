import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { TypeFilmCollectionFields } from "../../content/auto";
import { Document } from "@contentful/rich-text-types";

export function FilmDescription({ collection }: { collection: TypeFilmCollectionFields }) {
  const info = {
    title: String(collection.title),
    date: new Date(collection.date as unknown as string),
    description: collection.description as unknown as Document,
    film: String(collection.film),
    camera: String(collection.camera),
    lenses: collection.lenses as unknown as string[],
    location: collection.location as unknown as Location,
    tags: collection.tags as unknown as string[],
    postProcessing: collection.postProcessing as unknown as Document,
    photographer: String(collection.photographer),
  }

  const monthName = info.date.toLocaleString('default', { month: 'long' }).toUpperCase();

  return (
    <>
      <div className="m-12 flex flex-col space-y-8 h-[70%]">
        <div className="text-3xl text-platinum">
          {info.title.toUpperCase()} | {monthName} {info.date.getFullYear()}
        </div>
        <div className="text-1xl text-platinum/70">
          {info.camera}, {info.film}, {info.lenses && `, ${info.lenses.map(lens => lens.toString()).join(", ")}`}
        </div>
        <div className="text-1xl text-platinum/70">
          {documentToReactComponents(info.description)}
        </div>
      </div>
      <div className="text-sm text-platinum/70 italic pt-auto ml-12">
        Taken by {info.photographer}
      </div>
    </>
  );
}

export default FilmDescription;
