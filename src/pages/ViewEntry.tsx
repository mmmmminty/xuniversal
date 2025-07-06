type Props = {
  type: string;
  title: string;
};

export default function ViewEntry({ type, title }: Props) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{type.toUpperCase()} - {title}</h1>
    </div>
  );
}
