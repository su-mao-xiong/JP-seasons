import React from "react";
import { Outlet } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

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

        <section class="scroll-section py-6 bg-background">
          <div class="text-center">
            <button class="m-auto d-flex flex-column align-items-center gap-2 btn scroll-section-btn">
              <span>SCROLL</span>
              <i class="bi bi-chevron-down"></i>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Homepage;
