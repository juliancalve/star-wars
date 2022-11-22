import { useContext } from "react";

import { Navbar } from "./components";
import { Loader, Snackbar } from "./components/common";
import { planetsTransform } from "./utils/transforms/planets.transform";
import { getPlanets } from "./services/planets.service";
import { useFetch } from "./hooks";

import { StarWarsContext } from "./context/starWars.context";
import Router from "./Router/Router";
import GalaxyVideo from "./assets/videos/galaxy.mp4";
import "./App.scss";

const App = () => {
  const { isLoading, setPlanets, error } = useContext(StarWarsContext);
  const { resp } = useFetch({
    service: getPlanets,
    transform: planetsTransform,
    callback: () => {
      setPlanets(resp.planets);
    },
    callNow: true,
  });

  return (
    <div className="App">
      <Navbar />
      {isLoading && <Loader />}
      {error && <Snackbar message={error} />}
      <video
        className="App--background-video"
        autoPlay
        loop
        muted
        src={GalaxyVideo}
      />
      <Router />
    </div>
  );
};

export default App;
