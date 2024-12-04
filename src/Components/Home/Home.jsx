import React, { Component, Fragment } from "react";
import styles from "./home.module.css";
import img from "../../assets/download (1).jfif";

export default class Home extends Component {
  render() {
    const rows = [];
    for (let i = 0; i < techTracks.length; i += 3) {
      rows.push(techTracks.slice(i, i + 3));
    }
    const stats = [
      {
        icon: 'fa-solid fa-user-tie',
        number: '800,000',
        label: 'Employers Worldwide'
      },
      {
        icon: 'fa-solid fa-file-invoice-dollar',
        number: '1 Million',
        label: 'Paid Invoices'
      },
      {
        icon: 'fa-solid fa-hand-holding-dollar',
        number: '$250 Million',
        label: 'Paid to Freelancers'
      },
      {
        icon: 'fa-regular fa-face-smile-beam',
        number: '99%',
        label: 'Customer Satisfaction Rate'
      }
    ];
    return (
      <Fragment>
        <div id="home" className={`${styles.home}`}>
          <section className={` d-block  ${styles.container}`}>
            <div className="container">
              <h2>
                Welcome in our<span> community where you</span> can find what
                you need.
              </h2>
              <ul>
                <li>Hire the best talent .</li>
                <li>Start making your dreams reality.</li>
              </ul>
              <button className={`mb-1 ${styles.button1}`}>
                {/* menna */}
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  href="https://client-page-58c972.netlify.app/"
                >
                  Find Freelancer
                  <i className="fa-solid fa-arrow-right ps-3 py-1"></i>
                </a>
              </button>
              <button className={`${styles.button2}`}>
                {/* gorge */}
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  href="https://about-us21.netlify.app/"
                >
                  Start Freelancing
                  <i className="fa-solid fa-arrow-right ps-3 py-1"></i>
                </a>
              </button>
            </div>
          </section>

          {/* <section className={`container d-flex align-items-center justify-content-center pt-5 ${styles.container1}`}>
            <div className="row">
              
              <div className="col-lg-2 col-md-2 col-sm-6 d-flex justify-content-start">
                <i className="fa-solid fa-user-tie  text-center mt-4 pe-1 fs-1"></i>
                <div className="mt-3">
                  <h4>800,000</h4>
                  <p>Employers Worldwide</p>
                </div>
              </div>

              <div className="col-lg-2  col-md-2 col-sm-6 d-flex justify-content-start">
                <i className="fa-solid fa-file-invoice-dollar text-center mt-4 pe-1 fs-1"></i>
                <div className="mt-3">
                  <h4>1 Million</h4>
                  <p>Paid Invoices</p>
                </div>
              </div>

              <div className="col-lg-2 col-md-2 col-sm-6 d-flex justify-content-start ">
                <i className="fa-solid fa-hand-holding-dollar text-center mt-4 pe-1 fs-1"></i>
                <div className="mt-3">
                  <h4>$250 Million</h4>
                  <p>Paid to Freelancers</p>
                </div>
              </div>

              <div className="col-lg-2 col-md-2 col-sm-6 d-flex justify-content-start ">
                <i className="fa-regular fa-face-smile-beam text-center mt-4 pe-1 fs-1"></i>
                <div className="mt-3">
                  <h4>99%</h4>
                  <p>Customer Satisfaction Rate </p>
                </div>
              </div>
            </div>
          </section> */}

          <section className={`container-fluid py-5 ${styles.container1}`}>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="col-xl-3 col-lg-3 col-md-6 col-sm-12"
            >
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <i 
                    className={`${stat.icon} text-center fs-1`}
                    style={{ minWidth: '60px' }}
                  ></i>
                </div>
                <div>
                  <h4 className="mb-1">{stat.number}</h4>
                  <p className="text-muted mb-0">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
          </section>


          <section id="about" className={`${styles.container2}`}>
            <div className="row">
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-lg-5 pb-4">
                    <span>Make it real</span>{" "}
                    <h2 className="">With Freelancer</h2>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <h3>The best talent</h3>
                      <p>
                        Discover reliable professionals by exploring their
                        portfolios and immersing yourself in the feedback shared
                        on their profiles.
                      </p>
                    </div>
                    {/* <div className="col-lg-6">
                      <h3>Fast bids</h3>
                      <p>
                        Get quick, no-obligation quotes from skilled
                        freelancers. 80% of jobs receive bids within 60 seconds.
                        Your idea is just moments from reality.
                      </p>
                    </div> */}
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <h3>Quality work</h3>
                      <p>
                        With Freelancer's talent pool of over 60 million
                        professionals at your fingertips, you'll find quality
                        talent to get what you need done.
                      </p>
                    </div>
                    {/* <div className="col-lg-6">
                      <h3>Be in control</h3>
                      <p>
                        Stay in the loop while on the move. Chat with your
                        freelancers and get real time updates with our mobile
                        app. Anytime, anywhere.
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <img
                  src="https://www.f-cdn.com/assets/main/en/assets/home/make-it-real/make-it-real-cards-ld.png"
                  alt=""
                  width={450}
                  height={500}
                />
              </div>
            </div>
          </section>

          {/* <section id="traks" className={`${styles.container5}`}>
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <img
                    src="https://www.keystonesubic.com/storage/2023/03/web-devlopment.jpg"
                    alt=""
                    width={350}
                    height={595}
                  />
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-7 col-md-7 col-sm-7 m-2">
                      <img
                        src="https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg"
                        alt=""
                        width={290}
                        height={180}
                      />
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4  ">
                      <img
                        src="https://www.velvetech.com/wp-content/uploads/2019/08/15-software-development-methodologies-fb.jpg"
                        alt=""
                        width={375}
                        height={180}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 py-3 m-2">
                      <img
                        src="https://www.brilworks.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F219851%2F550x283%2F4df17cf388%2Fevolution-of-generative-ai.webp&w=3840&q=30"
                        width={750}
                        height={200}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-7 col-md-7 col-sm-7 m-2">
                      <img
                        src="https://media.b2broker.com/app/uploads/2023/11/Overview-of-The-MetaTrader-4-Web-Platform.png"
                        alt=""
                        width={290}
                        height={180}
                      />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 ">
                      <img
                        src="https://www.theknowledgeacademy.com/_files/images/Game_Development_Process_An_Overview.png"
                        alt=""
                        width={375}
                        height={180}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          {/* //////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className={`container text-center py-5 ${styles.container10}`}>
            <h1 className={`pt-5 ${styles.h1}`}>
              Find the right Developer for you.
            </h1>
            <p className={`pt-3 ${styles.p}`}>
              With over 30,000 Developers and 1M+ clients .
            </p>
          </div>
          {/* start of be a developer section */}

          <div id="beadiv" className={`container m-5 ${styles.container9}`}>
            <div className={`row m-5 ${styles.row}`}>
              <div
                className={`col-lg-6 col-md-6 col-sm-12 ${styles.multiimage}`}
              >
                <img
                  className={`ps-5 ${styles.img1}`}
                  src={img}
                  alt=""
                  width={"430px"}
                  height={"500px"}
                />
                <img
                  className={`ps-3 pt-4 ${styles.img2}`}
                  src={img}
                  alt=""
                  width={"430px"}
                  height={"470px"}
                />
                <img
                  className={`pt-5 ${styles.img3}`}
                  src={img}
                  alt=""
                  width={"430px"}
                  height={"420px"}
                />
              </div>
              <div className={`col-lg-6 col-md-6 col-sm-12 ${styles.text}`}>
                <h1>Start Your Journy as a Developer With us</h1>
                <h6>
                  Sign Up now <i class="fa-solid fa-arrow-down"></i>
                </h6>
                <button type="button" class="btn btn-warning ms-5 px-3 mt-3">
                  <a href="https://regist-tech.netlify.app/">
                    <i
                      class="fa-regular fa-heart"
                      style={{ color: "#ffff" }}
                    ></i>
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* <div id="beadiv" className={`container m-5 ${styles.container9}`}>
  <div className={`row m-5 ${styles.row}`}>
    <div className={`col-lg-6 col-md-6 col-sm-12 ${styles.muliimage}`}>
      <img
        className={`${styles.img1}`}
        src={img}
        alt=""
        style={{ width: '100%', height: 'auto' }} // Responsive image sizing
      />
      <img
        className={`${styles.img2}`}
        src={img}
        alt=""
        style={{ width: '100%', height: 'auto', position: 'absolute', top: '0', left: '0', zIndex: 1 }} // Adjust positioning
      />
      <img
        className={`${styles.img3}`}
        src={img}
        alt=""
        style={{ width: '100%', height: 'auto', position: 'absolute', top: '0', left: '0', zIndex: 0 }} // Adjust positioning
      />
    </div>
    <div className={`col-lg-6 col-md-6 col-sm-12 ${styles.text}`}>
      <h1>Start Your Journey as a Developer With Us</h1>
      <h6>
        Sign Up now <i className="fa-solid fa-arrow-down"></i>
      </h6>
      <button type="button" className="btn btn-warning ms-5 px-3 mt-3">
        <a href="https://regist-tech.netlify.app/">
          <i className="fa-regular fa-heart" style={{ color: "#ffff" }}></i>
        </a>
      </button>
    </div>
  </div>
          </div> */}
          {/* <div id="beadiv" className={`container9`}>
            <div className={`row m-5`}>
              Images Section
              <div className={`col-lg-6 col-md-6 col-sm-12 muliimage`}>
                <img
                  className={`ps-5 img1`}
                  src={img} // Replace with your actual img import
                  alt="Developer Journey"
                />
                <img
                  className={`ps-3 pt-4 img2`}
                  src={img} // Replace with your actual img import
                  alt="Developer Journey"
                />
                <img
                  className={`pt-5 img3`}
                  src={img} // Replace with your actual img import
                  alt="Developer Journey"
                />
              </div>

              Text Section
              <div className={`col-lg-6 col-md-6 col-sm-12 text`}>
                <h1>Start Your Journey as a Developer With Us</h1>
                <h6>
                  Sign Up now <i className="fa-solid fa-arrow-down"></i>
                </h6>
                <button
                  type="button"
                  className="btn btn-warning ms-5 px-3 mt-3"
                >
                  <a href="https://regist-tech.netlify.app/">
                    <i
                      className="fa-regular fa-heart"
                      style={{ color: "#ffff" }}
                    ></i>
                  </a>
                </button>
              </div>
            </div>
          </div> */}

          {/* end of be a developer section */}

          {/* /* ////////////////////////////////////////////////////////////////////////////////////////// */}
          <section className={`container  ${styles.container4}`}>
            <div className="container px-5 ">
              <div className="row pb-5">
                <h1 className="col-lg-7 ">
                  A whole world of freelance talent at your fingertips.
                </h1>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <i class="fa-solid fa-table-cells fs-1"></i>
                  <h3 className="py-3">We have 300 categories </h3>
                  <p>
                    Get results from skilled freelancers from all over the
                    world, for every task, at any price point.
                  </p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <i class="fa-regular fa-handshake fs-1"></i>
                  <h3 className="py-3">Clear,transparent pricing</h3>
                  <p>
                    Pay per project or by the hour (Pro). Payments only get
                    released when you approve.
                  </p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 ">
                  <i class="fa-solid fa-bolt-lightning fs-1"></i>
                  <h3 className="py-3">Quality work done faster</h3>
                  <p>
                    {" "}
                    Filter to find the right freelancers quickly and get great
                    work delivered in no time, every time.
                  </p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <i class="fa-regular fa-clock fs-1"></i>
                  <h3 className="py-3 fs-4 pb-4">24/7award-winning support </h3>
                  <p>
                    Chat with our team to get your questions answered or resolve
                    any issues with your orders.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* <section className={`container ${styles.container6}`}>
            <div className="container  mt-5">
              <div className="row">
                <div className="col-lg-5 pt-5 mt-5">
                  <img
                    src="https://www.f-cdn.com/assets/main/en/assets/home/global-talent/global-talent-cards-ld.png"
                    alt=""
                    width={500}
                  />
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-6">
                  <div className="col-lg-12 pb-4">
                    <h1>Tap into a</h1>
                    <span>global talent network</span>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <h3>Post your job</h3>
                      <p>
                        It's free and easy! Get lots of competitive bids that
                        suit your budget in minutes. Start making your dreams
                        reality.
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <h3>Choose freelancers</h3>
                      <p>
                        No job is too big or complex. We've got freelancers for
                        jobs of any size or budget, across 2700+ skills. Let our
                        talent bring your ideas to life
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <h3>Pay safely</h3>
                      <p>
                        Only pay for work when you are 100% satisfied with the
                        outcome. Our milestone payment system protects you every
                        step of the way
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <h3>We're here to help</h3>
                      <p>
                        Your time is precious. Let our team of expert recruiters
                        and co-pilots save you time finding talent, even
                        managing your job if needed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* ---------------------------------------------------------------------------- */}
          {/* <section id="our spicialities" className={`${styles.container7}`}>
            <div className="container pb-5 mb-5">
              <div className="row">
                <div className="col-lg-8 col-md-8">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <img
                        src="https://www.sphereinc.com/wp-content/uploads/2022/05/cloud_cybersecurity.webp"
                        alt=""
                        width={300}
                        height={180}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <img
                        src="https://bombaychamber.com/wp-content/uploads/2024/04/Online-Blockchain-Cryptocurrency-Certification-Course-scaled-1.jpg"
                        alt=""
                        width={300}
                        height={180}
                      />
                    </div>

                    <div className="row">
                      <div className="col-lg-12 py-3">
                        <img
                          src="https://media.licdn.com/dms/image/D4D12AQHcNSzLU7jiGA/article-cover_image-shrink_720_1280/0/1715785719025?e=2147483647&v=beta&t=8u6gqTJqGsPUNhgAAjxbFm9cdazu8EUYtU-ybD_z3gU"
                          alt=""
                          width={680}
                          height={130}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUkqpOsgKKtlelRm8RvRZs3-4Xi1DMshFiA&s"
                          alt=""
                          width={300}
                          height={180}
                        />
                      </div>
                      <div className="col-lg-6">
                        <img
                          src="https://www.newperspectivestudio.co.za/wp-content/uploads/2024/09/What-is-website-maintenance-and-Why-it-is-important.jpg"
                          alt=""
                          width={300}
                          height={180}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <img
                    src="https://novawebbusiness.com/wp-content/uploads/2024/03/Web-Development.webp"
                    alt=""
                    width={370}
                    height={550}
                  />
                </div>
              </div>
            </div>
          </section> */}
          {/* <section id="our-specialties" className={`${styles.container7}`}>
            <div className="container pb-5 mb-5">
              <div className="row gy-4">
                {" "}
                Added gy-4 for vertical spacing between rows on mobile
                <div className="col-lg-8 col-md-12">
                  <div className="row g-4">
                    {" "}
                    Added g-4 for consistent grid spacing
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="img-wrapper">
                        <img
                          src="https://www.sphereinc.com/wp-content/uploads/2022/05/cloud_cybersecurity.webp"
                          alt="Cloud Cybersecurity"
                          className="img-fluid" // Added img-fluid for responsive images
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="img-wrapper">
                        <img
                          src="https://bombaychamber.com/wp-content/uploads/2024/04/Online-Blockchain-Cryptocurrency-Certification-Course-scaled-1.jpg"
                          alt="Blockchain"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-12 py-3">
                      <div className="img-wrapper">
                        <img
                          src="https://media.licdn.com/dms/image/D4D12AQHcNSzLU7jiGA/article-cover_image-shrink_720_1280/0/1715785719025?e=2147483647&v=beta&t=8u6gqTJqGsPUNhgAAjxbFm9cdazu8EUYtU-ybD_z3gU"
                          alt="Technology"
                          className="img-fluid w-100" // Added w-100 to ensure full width
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="img-wrapper">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUkqpOsgKKtlelRm8RvRZs3-4Xi1DMshFiA&s"
                          alt="Development"
                          className="img-fluid "
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="img-wrapper">
                        <img
                          src="https://www.newperspectivestudio.co.za/wp-content/uploads/2024/09/What-is-website-maintenance-and-Why-it-is-important.jpg"
                          alt="Maintenance"
                          className="img-fluid "
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 ">
                  <div className="img-wrapper h-100">
                    <img
                      src="https://novawebbusiness.com/wp-content/uploads/2024/03/Web-Development.webp"
                      alt="Web Development"
                      className="img-fluid w-100 h-100 "
                    />
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section id="ourspecialties" className={`pt-4 ${styles.container7}`}>
            <div className="container pb-5 mb-5">
              <div className="row g-4">
                {/* First Row */}
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="img-wrapper h-100">
                    <img
                      src="https://www.sphereinc.com/wp-content/uploads/2022/05/cloud_cybersecurity.webp"
                      alt="Cloud Cybersecurity"
                      className="img-fluid w-100 h-100 object-cover"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="img-wrapper h-100">
                    <img
                      src="https://bombaychamber.com/wp-content/uploads/2024/04/Online-Blockchain-Cryptocurrency-Certification-Course-scaled-1.jpg"
                      alt="Blockchain"
                      className="img-fluid w-100 h-100 object-cover"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="img-wrapper h-100">
                    <img
                      src="https://novawebbusiness.com/wp-content/uploads/2024/03/Web-Development.webp"
                      alt="Web Development"
                      className="img-fluid w-100 h-100 object-cover"
                    />
                  </div>
                </div>

