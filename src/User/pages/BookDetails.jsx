import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { getBookByIdAPI } from "../../services/allApis";

function BookDetails() {
  useEffect(() => {
    handleGetBook;
  }, []);

  const { bid } = useParams();

  const handleGetBook = async () => {
    const response = await getBookByIdAPI(bid);
    console.log(response);
  };

  return (
    <>
      <Header />

      {/* Book Details */}
      <div className="min-h-[70vh] min-w-full">
        <div className="grid grid-cols-5">
          <div className="col-span-1"></div>
          <div className="col-span-4"></div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BookDetails;
