import { ErrorObj } from "../types/types";
import { MdError } from "react-icons/md";

type ErrorPageType = {
	err: ErrorObj
}

 export default function ErrorPage({err}:ErrorPageType) {
	return (
	  <div className="font-sans flex flex-col items-center">
	  <MdError className="md:text-14xl  text-8xl text-gray-200 dark:text-gray-800"/>
		<h1 className="md:text-2xl  text-xl mb-10 dark:text-white">{err.title}</h1>
		<h2 className="md:text-xl  text-gray-500 text-left pl-4 mb-3">{err.message}</h2>
		<h2 className="md:text-xl  text-gray-500 text-left pl-4 mb-3">{err.resolution}</h2>

	  </div>
	);
  }
  