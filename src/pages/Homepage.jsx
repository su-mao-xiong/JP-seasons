import React from "react";
import { Outlet } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import RegionCard from "../componets/RegionCard";
import AttractionCard from "../componets/AttractionCard";
import HotArticle from "../componets/HotArticle";

const regionCardList = [
  {
    cardName: "北海道",
    cardDes:
      "北海道是日本最北的島嶼，以壯麗的自然景觀、滑雪場、薰衣草田和海鮮著稱。札幌市的雪祭和美食也是遊客熱愛的特色。",
    cardLink: "#",
    image: "attraction-1",
    className: "col-6",
  },
  {
    cardName: "關東",
    cardDes:
      "日本關東地區是以首都東京都為中心,加上周圍的6個縣茨城、栃木、群馬、埼玉、千葉、神奈川的1都6縣所組成。",
    cardLink: "#",
    image: "attraction-2",
    className: "col-6",
  },
  {
    cardName: "東北",
    cardDes:
      "東北位於日本本州北部，以自然風光如櫻花、溫泉和滑雪場著稱。著名景點包括松島、青森的弘前城以及藏王的雪怪。",
    cardLink: "#",
    image: "attraction-3",
    className: "col-6 col-md-4",
  },
  {
    cardName: "近畿",
    cardDes:
      "近畿位於日本中部，以歷史文化和古都京都、奈良著名。大阪、神戶提供現代都市風情，和歌山的自然美景也吸引遊客。",
    cardLink: "#",
    image: "attraction-4",
    className: "col-6 col-md-4",
  },
  {
    cardName: "四國",
    cardDes:
      "四國是日本的第四大島，以遍布的寺廟朝聖路線、德島的阿波舞、香川的烏龍麵和壯麗的瀨戶內海景觀聞名。",
    cardLink: "#",
    image: "attraction-6",
    className: "col-6 col-md-4",
  },
  {
    cardName: "中部",
    cardDes:
      "日本中部地區位於本州島中段，包括愛知縣、岐阜縣、長野縣等地，擁有豐富的歷史遺產、自然景觀和美食文化，吸引不少遊客來此探索。",
    cardLink: "#",
    image: "attraction-6",
    className: "col-6 col-md-4",
  },
  {
    cardName: "中國",
    cardDes:
      "日本中國地區位於本州南部，包括廣島縣、岡山縣、山口縣等，擁有悠久的歷史和文化遺產，以及美麗的自然景觀和海岸線，吸引許多遊客來此體驗。",
    cardLink: "#",
    image: "attraction-7",
    className: "col-6 col-md-4",
  },
  {
    cardName: "九州",
    cardDes:
      "日本九州位於西南部，包括福岡縣、長崎縣、熊本縣等，擁有豐富多元的文化、溫泉和美食。風景優美，吸引眾多遊客前往探索。",
    cardLink: "#",
    image: "attraction-8",
    className: "col-6 col-md-4",
  },
];

const attractionCardList = [
  {
    cardName: "東京迪士尼",
    rating: 5,
    cardLink: "#",
    reviews: 1000,
    cardImg: "disney",
  },
  {
    cardName: "東京鐵塔",
    rating: 5,
    cardLink: "#",
    reviews: 439,
    cardImg: "tokyo-tower",
  },
  {
    cardName: "淺草寺",
    rating: 4,
    cardLink: "#",
    reviews: 339,
    cardImg: "temple",
  },
  {
    cardName: "晴空塔",
    rating: 3,
    cardLink: "#",
    reviews: 339,
    cardImg: "sky-tower",
  },
  {
    cardName: "環球影城",
    rating: 3,
    cardLink: "#",
    reviews: 379,
    cardImg: "universal",
  },
  {
    cardName: "富士山",
    rating: 4,
    cardLink: "#",
    reviews: 679,
    cardImg: "fuji",
  },
];

const hotArticleList = [
  {
    author: "John Lee",
    photo: "avatar-1",
    image: "article-1",
    title: "東京迪士尼",
    des: "剛從東京迪士尼回來,整個人還沉浸在那夢幻的氛圍中!真的是一次難忘的體驗。入園的那一刻起,就感覺自己彷彿置身於一個完全不同的世界。每個角落都經過精心設計,充滿了迪士尼的魔法。",
    view: 890,
    like: 768,
    link: "",
  },
  {
    author: "Emma Huang",
    photo: "avatar-2",
    image: "article-2",
    title: "晴空塔",
    des: "最讓我印象深刻的是玻璃地板區。站在透明的玻璃上,腳下就是350米的高空,那種刺激感真的無法用言語形容。我朋友差點不敢走上去,最後我們拉著手一起踏上去的,留下了超棒的照片。",
    view: 987,
    like: 786,
    link: "",
  },
  {
    author: "Andy Wu",
    photo: "avatar-3",
    image: "article-3",
    title: "淺草寺",
    des: "淺草寺是東京的歷史地標,充滿了傳統文化與美食。走在仲見世街上感受古風,祈求平安,心情愉快!",
    view: 560,
    like: 455,
    link: "",
  },
];

