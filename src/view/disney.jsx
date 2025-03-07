import React from "react"
import {Outlet} from "react-router"
import {Base1} from "/images/about-base1.png"



function Disney() {
    return (
    <>
        
        
        <main className="mt-80">
    
    
            {/* intro */}
            <section className="view-intro">
            
            <div className="viewTitle d-flex justify-content-center">
                <img className="me-5" src={Base1} alt="base1" />
                <div className="h2 mb-1">東京迪士尼</div>
                <img src="/images/about-base1.png" alt="base1" />
            </div>
            <div className="container-xxl wave-bg mb-80">
                <div className="row d-flex align-items-center" style={{height: "500px"}}>
                <div className="col-md-6 order-md-1 order-1">
                    {/* 圖片輪播 */}
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner"> {/*  設定固定高度  */}
                        <div className="carousel-item active">
                            <img src="/images/article-1-m.png" className="d-block w-100" alt="..." style={{ objectFit: "cover", height: "100%" }} />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/view_disney.jpg" className="d-block w-100" alt="..." style={{ objectFit: "cover", height: "100%" }} />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/view_disney1.jpg" className="d-block w-100" alt="..." style={{ objectFit: "cover", height: "100%" }} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
                <div className="col-md-6 order-md-1 order-2 d-flex justify-content-center align-items-center">
                    <div className="">
                    <p className="mb-4 ">
                        東京迪士尼是一個充滿魔法和歡樂的地方，適合各年齡層的遊客。園區內有多樣化的遊樂設施和精彩的表演，讓人流連忘返。無論是與家人還是朋友同行，都能在這裡度過美好的時光。記得提前規劃行程，善用快速通關卡，才能玩得更盡興！
                    </p>
                    <div className="mb-4">{/* tags */}
                        <span className="btn btn-outline-dark-tag btn-dark-tag rounded-5 px-6 py-3 text-white">東京</span>
                        <span className="btn btn-outline-dark-tag btn-dark-tag rounded-5 px-6 py-3 text-white">關東</span>
                        <span className="btn btn-outline-dark-tag btn-dark-tag rounded-5 px-6 py-3 text-white">遊樂園</span>
                    </div>
                    
                    {/* 按鈕 */}
                    <div className="d-flex gap-3">
                        <button type="button" className="btn btn-outline-primary btn-background rounded-5 px-6 py-3 text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
                        </svg>
                        訂閱電子報</button>
                        <button type="button" className="btn btn-outline-primary btn-background rounded-5 px-6 py-3 text-primary">收藏</button>
                    </div>
                    </div>
                    
                </div>
                </div>
            </div>
            </section>

            {/* goooglemap */}
            <section className="map">
            <div className="container-xxl mb-80">
                <div className="ratio ratio-16x9">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.7902762978356!2d139.87563069678953!3d35.632896400000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60187d03114737b3%3A0xe4d93636d509d3cb!2z5p2x5Lqs6L-q5aOr5bC85qiC5ZyS!5e0!3m2!1szh-TW!2stw!4v1730475343359!5m2!1szh-TW!2stw" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            </section>

            {/* comment&tools */}
            <section className="comment">
            <div className="container-xxl mb-80">
                <div className="row justify-content-between">
                <div className="from col-md-8 order-md-1 order-1">
                    <h3 className="text-start pm-4">景點評論  5.0 <img src="/images/star-Icon.png" alt="星星" /></h3>
                    <div className="row align-items-start">
                    {/*  大頭照  */}
                    <div className="head col-md-2 col-3 d-flex flex-column align-items-center">
                        <img className="commentImg profile-img me-3" src="/images/about-us-4.png" alt="davi#333的頭像" />
                        <h5 className="mb-1 text-center">小羊</h5>
                    </div>
                    {/*  留言區  */}
                    <form action="" className="col-md-10 col-9">
                        <div className="mb-1">
                        <input type="text" className="form-control bg-transparent" id="comment" placeholder="發表留言" />
                        </div>
                        <div className="d-flex justify-content-end">
                        <button type="button" className="btn btn-primary rounded-5 px-4 py-2 text-white">留言</button>
                        </div>
                    </form>
                    </div>
                    <div className="border-top my-5"></div>{/* 分隔線 */}
                    {/* 留言內容 */}
                    <div className="row">
                    <div className="col-12">
                        {/*  第一則評論  */}
                        <div className="d-flex align-items-center mb-4">
                        <div className="me-4">
                            <img className="commentImg profile-img me-3" src="/images/about-us-1.png" alt="王大明的頭像" />
                            <h5 className="mb-1">王翔明</h5>
                        </div>
                        <div className="">
                            <p className="mb-0">適合帶小孩來玩</p>
                            <div className="mb-1">
                                <span className="review-star"><img src="/images/star-Icon.png" alt="星星" /><img src="/images/star-Icon.png" alt="星星" /><img src="/images/star-Icon.png" alt="星星" /><img src="/images/star-Icon.png" alt="星星" /><img src="/images/star-Icon.png" alt="星星" /></span>
                            </div>
                        </div>
                        </div>

                        {/*  第二則評論  */}
                        <div className="d-flex align-items-center mb-4">
                        <div className="me-4">
                            <img className="commentImg profile-img me-3" src="/images/about-us-2.png" alt="蘇大明的頭像" />
                            <h5 className="mb-1">蘇大明</h5>
                        </div>
                        <div>
                            <p className="mb-0">建議大家要去的時候如果想要去的話可以買快速通關的門票</p>
                            <div className="mb-2">
                                <span className="review-star"><img src="/images/star-Icon.png" alt="星星" /><img src="/images/star-Icon.png" alt="星星" /><img src="/images/star-Icon.png" alt="星星" /><img src="/images/star-Icon.png" alt="星星" /><img src="/images/star-Icon.png" alt="星星" /></span>
                            </div>
                        </div>
                        </div>

                        {/*  第三則評論  */}
                        <div className="d-flex align-items-center mb-4">
                        <div className="me-4">
                            <img className="commentImg profile-img me-3" src="/images/about-us-3.png" alt="謝小華的頭像" />
                            <h5 className="mb-1">王曉華</h5>
                        </div>
                        <div>
                            <p className="mb-0">要記得待到晚上，這樣才可以看到煙火，每天都會放</p>
                            <div className="mb-2">
                                <span className="review-star" />
                                    <img src="/images/star-Icon.png" alt="星星" />
                                    <img src="/images/star-Icon.png" alt="星星" />
                                    <img src="/images/star-Icon.png" alt="星星" />
                                    <img src="/images/star-Icon.png" alt="星星" />
                                    <img src="/images/star-Icon.png" alt="星星" />
                                
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
        
                </div>
                <div className="tools col-md-2 order-md-2 order-2">
                    <h3 className="text-center pb-4">實用工具</h3>
                    {/* 行動天氣 */}
                    <a href="#">
                    <div className="tool-link">
                        <img src="/images/weather.png" alt="雪人"></img>
                        <p className="text-center mb-2">行動天氣</p>
                        
                    </div>
                    </a>
                    
                    {/* 算幣達人 */}
                    <a href="#">
                    <div className="tool-link">
                        <img src="/images/money.png" alt="錢"></img>
                        <p className="text-center">算幣達人</p>
                        
                    </div>
                    </a>
                    {/* 食徑尋味 */}
                    <a href="#">
                    <div className="tool-link">
                        <img src="/images/food.png" alt="食物"></img>
                        <p className="text-center">食徑尋味</p>
                        
                    </div>
                    </a>
                    {/* 近觀勝跡 */}
                    <a href="#">
                    <div className="tool-link">
                        <img src="/images/tourist.png" alt="富士山"></img>
                        <p className="text-center">近觀勝跡</p>
                    
                    </div>
                    </a>
                </div>
                </div>
            </div>
            
            </section>
            
        </main>


 

        <script type="module" src="../main.js"></script>

        <Outlet />
    </>
    );
}



export default Disney