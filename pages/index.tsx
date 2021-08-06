import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Head from 'next/head';

export default function Home(): JSX.Element {

  return (
    <>
    <Head><title>Edies portfolio</title></Head>
      <header>
        <div className="container header">
          <div className="logo">
            <h2>Edie</h2>
          </div>
          <div className="desktopNav">
            <nav>
              <ul>
                <li>
                  <a href="#home">home</a>
                </li>
          
                <li>
                  <a href="#services">services</a>
                </li>
          
                <li>
                  <a href="#ourwork">our work</a>
                </li>
          
                <li>
                  <a href="#clients">clients</a>
                </li>
          
                <li>
                  <a href="#contacts">contacts</a>
                </li>
              </ul>
            </nav>
          </div>


          <div className="menu-icon">
            <i className="fa fa-bars fa-2x"></i>
          </div>
        </div>
     

      <div className="mobileNav">
            <nav>
              <ul>
                  <li>
                    <a href="#home">home</a>
                  </li>
                  
                  <li>
                    <a href="#services">services</a>
                  </li>
                  
                  <li>
                    <a href="#ourwork">our work</a>
                  </li>
                  
                  <li>
                    <a href="#clients">clients</a>
                  </li>
                  
                  <li>
                    <a href="#contacts">contacts</a>
                  </li>
              </ul>
            </nav>
      </div>

      </header>


      <div className="banner container" id="home">
        <div className="contents">
           <div className="content-infor">
             <p className="para">unhappy with your website?</p>
             <h2>We create bueatiful and fast web service</h2>
           </div>
        </div>

        <div className="banner-img container">
          <Image src="/heroImage.jpg"width={1332} height={354} alt='heroimage' />
        </div>

        <div className="banner-txt contents">
          <h2>Story, emotion and purpose</h2>
          <p>
             We help transform your ideas into real world applications that will outerperform your toughest competition and help you achieve your strategic goals in short period of time.
          </p>
          <div className="input">
            <label>want us to conduct you?</label>
            <div className="input-feild">
              <input type="email" name="email" id="email" placeholder="email"/>
              <input type="submit" value="Join"/>
            </div>
          </div>
        </div>
      </div>

      <main>
               <section className="container">
                 <div className="service" id="services">
                   <h3 className="service-title">
                     We offer high demand services
                   </h3>
                  <div className="service-container">
                   <div className="single-service">
                        <div className="service-img">
                          <i className="fas fa-pen fa-2x"></i>
                        </div>
                        <div className="service-infor">
                          <h3>UI/UX Design</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum mollitia amet sit voluptatum nesciunt natus beatae minus alias vero aperiam?
                          </p>
                          <button>Get started</button>
                        </div>
                   </div>
                    <div className="single-service">
                    <div className="service-img green-bg">
                      <i className="far fa-code fa-2x"></i>
                    </div>
                    <div className="service-infor">
                      <h3>Front End</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestias aperiam iste fugiat dolore adipisci inventore vero nihil odio accusantium!
                      </p>
                      <button className="blue-btn">Get started</button>
                    </div>
                    </div>
                      <div className="single-service">
                      <div className="service-img red-bg">
                        <i className="fas fa-server fa-2x"></i>
                      </div>
                      <div className="service-infor">
                        <h3>Back End</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iusto repellat magnam ducimus molestiae eaque exercitationem nostrum ullam? Recusandae, rerum.</p>
                        <button>Get started</button>
                      </div>
                      </div>
                      </div>
                 </div>
               </section>

               <section className="container" id="ourwork">
                 <div className="designs">
                   <h3>Good design means good business</h3>
                  <div className="design-container">
                   <div className="design-img">
                     <div className="single-design">
                       <div className="design-img">
                         <Image src="/smarthome.jpg" width={670} height={427}  alt="smartphone"/>
                       </div>
                       <div className="design-infor">
                         <p>Full stack application</p>
                         <h4>smart home dashboard</h4>
                       </div>
                     </div>

                      <div className="single-design">
                        <div className="design-img">
                          <Image src="/onboard.png" width={821} height={828}  alt="smartphone" />
                        </div>
                        <div className="design-infor">
                          <p>UI/UX design</p>
                          <h4>onboard application</h4>
                        </div>
                      </div>

                        <div className="single-design">
                          <div className="design-img">
                            <Image src="/booking.png" width={572} height={615}  alt="booking" />
                          </div>
                          <div className="design-infor">
                            <p>Mobile application</p>
                            <h4>Booking system</h4>
                          </div>
                        </div>

                          <div className="single-design">
                            <div className="design-img">
                              <Image src="/juice-product.png" width={782} height={445}  alt="juice" />
                            </div>
                            <div className="design-infor">
                              <p>Front End application</p>
                              <h4>Juice product homepage</h4>
                            </div>
                          </div>

                          </div>

                          </div>
                          <div className="link">
                            <a href="#">see more <i className="fal fa-long-arrow-right"></i></a>
                          </div>
                   
                 </div>
               </section>

               <section className="container">
                 <div className="team">
                   <div className="column-left">
                     <p className="red-color">Meet the team</p>
                      <h5>We are chilled and a laidblack team</h5>
                      <p className="team-info">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                   </div>
                   <div className="column-right">
                     <div>
                    <Image src="/person3.png" width={291} height={300}  alt="juice" />
                      
                     </div>
                     <div className="images">
                        <Image src="/person1.png" width={291} height={300}  alt="juice" />
                        <Image src="/person2.png" width={291} height={300}  alt="juice" />
                     </div>
                   </div>
                 </div>

                 <div className="team-section" id="clients">
                   <p className="quote">
                     <q>Fast and outstanding results. Eddie understands their customer&aposs need. They have a young and talented team.</q>
                  </p>

                  <div className="testmony">
                <Image src="/person4.png" width={291} height={300}  alt="juice" />
                    <div className="user-info">
                      <p>Carlos Tran</p>
                      <p>The decorate gatsby</p>
                    </div>
                  </div>
                 </div>
               </section>
      </main>

      <footer>
        <div className="footer container" id="contacts">
          <div className="col-1">
            <nav>
              <li>
                <a href="#">home</a>
              </li>

              <li>
                <a href="#">services</a>
              </li>

              <li>
                <a href="#">our work</a>
              </li>

              <li>
                <a href="#">clients</a>
              </li>

              <li>
                <a href="#">contacts</a>
              </li>
            </nav>
          </div>
          <div className="col-1">
            <h2>Edie</h2>
            <div className="social">
              <Image src="/instagram.svg" width={24} height={24}  alt="juice" />
              <Image src="/linkedin.svg" width={24} height={24}  alt="juice" />
              <Image src="/twitter.svg" width={24} height={24}  alt="juice" />
            </div>
          </div>
          <div className="col-1">
            <div className="input">
              <label>want us to conduct you?</label>
                <div className="input-feild">
                  <input type="email" name="email" placeholder="email" />
                  <input type="submit" value="Join" />
                </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
