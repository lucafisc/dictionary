import { Link } from "react-router-dom";

type SynonymProps = {
  synonym: string;
};

export default function Definition({ synonym }: SynonymProps) {
  return (
    <>
      <Link to={"/definition/" + synonym}>
        <p className="md:text-xl pl-2 pr-2 font-bold text-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 active:text-white transition-all rounded-lg">{synonym}</p>
      </Link>
    </>
  );
}
