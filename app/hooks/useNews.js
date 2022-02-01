import { useState, useEffect } from "react";
import React from "react";

import newsApi from "../api/newsapi";
const useNews = () => {
  const [featuredNews, setFeaturedNews] = useState({});
  const [oneBedroom, setoneBedroom] = useState([]);
  const [twoBedrooms, settwoBedrooms] = useState([]);
  const [threeBedrooms, setthreeBedrooms] = useState([]);
  const [fourBedrooms, setfourBedrooms] = useState([]);
  const qty = 5;
  const [loading, setLoading] = useState(false);

  const filterFeatured = (data) => {
    return data.filter((item) => item.featured === "on").reverse()[0];
  };

  const filterByCategory = (data, category) => {
    const result = data
      .filter((item) => item.category === category)
      .reverse()
      .splice(0, qty);

    if (result.length) {
      result.push({ type: "viewMore", category: category, id: category });
    }

    return result;
  };

  const filterMultipleNews = async () => {
    setLoading(true);
    const allNews = await newsApi.getAll();

    setFeaturedNews(filterFeatured(allNews));

    setoneBedroom(filterByCategory(allNews, "1 BedRoom"));
    settwoBedrooms(filterByCategory(allNews, "2 BedRooms"));
    setthreeBedrooms(filterByCategory(allNews, "3 BedRooms"));
    setfourBedrooms(filterByCategory(allNews, "4 Bedrooms"));
    setLoading(false);
  };

  useEffect(() => {
    filterMultipleNews();
  }, []);

  return [
    featuredNews,
    oneBedroom,
    twoBedrooms,
    threeBedrooms,
    fourBedrooms,
    loading,
  ];
};

export default useNews;
