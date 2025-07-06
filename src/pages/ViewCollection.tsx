type Props = {
  title: string;
};

export function ViewCollection({ title }: Props) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      {/* your collection content */}
    </div>
  );
}

export default ViewCollection;
