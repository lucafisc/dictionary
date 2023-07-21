import React, { useEffect, useState } from "react";
import { Entry } from "../types/types";
import Word from "./Word";
import Info from "./Info";
import Source from "./Source";
import { useParams } from "react-router-dom";
import { ErrorObj } from "../types/types";
import ErrorPage from "./ErrorPage";
import { useNavigate } from "react-router-dom";


const WordPage = ({}) => {
	const [entry, setEntry] = useState<Entry>();

	let { search } = useParams();
	const navigate = useNavigate();
	useEffect(() => {
	  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
	  fetch(url)
		.then((response) => {
		  if (response.status === 404) {
			navigate("/error");
		  }
		  return response.json();
		})
		.then((data) => {
		  setEntry(data[0]);
		});
	}, [search]);

	if (!entry) {
		return <></>;
	}

	return (
    <>
      <Word entry={entry} />
      <Info entry={entry} />
      <Source sourceUrls={entry.sourceUrls} />
    </>
  );
};

export default WordPage;
