import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { TypeAstroEntryFields } from "../../content/auto";
import { Document } from "@contentful/rich-text-types";

export function AstroDescription({ entry }: { entry: TypeAstroEntryFields }) {
  const info = {
    title: String(entry.title),
    date: new Date(entry.date as unknown as string),
    description: entry.description as unknown as Document,
    camera: String(entry.camera),
    location: entry.location as unknown as Location,
    tags: entry.tags as unknown as string[],
    postProcessing: entry.postProcessing as unknown as Document,
    photographer: String(entry.photographer),
  };

  const monthName = info.date.toLocaleString('default', { month: 'long' }).toUpperCase();

  return (
    <>
      <div className="m-12 flex flex-col space-y-8 h-[70%]">
        <div className="text-3xl text-platinum">
          {info.title.toUpperCase()} | {monthName} {info.date.getFullYear()}
        </div>
        <div className="text-1xl text-platinum/70">
          {info.camera}
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

export default AstroDescription;
