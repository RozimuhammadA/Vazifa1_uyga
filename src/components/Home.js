import React from 'react'
import '..//styles/Home.css';
import { Icon } from '@mui/material';
import { FaDesktop, FaTabletAlt, FaMobileAlt, FaShoppingCart, FaTimes,  FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

function Home() {
  return (
    <div>
      <div className="qorabar">
        <img src="data:image/png;base64,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" />

        <div className="ikkiqora">
          + REZUME
        </div>

        <div className="qoraicons">
          <div className="icon1 ioc">
            <FaDesktop />
          </div>
          <div className="icon2 ioc">
            <FaTabletAlt />
          </div>
          <div className="icon3 ioc">
            <FaMobileAlt />
          </div>
          <div className="icon4 ioc">
            <FaShoppingCart />
          </div>
          <div className="icon5 ioc">
            <FaTimes />
          </div>
        </div>
      </div>
      <div className="home">
        <div className="content">
          <div className="navbar">
            <a href="#">HOME</a>
            <a href="#">PORTFOLIO</a>
            <a href="#">RESUME</a>
            <a href="#">ABOUT</a>
            <a href="#">CONTACT</a>
          </div>
          <center>
            <h1 className='hello'>Hello, I'm</h1>
            <h1 className='name'>Charles Anderson</h1>
            <h3 className='p'>AND THIS IS MY REZUME</h3>
          </center>
        </div>
      </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <div className="hamma">
        <center>
          <h1 className='h1'>Featured <span>Portfolio</span></h1>
          <div className="link">
            <a href="#" className='colo'>All</a>
            <a href="#">Packaging</a>
            <a href="#">Mockup</a>
            <a href="#">Typography</a>
            <a href="#">Photography</a>
          </div>
          <div className="allcards">
            <div className="card_1">
              <div className="block1">
                <img src="https://preview.colorlib.com/theme/rezume/images/p1.jpg" alt="" />
                <center><h1 className='h1lar'>Square Box Mockup</h1>
                  <p className='plar'>MOCKUP</p></center>
              </div>
              <div className="block2">
                <img src="https://preview.colorlib.com/theme/rezume/images/p2.jpg" alt="" />
                <center><h1 className='h1lar'>Product Box Package Mockup</h1>
                  <p className='plar'>MOCKUP</p></center>
              </div>
              <div className="block3">
                <img src="https://preview.colorlib.com/theme/rezume/images/p3.jpg" alt="" />
                <center><h1 className='h1lar'>Creative Package Design</h1>
                  <p className='plar'>PACKAGING</p></center>
              </div>
            </div>
            <div className="card_2">
              <div className="block1">
                <img src="https://preview.colorlib.com/theme/rezume/images/p4.jpg" alt="" />
                <center><h1 className='h1lar'>Packaging Brand</h1>
                  <p className='plar'>PACKAGING</p></center>
              </div>
              <div className="block2">
                <img src="https://preview.colorlib.com/theme/rezume/images/p5.jpg" alt="" />
                <center><h1 className='h1lar'>Isometric 3D Extrusion</h1>
                  <p className='plar'>TYPOGRAPHY</p></center>
              </div>
              <div className="block3">
                <img src="https://preview.colorlib.com/theme/rezume/images/p6.jpg" alt="" />
                <center><h1 className='h1lar'>White Space Photography</h1>
                  <p className='plar'>PHOTOGRAPHY</p></center>
              </div>
            </div>
          </div>
        </center><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div className="resume">
          <h1 className='h12'>My <span>Resume</span> </h1>
          <div className="bolimlar">
            <div className="bolim1">
              <h1 className='bolimh'>Education</h1>
              <div className="cards1">
                <p className='pila'> March 2013 - Present</p>
                <h4 className='hi4'>Masteral in Information Technology</h4>
                <p className='pila2'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                <p className='pila3'>New York University</p>
              </div>
              <div className="cards2">
                <p className='pila'> March 2013 - Present Deacember</p>
                <h4 className='hi4'>Masteral in Information Technology</h4>
                <p className='pila2'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                <p className='pila3'>New York University</p>
              </div>
              <div className="cards3">
                <p className='pila'> March 2013 - Present</p>
                <h4 className='hi4'>Masteral in Information Technology</h4>
                <p className='pila2'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                <p className='pila3'>New York University</p>
              </div>
              <div className="cards4">
                <p className='pila'> March 2013 - Present Deacember</p>
                <h4 className='hi4'>Masteral in Information Technology</h4>
                <p className='pila2'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                <p className='pila3'>New York University</p>
              </div>
            </div>
            <div className="bolim2">
              <h1 className='bolimh'>Experience</h1>
              <div className="cards5">
                <p className='pila'> March 2013 - Present</p>
                <h4 className='hi4'>Masteral in Information Technology</h4>
                <p className='pila2'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                <p className='pila3'>Github</p>
              </div>
              <div className="cards6">
                <p className='pila'> March 2013 - Present</p>
                <h4 className='hi4'>Masteral in Information Technology</h4>
                <p className='pila2'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                <p className='pila3'>Facebook</p>
              </div>
              <div className="cards7">
                <p className='pila'> March 2013 - Present</p>
                <h4 className='hi4'>Masteral in Information Technology</h4>
                <p className='pila2'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                <p className='pila3'>Twitter</p>
              </div>
              <div className="cards8">
                <p className='pila'> March 2013 - Present</p>
                <h4 className='hi4'>Masteral in Information Technology</h4>
                <p className='pila2'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                <p className='pila3'>Shopify</p>
              </div>
            </div>
          </div>
        </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div className="abput">
          <div className="yonmayon">
            <div className="img">
              <img className='aboutimage' src="https://preview.colorlib.com/theme/rezume/images/image_1.jpg" alt="" />
            </div>
            <div className="sozlari">
              <h1 className='aboutname'>About <span>Me</span></h1>
              <p className='soz1'>
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>

              <p className='soz2'>
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </p>
              <div className="twobuttons">
                <button>HIRE ME</button>
                <button className='b2'>DOWNLOAD CV</button>
              </div>
            </div>

          </div>
        </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div className="clent">
          <h1 className="nomi">
            Client <span>Tesmitonal</span>
          </h1>
          <div className="birga">
            <div className="birga1">
              <img src="https://preview.colorlib.com/theme/rezume/images/person_1.jpg" alt="" className='imagelar' />
              <p className="birgap">“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
              <div className="pbirgap2">
                — Ethan McCown, <span>CEO XYZ Inc.</span>
              </div>

            </div>
            <div className="birga2">
              <div className="birga1">
                <img src="https://preview.colorlib.com/theme/rezume/images/person_2.jpg" alt="" className='imagelar' />
                <p className="birgap">“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                <div className="pbirgap2">
                  — Ethan McCown, <span>CEO XYZ Inc.</span>
                </div>

              </div>
            </div>
          </div>

          <div className="birga">
            <div className="birga1">
              <img src="https://preview.colorlib.com/theme/rezume/images/person_3.jpg" alt="" className='imagelar' />
              <p className="birgap">“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
              <div className="pbirgap2">
                — Ethan McCown, <span>CEO XYZ Inc.</span>
              </div>

            </div>
            <div className="birga2">
              <div className="birga1">
                <img src="https://preview.colorlib.com/theme/rezume/images/person_4.jpg" alt="" className='imagelar' />
                <p className="birgap">“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                <div className="pbirgap2">
                  — Ethan McCown, <span>CEO XYZ Inc.</span>
                </div>

              </div>
            </div>
          </div>
        </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div className="servis">
          <h1 className="nomiservix">My <span>Services</span></h1>
          <div className="bloklar10">
            <div className="cardd1">
              <center><div className="yoq"></div></center>
              <h1 className='kim'>Web Design</h1>
              <p className="zoslar">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
              <a href="#" className="likki">Learn More <span>›</span></a>
            </div>
            <div className="cc">
              <center><div className="yoq"></div></center>
              <h1 className='kim'>Web Design</h1>
              <p className="zoslar">
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </p>
              <a href="#" className="likki">Learn More <span>›</span></a>
            </div>
            <div className="cardd1">
              <center><div className="yoq"></div></center>
              <h1 className='kim'>Web Design</h1>
              <p className="zoslar">
                Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
              </p>
              <a href="#" className="likki">Learn More <span>›</span></a>
            </div>
          </div>
        </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div className="bloklarr">
          <h1 className="boshi">
            Blog on <span>Medium</span>

            <div className="bollilari">
              <div className="bilok1">
                <img src="https://preview.colorlib.com/theme/rezume/images/post_1.jpg" alt="" className='rssim' />
                <h1 className='cretiv'>Creative Product Designer From Facebook</h1>
                <p className='polli'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                <p className='massage'>Aug 7, 2018 5 Comments</p>
              </div>
              <div className="bilok2">
                <img src="https://preview.colorlib.com/theme/rezume/images/post_2.jpg" alt="" className='rssim' />
                <h1 className='cretiv'>Creative Product Designer From Facebook</h1>
                <p className='polli'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                <p className='massage'>Aug 7, 2018 5 Comments</p>
              </div>
              <div className="bilok3">
                <img src="https://preview.colorlib.com/theme/rezume/images/post_3.jpg" alt="" className='rssim' />
                <h1 className='cretiv'>Creative Product Designer From Facebook</h1>
                <p className='polli'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                <p className='massage'>Aug 7, 2018 5 Comments</p>
              </div>
            </div>
          </h1>
        </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div className="tugash">
          <center><h1 className="isming">Get <span>In Touch</span></h1></center><br /><br /><br /><br /><br />

          <div className="yanbilla">
            <div className="tomon1">
              <h1>Get In Touch</h1><br /><br />
              <input className='inniput' type="text" placeholder='Your Name' /><br />
              <input className='inniput' type="email" placeholder='Your Email' /><br />
              <input className='inniput' type="number" placeholder='Your Phone' /><br />
              <textarea name="massage" id="massage" rows="4"></textarea>
            </div>
            <div className="tomon2">
              <h1>My Contact Details</h1>
              <p className='ema'>EMAIL</p>
              <p className='bir'> site@gmail.com </p>
              <p className='pho'>PHONE</p>
              <p className='bir'> +30 976 1382 9921  </p>
              <p className='fax'>FAX</p>
              <p className='bir'> +30 976 1382 9922 </p>
              <p className='adre'>ADRESS</p>
              <p className='bir kattaaa'>San Francisco, CA
                4th Floor8 Lower
                San Francisco street, M1 50F</p>
            </div>
          </div>
        </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        <center></center>
        <div className="ednd">
          <center><p>Copyright © 2024 All rights reserved | This template is made with ❤️by <span>Colorlib</span></p></center>
          <div className="cino">
            <div className="icon"><FaFacebook/></div>
            <div className="icon"><FaTwitter/></div>
            <div className="icon"><FaInstagram/></div>
            <div className="icon"><FaLinkedin/></div>
            <div className="icon"><FaTiktok/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home