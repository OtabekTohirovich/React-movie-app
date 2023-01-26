import { useContext } from "react"
import { Context } from "../contex"
import "./app-info.css"
const AppInfo = () => {
  const { state } = useContext(Context)
  return (
    <div className="app-info">
      <p className="fs-3 text-uppercase">Barcha kinolar soni: {state.data.length}</p>
      <p className="fs-3 text-uppercase">Sevimli kinolar: {state.data.filter((data) => data.favourite).length}</p>
    </div>
  )
}

export default AppInfo

