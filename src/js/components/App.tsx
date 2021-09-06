import * as React from "react"
import Dialog from "./Dialog"
import { HashRouter, Route } from "react-router-dom"
import Helmet from "react-helmet"

import NHSXProject from "./projects/Nhsx"
import HackneyProject from "./projects/HackneySocialCare"
import BeaconProject from "./projects/Beacon"

const App = () => (
  <>
    <Helmet>
      <title>Jaye Hackett</title>
    </Helmet>

    <HashRouter>
      <Route path="/nhsx-coronavirus" component={NHSXProject} />
      <Route path="/hackney-social-care" component={HackneyProject} />
      <Route path="/camden-beacon" component={BeaconProject} />
    </HashRouter>
  </>
)

export default App
