import { Link } from "react-router";

function HotArticle({ HotArticleList }) {
  return (
    <>
      {HotArticleList.map(({ author, photo, image, title, des, view, like,link }) => (
          <div className="article text-center" key={title}>
            <div className="d-flex align-items-center row gx-4">
              <div className="col-md-6 ">
                <div className="position-relative">
                  <div className="cover w-100 h-100 position-absolute top-0 start-0 z-2">
                    <div className="intro position-absolute ">
                      <div className="d-flex gap-3 align-items-center">
                        <img className="w-auto" src={`/images/${photo}.png`} />
                        <h4 className="intro-month text-white avatar fs-6 mb-0 ">
                          {author}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <picture>
                    <source
                      media="(max-width: 768px)"
                      srcSet={`/images/${image}-m.png`}
                    />
                    <img className="w-100" src={`/images/${image}.png`} />
                  </picture>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body d-flex gap-4 flex-column text-start p-5">
                  <h5 className="card-title fs-5 fw-bold">{title}</h5>
                  <div className="pb-3">
                    <p className="card-text">{des}</p>
                    <Link to={link}
                      className="btn btn btn-outline-primary rounded-pill py-3 px-6"
                    >
                      查看更多
                    </Link>
                  </div>
                  <div className="d-flex row">
                    <div className="col-2">
                      <i className="bi bi-eye-fill"></i>{" "}
                      <span className="text-black"> {view}</span>
                    </div>
                    <div className="col-2">
                      <i className="bi bi-suit-heart-fill text-danger"></i>
                      <span className="text-black">{like}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}
export default HotArticle;
