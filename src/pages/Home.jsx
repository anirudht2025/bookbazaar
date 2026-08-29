import React, { useEffect, useState } from "react";
import Preloader from "../components/Preloader";

import Header from "../User/components/Header";
import Footer from "../User/components/Footer";

function Home() {
  const [loadStatus, setLoadStatus] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoadStatus(false), 2000);
  }, []);

  return (
    <>
      {loadStatus ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <div>Home</div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
