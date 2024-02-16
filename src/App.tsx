import React from "react";
import "@department-of-veterans-affairs/component-library/dist/main.css";
import '@department-of-veterans-affairs/web-components'
import '@department-of-veterans-affairs/component-library/dist/react-bindings' 
import '@department-of-veterans-affairs/component-library'

import Sample from "./Sample";
function App() {
    return (<div>
        <h1>Hello React!</h1>
        <Sample />
    </div>)
}

export default App