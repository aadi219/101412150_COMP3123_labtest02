import { createContext } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

const ApiContext = createContext(API_KEY);

export default ApiContext
