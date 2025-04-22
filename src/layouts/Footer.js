import Link from "next/link";
const Footer = () => {
  return (
    <footer className="template-footer">
      <div className="container">
        <div className="footer-widgets p-t-80 p-b-30">
          <div className="row">
            {/* <!-- Single Footer Widget --> */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget text-block-widget">
                <h5 className="widget-title">About Landio</h5>
                <p>
                  Sed ut perspiciatis undmnis iste natus error sit voluptatem
                  accusantium dolore udantiuy totam rem aperiam.
                </p>

                <ul className="social-links m-t-20">
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
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="d-lg-flex justify-content-center">
                <div className="widget nav-widget">
                  <h5 className="widget-title">Resources</h5>
                  <ul>
                    <li>
                      <Link href="/about">
                        Saas Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        Our Products
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        User Strategy
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        Blogs &amp; Guides
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                       Premium Support
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- Single Footer Widget --> */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="d-lg-flex justify-content-center">
                <div className="widget nav-widget">
                  <h5 className="widget-title">Company</h5>
                  <ul>
                    <li>
                      <Link href="/about">
                        About Landio
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        Contact &amp; Support
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                       Success History
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        Setting &amp; Privacy
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                      Company History
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- Single Footer Widget --> */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget pl-xl-5">
                <h5 className="widget-title">Download</h5>
                <ul>
                  <li className="m-b-10">
                    <Link href="/services" className="template-btn shadow-none">
                    
                        Apple Store <i className="fab fa-apple"></i>
                     
                    </Link>
                  </li>
                  <li>
                    <Link href="/services"className="template-btn bg-soft-grey-color">
                      
                        Google Play <i className="fab fa-google-play"></i>
                     
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-copyright border-top-primary">
          <div className="row align-items-center justify-content-between">
            <div className="col-sm-auto col-12">
              <div className="copyright-logo text-center text-sm-left">
                <img src="assets/img/logo-1.png" alt="Landio" />
              </div>
            </div>
            <div className="col-sm-auto col-12">
              <p className="copyright-text text-center text-sm-right pt-4 pt-sm-0">
                © {new Date().getFullYear()} <a href="#">Landio</a>. All Rights
                Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
