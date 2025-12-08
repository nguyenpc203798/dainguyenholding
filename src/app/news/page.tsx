"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/features/HeroSection";
import "./style.css";
import { newsItems } from "@/data/news";

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  const categories = ["Tất cả", "Dự án", "Tin tức", "Thị trường", "Sự kiện", "Công nghệ"];

  // Filter logic
  const filteredNews = selectedCategory === "Tất cả"
    ? newsItems
    : newsItems.filter((news) => news.category === selectedCategory);

  const handleCategoryClick = (category: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setSelectedCategory(category);
  };

  return (
    <MainLayout>
      <HeroSection breadcrumb="Tin tức" />

      {/* News Section */}
      <div className="section news-section">
        <div className="container">

          {/* Categories Filter */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="row news-categories-wrapper"
          >
            <div className="col-lg-12 text-center">
              <ul className="properties-filter news-categories">
                {categories.map((category) => (
                  <li key={category}>
                    <a
                      href="#"
                      className={selectedCategory === category ? "is_active" : ""}
                      onClick={(e) => handleCategoryClick(category, e)}
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* News Grid */}
          <div className="row news-grid">
            {filteredNews.length > 0 ? (
              filteredNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="news-item-wrapper"
                >
                  <div className="news-item">
                    {/* News Image */}
                    <div className="news-item-image-container">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="news-item-image"
                      />
                      <span className="category">
                        {news.category}
                      </span>
                    </div>

                    {/* News Content */}
                    <div className="news-item-content">
                      <div className="news-item-meta">
                        <span><i className="fa fa-calendar"></i> {news.date}</span>
                        <span><i className="fa fa-user"></i> {news.author}</span>
                      </div>
                      <h4 className="news-item-title">
                        <a href={`/news/${news.id}`}>
                          {news.title}
                        </a>
                      </h4>
                      <p className="news-item-excerpt">
                        {news.content}
                      </p>
                      <a href={`/news/${news.id}`} className="news-item-read-more">
                        Đọc thêm <i className="fa fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                className="col-lg-12 text-center news-empty-state"
              >
                <p className="news-empty-message">
                  Không có tin tức nào trong danh mục này.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
