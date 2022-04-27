import { createContext } from "react";

export const AppContext = createContext({
    empty: true,
    message: 'Haloo Text ini diambil di global state menggunakan Context'
})