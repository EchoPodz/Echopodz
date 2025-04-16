import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import AccordionV1 from "../src/components/AccordionV1";
import Counter from "../src/components/Counter";
import VideoPopup from "../src/components/VideoPopup";
import Footer2 from "../src/layouts/footer/Footer-2";
import Header2 from "../src/layouts/headers/Header2";
import Layouts from "../src/layouts/Layouts";
import { brandSlider, serviceSliderActive } from "../src/sliderProps";

const Index2 = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layouts noFooter noHeader>
      {video && <VideoPopup close={setVideo} />}
      <Header2 />
  <img src="/assets/img/echopodz2.png"  />
  {/* <!-- Info Boxes --> */}

      {/* <!--====== End Hero Area ======--> */}

      {/* <!--====== Start Brands Slider Area ======--> */}
      <section className="brands-section">
        <div className="container p-t-85 p-b-85 border-bottom-primary">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h2
                className="brand-sectioin-title mb-4"
                style={{ fontSize: "5rem", fontWeight: "600" }}
              >
                WHY IT MATTERS?
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Brands Slider Area ======--> */}
      <div className="container-fluid container-1380">
        <div className="info-boxes-wrapper wow fadeInUp" data-wow-delay="0.4s">
          <div className="info-boxes">
            <div className="box-item">
              <div className="box-icon">
                <img
                  src="assets/img/icon/infobox-icon-1.png"
                  alt="info icon one"
                />
              </div>
              <div className="box-content">
                <h4 className="box-title">
                  Share Initiatives or Re-do others' actions
                </h4>
                <p>
                  Whether it is using a paper bag instead of a plastic bag,
                  biking or sharing a ride instead of taking your car, planting
                  a tree or cleaning a neighborhood, one action always counts
                  especially if shared. Innovate or get inspired! 
                </p>
              </div>
            </div>
            <div className="box-item">
              <div className="box-icon">
                <img
                  src="assets/img/icon/infobox-icon-1.png"
                  alt="info icon one"
                />
              </div>
              <div className="box-content">
                <h4 className="box-title">
                  Quantify your Impact, Win Rewards, and Engage in Challenges
                  and Discussions
                </h4>
                <p>
                  Track the Chain-Reactions impact, get Echocoins, Join Podz,
                  start Discussions and participate in Challenges. Be part of
                  a community of like-minded individuals and join a  movement of
                  continuous impact. 
                </p>
              </div>
            </div>
            <div className="box-item">
              <div className="box-icon">
                <img
                  src="assets/img/icon/infobox-icon-1.png"
                  alt="info icon one"
                />
              </div>
              <div className="box-content">
                <h4 className="box-title">
                  When in doubt, Go on a Discovery journey.
                </h4>
                <p>
                  Get connected to sustainability driven Businesses and
                  Solutions, as well as other ecosystem actors. Browse a list of
                  trusted partners or join their movements. Making more
                  eco-friendly choices is now one click away. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--====== Start About Section ======--> */}
      <section className="about-section p-t-130 p-b-130">
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-xl-8 col-lg-10 col-md-10">
        <div className="about-text">
          <div className="common-heading tagline-boxed-two title-line line-less-bottom m-b-40">
            <span className="tagline">About Us</span>
            <div className="preview-blob-image with-floating-icon m-b-md-100">
             
              <img src="assets/img/echoe2.png" alt="Image" />


            </div>
          </div>
          <p className="text-pullquote pullquote-secondary-color m-b-35">
            Sustainability is no longer about doing less harm. It’s about doing more good.
          </p>
          <p>
            EchoPodz is a sustainability-driven platform building a community of everyday heroes.
            Together, we can make a meaningful contribution one small thing at a time.
          </p>

          <a href="#" className="template-btn primary-bg-2 m-t-40">
            Learn More <i className="far fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* <!--====== End About Section ======--> */}

      {/* <!--====== Start Service With counter ======--> */}
      <div className="service-with-counter">
        {/* <!--====== Start Counter Section ======--> */}
        <section className="counter-section counter-section-bordered bordered-secondary-bg">
          <div className="container-fluid container-1420">
            <div className="counter-section-inner">
              <div className="row counter-items-v2">
                <div className="col-lg-3 col-sm-6">
                  <div className="counter-item white-color counter-left">
                    <div className="counter-wrap">
                      <Counter end="60" suffix="%" />
                      <span className="suffix">
                        <i className="far fa-percent"></i>
                      </span>
                    </div>
                    <p className="title">
                      Of global emissions stem from personal consumption
                      choices.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="counter-item white-color counter-left">
                    <div className="counter-wrap">
                      <Counter end="36" />
                      <span className="suffix">
                        <i className="far fa-percent"></i>
                      </span>
                    </div>
                    <p className="title">
                      Potential carbon footprint cut through behavior change
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="counter-item white-color counter-left">
                    <div className="counter-wrap">
                      <Counter end="88" />
                      <span className="suffix">
                        <i className="far fa-percent"></i>
                      </span>
                    </div>
                    <p className="title">
                      Of people want to live sustainably, but the
                      intention–action gap persists
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--====== End Counter Section ======--> */}

        {/* <!--====== Service Section Start ======--> */}
        {/* <!--====== Collaborate Section Start ======--> */}

        {/* <!--====== Collaborate Section End ======--> */}
        {/* <!--====== Service Section End ======--> */}
      </div>
      {/* <!--====== End Service With counter ======--> */}

      {/* <!--====== Start Team Section ======--> */}
      <section className="team-section team-masonry-section p-t-150 p-b-130">
        <div className="container">
          <div className="collaborate-text-block">
            <div className="common-heading title-line-bottom m-b-60">
              <div className="common-heading tagline-boxed-two title-line m-b-80">
                <span className="tagline">Our Approach</span>
                <h2 className="title">EchoPodz Means:</h2>
                <img
                  src="assets/img/particle/title-line-3.png"
                  alt="Image"
                  className="Line"
                />
              </div>
            </div>
            {/* <!-- Fancy Check List v1 --> */}
            <ul className="fancy-check-list-v2 color-heading-3 m-t-40">
              <li className="wow fadeInUp">
                <span className="list-inner">
                  A Buildup of Small Initiatives{" "}
                </span>
              </li>
              <li className="wow fadeInUp">
                <span className="list-inner">A Ripple Effect </span>
              </li>
              <li className="wow fadeInUp">
                <span className="list-inner">A Connected Community </span>
              </li>
              <li className="wow fadeInUp">
                <span className="list-inner">Measurable Impact!</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--====== End Team Section ======--> */}

      {/* <!--====== Start Faq With SEO score box ======--> */}
      {/* <!--====== End FAQ section ======--> */}

      {/* <!--====== Start Pricing Section ======--> */}

      <Footer2 />
    </Layouts>
  );
};

export default Index2;
