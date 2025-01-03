import { useState } from "react";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";

const App = () => {
  return(
    <div className="sections">
      <div>
        <LeftSection />
        </div>
        <div>
        <RightSection />
        </div>
    </div>
  )
}

export default App;