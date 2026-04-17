import {
  HashRouter,
  BrowserRouter
} from "react-router-dom"

const isElectron = window?.electronAPI != null

const Router = isElectron ? HashRouter : BrowserRouter

export default function AppRouter() {
  return (
    <Router>
      {/* routes */}
    </Router>
  )
}