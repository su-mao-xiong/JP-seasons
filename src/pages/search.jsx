import React, { useState } from 'react';
import { Outlet } from 'react-router';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      alert(`搜尋: ${searchQuery}`);
    }
  };

  const handlePageChange = (page) => {
    if (page === 'first') {
      alert('返回到第一頁');
      setCurrentPage(1);
    } else if (page === 'prev') {
      alert('返回到上一頁');
      setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
    } else if (page === 'next') {
      alert('前往下一頁');
      setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages);
    } else if (page === 'last') {
      alert('前往最後一頁');
      setCurrentPage(totalPages);
    }
  };

  const [data, setData] = useState([
    {
      image: "/JP-seasons/images/list_disney.png",
      title: "東京迪士尼",
      score: 5.0,
      description: "東京迪士尼是一個充滿魔法和歡樂的地方，適合各年齡層的遊客。園區內有多樣化的遊樂設施和精彩的表演，讓人流連忘返。無論是與家人還是朋友同行，都能在這裡度過美好的時光。記得提前規劃行程，善用快速通關卡，才能玩得更盡興！",
      link: "./disney.html"
    },
    {
        image: "/JP-seasons/images/list_osaka_castle.png",
        title: "大阪城",
        score: 4.8,
        description: "大阪城是日本三大名城之一，擁有壯觀的天守閣和豐富的歷史背景。城內展示了豐臣秀吉的相關史料，並且四季皆有美麗的景色，是大阪必訪的景點。",
        link: "./osaka_castle.html"
    },
    {
        image: "/JP-seasons/images/list_sensoji_temple.png",
        title: "清水寺",
        score: 4.8,
        description: "清水寺是京都最古老的寺院之一，擁有壯觀的木製建築和美麗的自然景觀。無論是春天的櫻花、夏天的綠意、秋天的紅葉，還是冬天的白雪，都讓人流連忘返。這裡的歷史和文化氛圍深深吸引著每一位訪客。",
        link: "./temple.html"
    },
    {
        image: "/JP-seasons/images/list_hokkaido.png",
        title: "北海道",
        score: 4.8,
        description: "北海道之旅讓我感受到四季的美麗。春天的櫻花、夏天的花海、秋天的楓紅和冬天的雪景，每一季都有不同的魅力。美食如海鮮丼和拉麵也讓人難忘。這次旅行讓我放鬆身心，並深刻體會到北海道的自然之美。",
        link: "./temple.html"
    },
    {
      image: "/JP-seasons/images/list_kyto.png",
      title: "京都",
      score: 4.8,
      description: "京都之旅讓我深刻體會到古都的魅力。嵐山的自然美景和清水寺的歷史氛圍讓人流連忘返。美食特別是京料理和抹茶甜點，讓人回味無窮。這次旅行不僅放鬆身心，也增進了對日本文化的了解。",
      link: "./universal.html"
    }
  ]);

  return (
    <>
      <div className="linear-bg">
        {/* 1. Top */}
        <header className="text-white search-container">
          <div>
            <div className="search-wrapper">
              <input
                type="text"
                className="search-input"
                id="search-input"
                placeholder="搜尋"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
              />
              <span className="material-symbols-outlined search-icon">search</span>
            </div>
            <div className="d-flex options-container">
              <ul className="options-list">
                <li>東京</li>
                <li>大阪</li>
                <li>滑雪</li>
                <li>京都</li>
                <li>東京迪士尼</li>
                <li>名古屋</li>
                <li>黑部立山</li>
                <li>淺草寺</li>
              </ul>
            </div>
          </div>
        </header>

        {/* 3. Main */}
        <div className="searchMain position-relative">
          <div className="aboutDecorate5 position-absolute">
            <img src="/JP-seasons/images/about-decorate3.png" alt="about-decorate3" />
          </div>
          <div className="aboutDecorate6 position-absolute">
            <img src="/JP-seasons/images/about-decorate3.png" alt="about-decorate3" />
          </div>
          <div className="container">
            <div className="item-list">
              <div className="text-end">
                <a className="sort-label text-nowrap" href="#">
                  按分數排序：由高到低
                </a>
              </div>

              {/* <!-- 排序標籤 --> */}
              {data.map((item, index) => (
                <div key={index} className="searchItem">
                  <img src={item.image} alt={item.title} />
                  <div className="item-content">
                    <div className="item-title">
                      {item.title}
                      <span className="item-score">{item.score}</span> 
                      <span className="material-symbols-outlined star-icon">star</span> 
                    </div>
                    <p className="item-description">{item.description}</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <a href={item.link}>
                        <div className="view-more">查看更多</div>
                      </a>
                      <a className="material-symbols-outlined heart-icon">favorite</a>
                    </div>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              <div className="pagination">
                <a className="page-button" onClick={() => handlePageChange('first')}>
                  <span className="material-symbols-outlined">first_page</span>
                </a>
                <a className="page-button" onClick={() => handlePageChange('prev')}>
                  <span className="material-symbols-outlined">chevron_left</span>
                </a>
                <span className="page-number">第 {currentPage} 頁</span>
                <a className="page-button" onClick={() => handlePageChange('next')}>
                  <span className="material-symbols-outlined">chevron_right</span>
                </a>
                <a className="page-button" onClick={() => handlePageChange('last')}>
                  <span className="material-symbols-outlined">last_page</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