const scrollToArea = () => {
    const secondSection = document.querySelector('.area-section');
    const headerHeight = 85;
    const sectionPosition = secondSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
  
    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
    });
  
}
function Homepage() {
  return (
    <>
      <main className="homepage">
        <section className="hero-images">
          <div className="container-xxl position-relative">
            <div className="position-absolute top-0 start-0 z-2 w-100">
              <form>
                <div className="mb-3 d-flex flex-column gap-4 px-7">
                  <h1 className="bg-white text-black text-center fs-1 p-7 align-self-start">
                    日本趣哪玩
                  </h1>

                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm rounded-0 border-white "
                      placeholder="搜尋"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn btn-outline-secondary bg-white rounded-0 border-white "
                      type="submit"
                      id="button-addon2"
                    >
                      <i className="bi bi-search "></i>
                    </button>
                  </div>
                  <div className="d-flex gap-3">
                    <button
                      type="button"
                      className="btn btn-white rounded-pill opacity-80 opacity-hover-100"
                    >
                      晴空塔
                    </button>
                    <button
                      type="button"
                      className="btn btn-white rounded-pill opacity-80 opacity-hover-100"
                    >
                      東京迪士尼
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <Swiper
            className="swiper banner"
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 1200,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            slidesPerView={1}
          >
            <SwiperSlide className="swiper-slide swiper-slide-1"></SwiperSlide>
            <SwiperSlide className="swiper-slide swiper-slide-2"></SwiperSlide>
            <SwiperSlide className="swiper-slide swiper-slide-3"></SwiperSlide>
          </Swiper>
        </section>

        <section className="scroll-section py-6 bg-background">
          <div className="text-center" onClick={scrollToArea}>
            <button className="m-auto d-flex flex-column align-items-center gap-2 btn scroll-section-btn" >
              <span>SCROLL</span>
              <i className="bi bi-chevron-down"></i>
            </button>
          </div>
        </section>

        <section className="area-section bg-background ">
          <div className="container-xxxl m-auto">
            <div className="row g-7">
              <RegionCard RegionCardList={regionCardList} />
            </div>
          </div>
        </section>

        <section className="seasons-section bg-background py-120">
          <div className="container-xxl ">
            <h3 className="text-black fw-bold fs-2 d-flex justify-content-center gap-8 mb-5">
              <img src="/images/fan.png" />
              玩轉四季
              <img src="/images/fan.png" />
            </h3>
            <div className="row g-7">
              <div className="col-sm-6 col-lg-3">
                <div className="flex-item position-relative season overflow-hidden">
                  <div className="cover w-100 h-100 position-absolute top-0 start-0 z-2 p-7">
                    <a
                      href="javascript:;"
                      className="link-underline link-underline-opacity-0 h-100"
                    >
                      <div className="d-flex flex-column justify-content-between h-100 ">
                        <div className="intro ">
                          <h3 className="intro-month text-white fs-3">3~5月</h3>
                          <p className="intro-desc text-white fs-5">
                            溫和宜人，氣溫逐漸回暖。
                          </p>
                        </div>
                        <h2 className="text-white mb-0 fs-1 season-tab">春</h2>
                      </div>
                    </a>
                  </div>
                  <img className="w-100" src="/images/spring.png" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="flex-item position-relative season overflow-hidden">
                  <div className="cover w-100 h-100 position-absolute top-0 start-0 z-2 p-7">
                    <a
                      href="javascript:;"
                      className="link-underline link-underline-opacity-0 h-100"
                    >
                      <div className="d-flex flex-column justify-content-between h-100 ">
                        <div className="intro ">
                          <h3 className="intro-month text-white fs-3">6~8月</h3>
                          <p className="intro-desc text-white fs-5">
                            炎熱潮濕，7、8月最熱。
                          </p>
                        </div>
                        <h2 className="text-white mb-0 fs-1 season-tab">夏</h2>
                      </div>
                    </a>
                  </div>
                  <img className="w-100" src="/images/summer.png" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="flex-item position-relative season overflow-hidden">
                  <div className="cover w-100 h-100 position-absolute top-0 start-0 z-2 p-7">
                    <a
                      href="javascript:;"
                      className="link-underline link-underline-opacity-0 h-100"
                    >
                      <div className="d-flex flex-column justify-content-between h-100 ">
                        <div className="intro ">
                          <h3 className="intro-month text-white fs-3">
                            9~11月
                          </h3>
                          <p className="intro-desc text-white fs-5">
                            涼爽舒適，天氣晴朗
                          </p>
                        </div>
                        <h2 className="text-white mb-0 fs-1 season-tab">秋</h2>
                      </div>
                    </a>
                  </div>
                  <img className="w-100" src="/images/autumn.png" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="flex-item position-relative season overflow-hidden">
                  <div className="cover w-100 h-100 position-absolute top-0 start-0 z-2 p-7">
                    <a
                      href="javascript:;"
                      className="link-underline link-underline-opacity-0 h-100"
                    >
                      <div className="d-flex flex-column justify-content-between h-100 ">
                        <div className="intro ">
                          <h3 className="intro-month text-white fs-3">
                            12~2月
                          </h3>
                          <p className="intro-desc text-white fs-5">
                            寒冷乾燥，北部和山區有大量降雪。
                          </p>
                        </div>
                        <h2 className="text-white mb-0 fs-1 season-tab">冬</h2>
                      </div>
                    </a>
                  </div>
                  <img className="w-100" src="/images/winter.png" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tourist-spot-section position-relative py-120">
          <h3 className="text-black fw-bold fs-2 d-flex justify-content-center gap-8 mb-5">
            <img src="/images/fan.png" />
            人氣景點
            <img src="/images/fan.png" />
          </h3>
          <AttractionCard AttractionCardList={attractionCardList} />
        </section>

        <section className="article-section position-relative py-120">
          <div className="container-xxl ">
            <h3 className="text-black fw-bold fs-2 d-flex justify-content-center gap-8 mb-5">
              <img src="/images/fan.png" />
              熱門文章
              <img src="/images/fan.png" />
            </h3>
            <div className="d-flex flex-column">
              <HotArticle HotArticleList={hotArticleList} />
            </div>
          </div>
        </section>

        <section className="tools-section py-120">
      <div className="container-xxl ">
        <h3 className="text-black fw-bold fs-2 d-flex justify-content-center gap-8 mb-5">
          <img src="/images/fan.png"/>
          旅遊神器
          <img src="/images/fan.png"/>
        </h3>
        <div className="row g-7">
          <div className="col-sm-6 col-lg-3">
            <a className="link-underline link-underline-opacity-0" href="javascript:;">
              <div className="tool bg-white py-4 px-10">
                <div className="d-flex flex-column">

                  <img className="w-100" src="/images/weather.png"/>
                  <h3 className="text-black mb-0 fs-4 tool-tab text-center">行動天氣通</h3>

                </div>
              </div>
            </a>
          </div>
          <div className="col-sm-6 col-lg-3">
            <a className="link-underline link-underline-opacity-0" href="javascript:;">
              <div className="tool bg-white py-4 px-10">
                <div className="d-flex flex-column">
                  <img className="w-100" src="/images/money.png"/>
                  <h3 className="text-black mb-0 fs-4 tool-tab text-center">幣算達人</h3>

                </div>
              </div>
            </a>
          </div>
          <div className="col-sm-6 col-lg-3">
            <a className="link-underline link-underline-opacity-0" href="javascript:;">
              <div className="tool bg-white py-4 px-10">
                <div className="d-flex flex-column">
                  <img className="w-100" src="/images/food.png"/>
                  <h3 className="text-black mb-0 fs-4 tool-tab text-center">食徑尋味</h3>

                </div>
              </div>
            </a>
          </div>
          <div className="col-sm-6 col-lg-3">
            <a className="link-underline link-underline-opacity-0" href="javascript:;">
              <div className="tool bg-white py-4 px-10">
                <div className="d-flex flex-column">
                  <img className="w-100" src="/images/tourist.png"/>
                  <h3 className="text-black mb-0 fs-4 tool-tab text-center">近觀勝跡</h3>

                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>

    <section className="about-us-section py-120">
      <div className="container-xxl ">
        <div className="text-center mb-5">
          <h3 className="text-black fw-bold fs-2 d-flex justify-content-center gap-8">
            <img src="/images/fan.png"/>
            關於我們
            <img src="/images/fan.png"/>
          </h3>
          <p className="text-dark-yellow">我們是一群熱愛旅遊＆編碼的小夥伴</p>
        </div>
   
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 ">
          <div className="col">
            <div className="about-us p-4">
              <div className="d-flex flex-column gap-3">
                <img className="w-auto" src="/images/about-us-1.png"/>
                <h4 className="text-black mb-0 fs-5 tool-tab text-center">安安兒</h4>
              </div>
            </div>

          </div>
          <div className="col">
            <div className="about-us p-4">
              <div className="d-flex flex-column gap-3">
                <img className="w-auto" src="/images/about-us-2.png"/>
                <h4 className="text-black mb-0 fs-5 tool-tab text-center">atien0816</h4>

              </div>
            </div>

          </div>
          <div className="col">
            <div className="about-us p-4">
              <div className="d-flex flex-column gap-3">
                <img className="w-auto" src="/images/about-us-3.png"/>
                <h4 className="text-black mb-0 fs-5 tool-tab text-center">阿蘇</h4>

              </div>
            </div>

          </div>
          <div className="col">
            <div className="about-us p-4">
              <div className="d-flex flex-column gap-3">
                <img className="w-auto" src="/images/about-us-4.png" />
                <h4 className="text-black mb-0 fs-5 tool-tab text-center">Ho</h4>

              </div>
            </div>

          </div>
          <div className="col">
            <div className="about-us p-4">
              <div className="d-flex flex-column gap-3">
                <img className="w-auto" src="/images/about-us-5.png" />
                <h4 className="text-black mb-0 fs-5 tool-tab text-center">David#333</h4>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
      </main>
    </>
  );
}

export default Homepage;
