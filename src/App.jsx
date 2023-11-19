import videos from "./database.js"
import Card from "./Card"

function App() {
  return (
    <div className="container">
      {videos.map((video) => (
        <Card key={video.id} video={video} />
      ))}
    </div>
  )
}

export default App
