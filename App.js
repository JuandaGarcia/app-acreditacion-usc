import React from "react";
import { NativeRouter, Switch, Route } from "react-router-native";
import Weeks from "./src/screens/Weeks";
import ScanQR from "./src/screens/ScanQR";
import Ranking from "./src/screens/Ranking";
import Layout from "./src/components/Layout";
import PreguntasSemana from "./src/screens/PreguntasSemana";

import Preguntas from "./src/models/preguntas/Preguntas";
var preguntas = new Preguntas();

alert(preguntas.buscarPorSemana(1)[13].title);

const App = () => {
  return (
    <NativeRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Weeks} />
          <Route exact path="/scan-qr" component={ScanQR} />
          <Route exact path="/ranking" component={Ranking} />
          <Route
            exact
            path="/preguntas-semana/:numero"
            component={PreguntasSemana}
          />
        </Switch>
      </Layout>
    </NativeRouter>
  );
};

export default App;
