import "./app-info.css"
const AppInfo = ({allMovie, favoriteMovie}) => {
  return (
    <div className="app-info">
      <p className="fs-3 text-uppercase">Barcha kinolar soni: {allMovie}</p>
      <p className="fs-3 text-uppercase">Sevimli kinolar: {favoriteMovie}</p>
    </div>
  )
}

export default AppInfo

