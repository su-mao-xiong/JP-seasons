import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function AttractionCard({AttractionCardList}) {
  return (
    <>
      <Swiper
        className="swiper card-swiper pb-5"
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{ clickable: true }}
        centeredSlides={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 5,
            centeredSlides: true,
          },
        }}
        loop={true}
        slidesPerView={5}
      >
        {AttractionCardList.map(
          ({ cardName, rating, cardLink, reviews, cardImg }) => (
            <SwiperSlide className="swiper-slide">
              <div class="card shadow">
                <picture>
                  <source
                    media="(max-width: 768px)"
                    srcSet={`/images/${cardImg}-m.png`}
                  />
                  <img class="w-100" src={`/images/${cardImg}.png`} />
                </picture>
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <h5 class="card-title">{cardName}</h5>
                    <button type="button" class="btn p-0 text-danger">
                      <i class="bi bi-suit-heart"></i>
                    </button>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="stars">
                      {[...Array(5)].map((star, i) => (
                        <button
                          type="button"
                          className="btn p-0 text-dark-yellow"
                        >
                          <i
                            className={`bi bi-star${i < rating ? "-fill" : ""}`}
                          ></i>
                        </button>
                      ))}
                    </div>
                    <button type="button" class="btn btn-link">
                      <a href={cardLink}>
                        心得({reviews > 999 ? `999+` : reviews})
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
}
export default AttractionCard;