                {/* Second Row */}
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="img-wrapper h-100">
                    <img
                      src="https://media.licdn.com/dms/image/D4D12AQHcNSzLU7jiGA/article-cover_image-shrink_720_1280/0/1715785719025?e=2147483647&v=beta&t=8u6gqTJqGsPUNhgAAjxbFm9cdazu8EUYtU-ybD_z3gU"
                      alt="Technology"
                      className="img-fluid w-100 h-100 object-cover"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="img-wrapper h-100">
                    <img
                      src="https://www.newperspectivestudio.co.za/wp-content/uploads/2024/09/What-is-website-maintenance-and-Why-it-is-important.jpg"
                      alt="Maintenance"
                      className="img-fluid w-100 h-100 object-cover"
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="img-wrapper h-100">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUkqpOsgKKtlelRm8RvRZs3-4Xi1DMshFiA&s"
                      alt="Development"
                      className="img-fluid w-100 h-100 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ---------------------------------------------------------------------------- */}
          <section>
            <div className={`${styles.container8}`}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <h1>
                      Take a look at some information about <span>our</span>{" "}
                      specialties
                    </h1>
                  </div>

                  <div className="col-lg-8">
                    {rows.map((row, rowIndex) => (
                      <div className="row" key={`row-${rowIndex}`}>
                        {row.map((track, colIndex) => (
                          <div
                            className="col-lg-4"
                            key={`col-${rowIndex}-${colIndex}`}
                          >
                            <a
                              style={{ textDecoration: "none" }}
                              href={track.link}
                            >
                              <h4>{track.title}</h4>
                            </a>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  {/* <div className="col-lg-6">
        {aiDevelopmentItems.map((row, rowIndex) => (
        <div className="row" key={`row-${rowIndex}`}>
          {row.map((item, colIndex) => (
            <div className="col-lg-4" key={`col-${rowIndex}-${colIndex}`}>
                <h4>{item}</h4>
            </div>
          ))}
        </div>
        ))}
                  </div> */}
                </div>
              </div>
            </div>
          </section>
          {/* ---------------------------------------------------------------------------- */}
        </div>
      </Fragment>
    );
  }
}
const techTracks = [
  {
    title: "Web Development",
    link: "https://en.wikipedia.org/wiki/Web_development",
  },
  {
    title: "Mobile Development",
    link: "https://www.ibm.com/topics/mobile-application-development",
  },
  {
    title: "AI Development",
    link: "https://codeinstitute.net/global/blog/ai-developer/",
  },
  {
    title: "Cloud Computing",
    link: "https://en.wikipedia.org/wiki/Cloud_computing",
  },
  { title: "DevOps", link: "https://en.wikipedia.org/wiki/DevOps" },
  {
    title: "Cybersecurity",
    link: "https://www.cisco.com/site/us/en/learn/topics/security/what-is-cybersecurity.html",
  },
  {
    title: "Data Science",
    link: "https://www.datacamp.com/blog/what-is-data-science-the-definitive-guide?utm_source=google&utm_medium=paid_search&utm_campaignid=19589720824&utm_adgroupid=152984013534&utm_device=c&utm_keyword=&utm_matchtype=&utm_network=g&utm_adpostion=&utm_creative=720362650486&utm_targetid=dsa-2222697811358&utm_loc_interest_ms=&utm_loc_physical_ms=9112343&utm_content=DSA~blog~Data-Science&utm_campaign=230119_1-sea~dsa~tofu_2-b2c_3-row-p2_4-prc_5-na_6-na_7-le_8-pdsh-go_9-nb-e_10-na_11-na-bfcm24&gad_source=1&gclid=CjwKCAiAl4a6BhBqEiwAqvrquhWS9x1gntK1Jxff95g2_HD5Hzr6DWeyRl2aMHoTGmjxI-Mj7fWB8RoCEtEQAvD_BwE",
  },
  {
    title: "Blockchain",
    link: "https://www.blackduck.com/glossary/what-is-blockchain.html",
  },
  {
    title: "UI/UX Design",
    link: "https://www.youtube.com/watch?v=zHAa-m16NGk",
  },
  {
    title: "Game Development",
    link: "https://en.wikipedia.org/wiki/Video_game_development",
  },
  {
    title: "Machine Learning",
    link: "https://www.datacamp.com/blog/what-is-machine-learning?utm_source=google&utm_medium=paid_search&utm_campaignid=19589720824&utm_adgroupid=152984014014&utm_device=c&utm_keyword=&utm_matchtype=&utm_network=g&utm_adpostion=&utm_creative=720362650501&utm_targetid=dsa-2222697810918&utm_loc_interest_ms=&utm_loc_physical_ms=9112343&utm_content=DSA~blog~Machine-Learning&utm_campaign=230119_1-sea~dsa~tofu_2-b2c_3-row-p2_4-prc_5-na_6-na_7-le_8-pdsh-go_9-nb-e_10-na_11-na-bfcm24&gad_source=1&gclid=CjwKCAiAl4a6BhBqEiwAqvrqupXA6wiQpplul-HQGEXFq9dpstY-cDvcFB90s2HERp4lnMrUvZ_fmRoClCIQAvD_BwE",
  },
  {
    title: "Software Testing",
    link: "https://youtu.be/u6QfIXgjwGQ?si=DPIFjXwS6cMpiNli",
  },
];
