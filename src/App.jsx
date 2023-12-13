import React, { Suspense, useState } from "react";
import { Loading } from "./smallComponents/Loading";
import Home from "./pages/Home";
import { Container } from "@mui/material";
import Footer from "./smallComponents/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <div style={{ background: "#0C090E" }}>
      <Suspense fallback={<Loading loading={loading} />}>
        <Home />
        <Container>
          <Footer />
        </Container>
      </Suspense>
    </div>
  );
}
export default App;
