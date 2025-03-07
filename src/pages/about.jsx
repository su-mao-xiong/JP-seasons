
import React from "react"
import { Outlet } from "react-router"

function about() {
    return (<>
        <div class="aboutMain position-relative">
            <div class="aboutDecorate3 position-absolute">
                <img src="/images/about-decorate3.png" alt="about-decorate3" />
            </div>
            <div class="aboutDecorate4 position-absolute">
                <img src="/images/about-decorate3.png" alt="about-decorate3" />
            </div>
            <div class="container">
                <div class="aboutArea">
                    <div class="aboutTitle d-flex justify-content-center">
                        <img class="me-5" src="./images/about-base1.png" alt="base1" />
                        <div class="h2 me-5">關於我們</div>
                        <img src="/images/about-base1.png" alt="base1" />
                    </div>
                    <div class="aboutBanner d-lg-flex">
                        <img class="bannerImg" src="/images/about-main.jpg" alt="mainImg" />
                        <div class="bannerText d-flex flex-column justify-content-center">
                            <span class="mb-3 fs-5">我們是一支充滿創意和熱情的多元團隊,由來自五個不同領域的專業人士組成。我們在這次課程中相遇,因共同的興趣和目標而攜手合作,專注於完成這個介紹日本四季的旅遊網站專案。每位成員都帶來了獨特的視角和經驗,從技術開發到設計策劃,我們的合作無縫連接,讓網站在內容的豐富性和視覺的吸引力之間達到完美平衡。</span>
                            <span class="fs-5">我們希望通過這個網站,將日本四季的獨特魅力呈現給更多的旅行者,無論是春天的櫻花、夏天的花火、秋天的紅葉還是冬天的雪景,都能讓人感受到日本的自然之美和文化韻味。一起見證我們的努力成果吧!</span>
                        </div>
                    </div>
                    <div class="midArea d-flex justify-content-center">
                        <div class="markLine"></div>
                    </div>
                </div>
                {/* <!-- 安安兒名片 --> */}
                <div class="container aboutMember">
                    <div class="memberCard d-lg-flex p-36 position-relative">
                        <img class="aboutDecorate1 position-absolute" src="./images/about-decorate1.png" alt="decorate1" />
                        <div class="me-4">
                            <img class="memberImg" src="./images/about-us-1.png" alt="about-us-1" />
                        </div>
                        <div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="mb-4 fs-5">安安兒</div>
                            </div>
                            <p class="mb-0">團隊大腿/認真負責/目前任職於XX公司</p>
                            <p>最喜歡春天的日本,從東京的櫻花大道到京都的古老寺廟,處處彌漫著花香與生機。櫻花盛開,粉紅色花瓣飄舞,點綴在城市的每個角落。大阪的花園裡,新綠盎然,溫暖的陽光和柔和的氣候使這個季節成為探索自然美景和文化魅力的最佳時機。</p>
                        </div>
                    </div>
                    {/* <!-- 992px以上 阿蘇名片 --> */}
                    <div class="container d-flex justify-content-end">
                        <div class="memberCard2 d-lg-flex flex-row-reverse p-36 position-relative">
                            <img class="aboutDecorate2 position-absolute" src="./images/about-decorate2.png" alt="decorate2" />
                            <div class="ms-4">
                                <img class="memberImg" src="./images/about-us-3.png" alt="about-us-3" />
                            </div>
                            <div>
                                <div class="d-flex flex-row-reverse justify-content-between align-items-center">
                                    <div class="mb-4 text-end fs-5">阿蘇</div>
                                </div>
                                <p class="text-end mb-0">團隊大頭目/認真負責/目前任職於XX公司</p>
                                <p class="text-end">最喜歡夏天的日本，夏天的日本充滿了生氣和活力。東京的淺草花火大會、京都的祇園祭、以及沖繩的海灘,都吸引著眾多遊客。雖然炎熱的天氣帶來了濕氣,但清涼的祭典、美麗的花火和清澈的海水讓人倍感清爽。</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- 991px以下 阿蘇名片 --> */}
                    <div class="container d-lg-none position-relative">
                        <div class="memberCard  p-36">
                            <img class="aboutDecorate2 position-absolute" src="./images/about-decorate2.png" alt="decorate2" />
                            <div class="d-flex justify-content-end">
                                <div class="me-4">
                                    <img class="memberImg" src="./images/about-us-3.png" alt="about-us-3" />
                                </div>
                            </div>
                            <div>
                                <div class="d-flex fd-column justify-content-between align-items-center">
                                    <div class="mb-4 fs-5">阿蘇</div>
                                </div>
                                <p class="mb-0">團隊大頭目/認真負責/目前任職於XX公司</p>
                                <p>最喜歡夏天的日本，夏天的日本充滿了生氣和活力。東京的淺草花火大會、京都的祇園祭、以及沖繩的海灘,都吸引著眾多遊客。雖然炎熱的天氣帶來了濕氣,但清涼的祭典、美麗的花火和清澈的海水讓人倍感清爽。</p></div>
                        </div>
                    </div>
                    {/* <!-- Ho名片 --> */}
                    <div class="memberCard d-lg-flex p-36 position-relative">
                        <img class="aboutDecorate1 position-absolute" src="./images/about-decorate1.png" alt="decorate1" />
                        <div class="me-4">
                            <img class="memberImg" src="./images/about-us-4.png" alt="about-us-4" />
                        </div>
                        <div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="mb-4 fs-5">Ho</div>
                            </div>
                            <p class="mb-0">團隊技術長/認真負責/現職工程師，喜歡鑽研不同的技術，勇於嘗試</p>
                            <p>最喜歡秋天的日本被五彩斑斕的紅葉所裝點。京都的紅葉大道、東京的公園和北海道的山林,展示出壯觀的秋色。涼爽的氣候使得這個季節非常適合遠足和觀賞大自然的變遷,是品味美食和文化的好時機。</p>
                        </div>
                    </div>
                    {/* <!-- 992px以上 David名片 --> */}
                    <div class="container d-flex justify-content-end">
                        <div class="memberCard2 d-lg-flex flex-row-reverse p-36 position-relative">
                            <img class="aboutDecorate2 position-absolute" src="./images/about-decorate2.png" alt="decorate2" />
                            <div class="me-4">
                                <img class="memberImg" src="./images/about-us-5.png" alt="about-us-5" />
                            </div>
                            <div>
                                <div class="d-flex flex-row-reverse justify-content-between align-items-center">
                                    <div class="mb-4 text-end fs-5">David#33</div>
                                </div>
                                <p class="text-end mb-0">團隊顧問/認真負責/目前任職於XX公司/目前為後端工程師，勇於跨入前端領司</p>
                                <p class="text-end">最喜歡冬天的日本充滿了雪的魅力。北海道的滑雪勝地、京都的寒梅和東京的溫泉,都展現了冬季獨特的風情。寒冷的氣候讓人期待溫暖的溫泉,節日氣氛中充滿了傳統的慶祝和美味的冬季佳肴。</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- 991px以下 David名片 --> */}
                    <div class="container d-lg-none position-relative">
                        <div class="memberCard  p-36">
                            <img class="aboutDecorate2 position-absolute" src="./images/about-decorate2.png" alt="decorate2" />
                            <div class="d-flex justify-content-end">
                                <div class="me-4">
                                    <img class="memberImg" src="./images/about-us-5.png" alt="about-us-5" />
                                </div>
                            </div>
                            <div>
                                <div class="d-flex fd-column justify-content-between align-items-center">
                                    <div class="mb-4 fs-5">David#333</div>
                                </div>
                                <p class="mb-0">團隊顧問/認真負責/目前任職於XX公司/目前為後端工程師，勇於跨入前端領域</p>
                                <p>最喜歡冬天的日本充滿了雪的魅力。北海道的滑雪勝地、京都的寒梅和東京的溫泉,都展現了冬季獨特的風情。寒冷的氣候讓人期待溫暖的溫泉,節日氣氛中充滿了傳統的慶祝和美味的冬季佳肴。</p></div>
                        </div>
                    </div>
                    {/* <!-- Atien名片 --> */}
                    <div class="memberCard d-lg-flex p-36 position-relative">
                        <img class="aboutDecorate1 position-absolute" src="./images/about-decorate1.png" alt="decorate1" />
                        <div class="me-4">
                            <img class="memberImg" src="./images/about-us-2.png" alt="about-us-2" />
                        </div>
                        <div>
                            <div class="d-flex fd-column justify-content-between align-items-center">
                                <div class="mb-4 fs-5">atien0816</div>
                            </div>
                            <p class="mb-0">團隊小雜工/認真負責/目前任職於公家機關，挑戰往不同領域邁進</p>
                            <p>熱愛日本的每一個季節。春天,櫻花盛開,整個城市被粉紅色的花瓣裝點得如詩如畫。夏天,熱情的花火大會和清涼的海灘帶來無窮樂趣。秋天,紅葉如畫,京都和東京的美麗景色令人驚嘆。冬天,雪景迷人,滑雪場和溫泉讓寒冷的季節充滿溫暖和歡樂。每一季節都有獨特的魅力,使我深深喜愛這片土地。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Outlet />
    </>)
}




export default about