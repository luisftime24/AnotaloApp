import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./routers/AppRouter"

export const NotesApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
