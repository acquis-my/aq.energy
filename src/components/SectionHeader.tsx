interface SectionHeaderProps {
  header: string;
  subheader?: string;
  alt?: string;
}

export default function SectionHeader({
  header,
  subheader,
  alt,
}: SectionHeaderProps) {
  return (
    <div className="max-w-xl mx-auto mb-12 text-center">
      {!!alt ? (
        <div className="text-gray-600 mb-2 uppercase text-sm font-semibold">
          {alt}
        </div>
      ) : null}
      <h2 className="text-4xl font-semibold mb-4 capitalize">{header}</h2>
      {!!subheader ? <p className="text-gray-500">{subheader}</p> : null}
    </div>
  );
}
