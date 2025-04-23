import Link from "next/link";
const Footer2 = ({ extraClass }) => {
  return (
    <footer
      className={`${
        extraClass
          ? extraClass
          : "template-footer bg-primary-color-2 footer-white-color"
      }`}
    >
      <div className="container">
        <div className="footer-widgets p-t-80 p-b-30">
          <div className="row">
            {/* <!-- Single Footer Widget --> */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget text-block-widget">
                <h5 className="widget-title">About Echopodz</h5>
                <p>
                  EchoPodz is a sustainability-driven platform building a
                  community of everyday heroes. Together, we can make a
                  meaningful contribution one small thing at a time.
                </p>

                <ul className="social-links bordered-style m-t-20">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-behance"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Single Footer Widget --> */}

            {/* <!-- Single Footer Widget --> */}

            {/* <!-- Single Footer Widget --> */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget contact-widget pl-xl-5">
                <h5 className="widget-title">Contact Us</h5>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fal fa-map-marker-alt"></i>
                      Tunis , Tunisia
                    </a>
                  </li>
                  <li>
                    <a href="mailto:zayneb.masmoudi@echopodz.com">
                      <i className="fal fa-envelope-open-text"></i>
                      zayneb.masmoudi@echopodz.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+01234567899">
                      <i className="fal fa-phone"></i>
                      + Phone Avaialble Soon
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright border-top-off-white">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-sm-auto col-12">
              <div className="copyright-logo text-center text-sm-left">
                <img src="assets/img/logo.png" alt="Landio" />
              </div>
            </div>
            <div className="col-sm-auto col-12">
              <p className="copyright-text text-center text-sm-right pt-4 pt-sm-0">
                © 2025 <a href="#">Echopodz</a>. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
