import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { NavLink } from "react-router";


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
            <SwiperSlide className="swiper-slide" key={cardName}>
              <div className="card shadow" >
                <picture>
                  <source
                    media="(max-width: 768px)"
                    srcSet={`/images/${cardImg}-m.png`}
                  />
                  <img className="w-100" src={`/images/${cardImg}.png`} />
                </picture>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title">{cardName}</h5>
                    <button type="button" className="btn p-0 text-danger">
                      <i className="bi bi-suit-heart"></i>
                    </button>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="stars">
                      {[...Array(5)].map((star, i) => (
                        <button key={i}
                          type="button"
                          className="btn p-0 text-dark-yellow"
                        >
                          <i
                            className={`bi bi-star${i < rating ? "-fill" : ""}`}
                          ></i>
                        </button>
                      ))}
                    </div>
                    <NavLink to={cardLink} className="btn btn-link">
                        心得({reviews > 999 ? `999+` : reviews})
                    </NavLink>
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
