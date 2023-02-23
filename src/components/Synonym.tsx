type SynonymProps = {
  synonym: string;
};

export default function Definition({ synonym }: SynonymProps) {
  return (
    <>
      <p className="pl-3 font-bold dark:text-purple-500">{synonym}</p>
    </>
  );
}
