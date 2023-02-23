import Section from "./Section";
import { Entry } from "../types/types";

type InfoProps = {
  entry: Entry;
};

export default function Info({ entry }: InfoProps): JSX.Element {
  const sections = entry.meanings.map((meaningItem) => {
    return <Section meaningItem={meaningItem} />;
  });
  return <div className="flex flex-col items-start">{sections}</div>;
}
