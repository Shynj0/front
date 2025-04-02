import { createContext, useState } from "react"
import { LetterCtxProps } from "../types/Index.ts";
 
const LetterCtx = createContext<LetterCtxProps>({} as LetterCtxProps);
 
function LetterProvider({ children }: Props) {
  const [input, setInput] = useState<string>("")
 
  return <LetterCtx.Provider value={{ input, setInput }}>
    {children}
  </LetterCtx.Provider>
}
 
interface Props {
  children: React.ReactNode;
}
 
export { LetterCtx, LetterProvider };
 
 
