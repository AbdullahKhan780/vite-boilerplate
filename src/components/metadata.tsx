interface MetadataProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function Metadata(props: MetadataProps) {
  return (
    <>
      <title>{props.title}</title>
      <meta name="description" content={props.description ?? "Darb Assabil is a logistic company."} />
    </>
  );
}
