import React from "react";
import { Outlet } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Card from "../componets/Card";

const attractionCard = [
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
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className="swiper-slide swiper-slide-1"></SwiperSlide>
            <SwiperSlide className="swiper-slide swiper-slide-2"></SwiperSlide>
            <SwiperSlide className="swiper-slide swiper-slide-3"></SwiperSlide>
          </Swiper>
        </section>

        <section className="scroll-section py-6 bg-background">
          <div className="text-center">
            <button className="m-auto d-flex flex-column align-items-center gap-2 btn scroll-section-btn">
              <span>SCROLL</span>
              <i className="bi bi-chevron-down"></i>
            </button>
          </div>
        </section>

        <section className="area-section bg-background ">
          <div className="container-xxxl m-auto">
            <div className="row g-7">
              {attractionCard.map(
                ({ cardName, cardDes, cardLink, image, className }) => (
                  <Card key={cardName}
                    cardName={cardName}
                    cardDes={cardDes}
                    cardLink={cardLink}
                    image={image}
                    className={className}
                  />
                )
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Homepage;
