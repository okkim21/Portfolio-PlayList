import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import PlayLists from "./components/playlist/PlayLists";
import SongLists from "./components/songlist/SongLists";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Header />
          <main>
            <Switch>
              <Route exact path="/">
                <h1>Wecome</h1>
              </Route>
              <Route exact path="/playlists/:id">
                <SongLists />
              </Route>
              <Route exact path="/playlists">
                <PlayLists />
              </Route>
            </Switch>
          </main>
        </Router>
      </div>
    </>
  );
}

export default App;
