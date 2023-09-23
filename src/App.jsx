import React, { Suspense, useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useNetwork } from "wagmi";

import AOS from "aos";
import "aos/dist/aos.css";

import Loading from "./componenets/Loading";
import Parent from "./componenets/Parent";
import Home from "./pages/Home";
import WhitePaper from "./pages/WhitePaper";
import BuyToken from "./pages/BuyToken";
import ContactUs from "./pages/ContactUs";
import { AppContext } from "./utils";
import NetworkSwitch from "./NetworkSwitch";

// import Explore from "./componenets/Explore";

AOS.init();
function App() {
  const { account } = useContext(AppContext);
  const [openNetworkSwitch, setOpenNetworkSwitch] = useState(false);
  const { chain } = useNetwork();

  useEffect(() => {
    if (account && chain && chain?.id !== 1) {
      setOpenNetworkSwitch(true);
    }
  }, [chain, account]);
  return (
    <div>
      <NetworkSwitch open={openNetworkSwitch} setOpen={setOpenNetworkSwitch} />
      <Suspense fallback={<Loading loading />}>
        <Routes>
          <Route path="/" element={<Parent />}>
            <Route index element={<Home />} />
            <Route path="/whitepaper" element={<WhitePaper />} />
            <Route path="howToBuy" element={<BuyToken />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="roamMap" element={<h1>Road Map</h1>} />
            <Route path="faq" element={<h1>Faq</h1>} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
export default App;
