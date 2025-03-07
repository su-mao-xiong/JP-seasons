function Card({ cardName, cardDes, cardLink, image, className }) {
  return (
    <>
      <div className={className}>
        <div className="flex-item position-relative area">
          <a href={cardLink} className="w-100">
            <h2 className="position-absolute p-7 bg-white z-3 tab-area mb-0 fs-2 text-black">
              {cardName}
            </h2>
            <div className="cover w-100 h-100 position-absolute top-0 start-0 z-2">
              <div className="intro text-center position-absolute top-50 start-50 z-3 translate-middle">
                <h2 className="intro-area text-white">{cardName}</h2>
                <p className="intro-desc text-white">{cardDes}</p>
              </div>
            </div>
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet={`/images/${image}-m.png`}
              />
              <img className="w-100" src={`/images/${image}.png`} />
            </picture>
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
