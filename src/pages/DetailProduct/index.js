import React, { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ProductSection from "./ProductSection";
import DescriptionSection from "./DescriptionSection";
import "./detail-product.css";
import { getCatalogById } from "../../utils/constant";
import { useParams } from "react-router-dom";
import Loading from "../../components/common/Loading";
import PageNotFound from "../../components/home/PageNotFound";

const DetailProduct = () => {
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams();
  useEffect(() => {
    // simulasi fetch best catalog
    setTimeout(() => {
      setItem(getCatalogById(id))
      setLoading(false)
    }, 5000)
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <Loading />
      </div>
    );
  }

  if (!item) {
    return <PageNotFound />
  }
  
  return (
    <>
      <Navbar />
      <ProductSection item={item} />
      <DescriptionSection />
      <Footer />
    </>
  );
  
};

export default DetailProduct;
