type Props = {
  title: string;
};

export function ViewEntry({ title }: Props) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      {/* your entry content */}
    </div>
  );
}

export default ViewEntry;
