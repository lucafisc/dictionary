type SynonymProps = {
  synonym: string;
};

export default function Definition({ synonym }: SynonymProps) {
  return (
    <>
      <p className="dark:text-white">{synonym}</p>
    </>
  );
}
