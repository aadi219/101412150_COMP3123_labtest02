import { createContext } from "react";

// coming from .env file in root of project, file is gitignored.
const API_KEY = process.env.REACT_APP_API_KEY;

const ApiContext = createContext(API_KEY);

export default ApiContext
