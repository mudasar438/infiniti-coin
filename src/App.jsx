import React, { Suspense, useState } from "react";
import { Loading } from "./smallComponents/Loading";
import Home from "./pages/Home";


function App() {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <Suspense fallback={<Loading loading={loading} />}>
        <Home />
      </Suspense>
    </div>
  );
}
export default App;
