import Section from "./Section";
import { Entry } from "../types/types";
const { v4: uuidv4 } = require('uuid');

type InfoProps = {
  entry: Entry;
};

export default function Info({ entry }: InfoProps): JSX.Element {
  const sections = entry.meanings.map((meaningItem) => {
    return <Section key={uuidv4()} meaningItem={meaningItem} />;
  });
  return <div className="flex flex-col items-start">{sections}</div>;
}
