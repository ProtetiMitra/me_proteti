import React, { useState,useEffect } from 'react';
import './style.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CV from '../src/images/Proteti_cv.pdf';
import {
  faEnvelopeOpen,
  faPhone,
  faBars,
  faHeart,
  faLink
} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebook,
  faPinterest,
  faGithub,
  faLinkedin,
  faInstagram,
  faLeanpub
} from '@fortawesome/free-brands-svg-icons';


const SocialLinks = () => {
  return (
    <div className="social-icons">
      <a href="https://www.facebook.com/proteti.mitra/">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://www.pinterest.ca/proteti11/">
        <FontAwesomeIcon icon={faPinterest} />
      </a>
      <a href="https://github.com/ProtetiMitra">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/proteti-mitra-a31b331a1">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://www.instagram.com/_._proteti_mitra_._">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.connectbud.com/profile/Proteti-Mitra-1">
        <FontAwesomeIcon icon={faLeanpub} />
      </a>
    </div>
  );
};
const Portfolio = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('skills');
  const [msgSent, setMsgSent] = useState(false);
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwDhyxTJcER8uwL4dCnc2CKAOoYNU2Q8b9pjLlIZQvr-Rumd_T5IoHDAd-pY9vwihKmeA/exec';
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.scroll-section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop - window.innerHeight <= 0) {
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on load
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const formData = new FormData(form);

  
  //   try {
  //     const response = await fetch(
  //       'https://script.google.com/macros/s/AKfycbwDhyxTJcER8uwL4dCnc2CKAOoYNU2Q8b9pjLlIZQvr-Rumd_T5IoHDAd-pY9vwihKmeA/exec',
  //       {
  //         method: 'POST',
  //         body: formData,
  //       }
  //     );

  //     if (response.ok) {
  //       setMsgSent(true);
  //       setTimeout(() => {
  //         setMsgSent(false);
  //       }, 5000);
  //       form.reset();
  //     } else {
  //       console.error('Error sending message.');
  //     }
  //   } catch (error) {
  //     console.error('Error sending message:', error.message);
  //   }
  // };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setMsg('Message Sent successfully');
        setTimeout(() => {
          setMsg('');
          window.location.reload(); // Reload the page after showing the success message
        }, 5000);
        form.reset();
      } else {
        console.error('Error sending message.');
      }
    } catch (error) {
      console.error('Error sending message:', error.message);
    }
  };
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.target = '_blank';
    link.download = 'Proteti_cv.pdf';
    link.click();
  };

  return (
    <div>
      <div id="header">
        <div className="container">
          <nav>
          <img src={require('./images/mylogo.png')} alt="logome" height="200" width="200" className="logo" />
          <i className="fa-solid fa-bars" onClick={toggleSideMenu}></i>
            <ul id="sidemenu" className={sideMenuOpen ? 'open' : ''}>
              <li>
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#portfolio">Projects</a>
              </li>
              <li>
                <a href="#achievements">Achievements</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <i
                className="fa-solid fa-circle-xmark"
                onClick={toggleSideMenu}
              ></i>
            </ul>
          
          </nav>


          <div class="header-text">

          <h1>Hi! This is  Proteti Mitra
              {/* <FontAwesomeIcon icon={faHeart} /> */}
            </h1>
            <div class="gap-front"></div>
        <h5>
          <span class="line">I'm a Full stack  Developer</span>
          <span class="line">I'm also an UI/UX Designer</span>
          <span class="line">I'm an OCJA Programmer</span>
        </h5>
      </div>



        
        </div>
      </div>
      <div id="about" className="scroll-section">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
            <img src={require('./images/mee.jpg')} alt="Translator" />

            </div>
            <div className="about-col-2">
              <h1 className="subtitle">About Me</h1>
              {/* <p>
              Computer Science grad skilled in Java and Python, passionate about web development. Tutor with 350+ classes, adept in full stack projects using Java, Spring Boot, React.js, and more. Enthusiastic about open-source, shaping the tech future through collaboration.e.
              </p> */}
              <div className="tab-titles">
                <p
                  className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                  onClick={() => openTab('skills')}
                >
                  Skills
                </p>
                <p
                  className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
                  onClick={() => openTab('experience')}
                >
                  Experience
                </p>
                <p
                  className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                  onClick={() => openTab('education')}
                >
                  Education
                </p>
              </div>
              <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                <ul>
                  <li>
                    <span>Coding</span>
                    <br />
                    Proficient in Problem Solving using Data Structure and Algorithms
                  </li>
                  <li>
                    <span>Full stack Development</span>
                    <br />
                    Enthusiast in Full stack development using NodeJs,ReactJs,ExpressJs
                  </li>
                  
                  <li>
                    <span>Backend Devlopment</span>
                    <br />
                    Working on Backend Frameworks including Django,SpringBoot,MVC
                  </li>
                  
                </ul>
              </div>
              <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
                <ul>
                  <li>
                    <span>Past Internships</span>
                    <br/>
                    Interns at Nagarro and Persistent Systems
                    </li>
                  <li><span>Internships</span><br/>Internship at Virtusa Corporation</li>
                            <li><span>Tutor</span><br/>One of the best reviewed tutors of US students with 350+ classes </li>
                            
                </ul>
              </div>
              <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                <ul>
                  <li>
                    <span>2010-2017</span>
                    <br />
                    Secondary-St.Joseph's Convent Higher Secondary School,Chittaranjan-90%
                  </li>
                  
                            <li><span>2017-2019</span><br/>Higher Secondary-Burnpur Riverside School,Chittaranjan-80% </li>
                            <li><span>2019-2023</span><br/>B.Tech-CSE-Asansol Engineering College -9.11/10</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="skills" className="scroll-section">
        <div className="container">
          <h1 className="subtitle">My Skills</h1>
          <div className="skills-list">
            <div>
              <i className="fa-brands fa-java"></i>
              <h2>Java</h2>
            </div>
            <div>
              <i className="fa-sharp fa-solid fa-code"></i>
              <h2>C</h2>
            </div>
            <div>
                <i className="fa-brands fa-python"></i>
                
                    <h2>  Python</h2>
                
            </div>
            <div>
                <i className="fa-brands fa-html5">  </i>
                
                    <h2>HTML</h2>
            </div>
            <div>
                <i className="fa-brands fa-css3">   </i>
                
                    <h2>CSS</h2>
            </div>
            <div>
                <i className="fa-brands fa-square-js">  </i>
                
                    <h2>JavaScript</h2>
            </div>
            <div>
                <i className="fa-brands fa-react"></i>
                
                    <h2>React</h2>
            </div>
            <div>
                <i className="fa-solid fa-database" ></i>
                
                    <h2>SQL</h2>
            </div>
            <div>
                <i className="fa-solid fa-database" ></i>
                
                    <h2>SpringBoot</h2>
            </div>
            <div>
                <i className="fa-solid fa-database" ></i>
                
                    <h2>Spring</h2>
            </div>
          </div>
        </div>
      </div>
      <div id="portfolio" className="scroll-section">
        <div className="container">
          <h1 className="subtitle">My Projects</h1>
          <div className="work-list">
                <div className="work">
                <img src={require('./images/image1.jpg')} alt="Translator" />
                  <div className="layer">
                    <h3>FOCUS-Learning & Teaching platform</h3>
                    <p>
                      This app enables teaching and learning both where students
                      from anywhere in the world can take classes from Indian tutors
                    </p>
                    <a href="#">
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  </div>
                </div>
                <div className="work">
                  <img src={require('./images/translator.jpeg')} alt="Translator" />
                      <div class="layer">
                          <h3>Voice to speech translator</h3>
                              <p>This app enables the user to translate
                                  from his speech to text</p>
                                  <a href="#">
                                    <FontAwesomeIcon icon={faLink} />
                                  </a>                                
                      </div>
                 </div>

                 <div className="work">
                 <img src={require('./images/image3.jpg')} alt="Translator" />
                            <div class="layer">
                                <h3>Cricket Score</h3>
                                <p>This website shows results of recent cricket scores</p>
                                <a href="https://github.com/ProtetiMitra/CricketScore_PM">
                                <FontAwesomeIcon icon={faLink} /></a>
                            </div>
                        </div>
                        <div class="work">
                        <img src={require('./images/music player.jpeg')} alt="Translator" />
                            <div class="layer">
                                <h3>Music Player</h3>
                                <p>This website allows us to listen to music</p>
                                <a href="https://github.com/ProtetiMitra/musicPlayer">
                                <FontAwesomeIcon icon={faLink} />
                                </a>

                            </div>
                        </div>
                        
                        <div class="work">
                        <img src={require('./images/Netflix.png')} alt="Translator" />
                            <div class="layer">
                                <h3>Netflix Clone</h3>
                                <p>This website is a try to prepare clone for Netflix</p>
                                <a href="https://github.com/ProtetiMitra/Netflix-Clone">
                                <FontAwesomeIcon icon={faLink} /></a>
                            </div>
                        </div>
                        <div class="work">
                        <img src={require('./images/logo.png')} alt="Translator" />
                            <div class="layer">
                                <h3>Facebook Clone</h3>
                                <p>This website is a try to prepare clone for Facebook called Socialbook</p>
                                <a href="https://github.com/ProtetiMitra/SocialBook"><FontAwesomeIcon icon={faLink} /></a>
                            </div>
                        </div>
                        <div class="work">
                        <img src={require('./images/amazon.png')} alt="Translator" />
                            <div class="layer">
                                <h3>Amazon Clone</h3>
                                <p>This website is a try to prepare clone for Amazon</p>
                                <a href="https://github.com/ProtetiMitra/Amazon_Clone"><FontAwesomeIcon icon={faLink} /></a>
                            </div>
                        </div>
                        <div class="work">
                        <img src={require('./images/Twitter.jpeg')} alt="Translator" />
                            <div class="layer">
                                <h3>Twitter Clone</h3>
                                <p>This website is a try to prepare clone for Twitter</p>
                                <a href="https://github.com/ProtetiMitra/Twitter-Clone"><FontAwesomeIcon icon={faLink} /></a>
                            </div>
                        </div>
                        <div class="work">
                        <img src={require('./images/Foodle.png')} alt="Translator" />
                            <div class="layer">
                                <h3>Foodle</h3>
                                <p>This is a fullstack food ordering and delivery app with access given to customers,owners and delivery person</p>
                                <a href=""><FontAwesomeIcon icon={faLink} /></a>
                            </div>
                        </div>
                        
          </div>
          <a href="#" className="btn">
            See more
          </a>
        </div>
      </div>


      <div id="achievements" className="scroll-section">
  <div className="container">
    <h1 className="subtitle">My Achievements</h1>
    <div class="gap"></div>
    <div class='achievements-list'>
      <div class="achievement">
        <div class="horizontal-line right"></div>
        <img src={require('./images/oracle.jpg')} alt="Oracle Certified Java Associate" />
        <p>Proudly bearing the title of an Oracle Certified Java Associate SE 8 Programmer, I am equipped with the expertise to architect robust and efficient Java solutions.</p>
      </div>
      <div class="achievement">
        <div class="horizontal-line left"></div>
        <img src={require('./images/google_python.jpg')} alt="Google Certified Python Programmer" />
        <p>Being recognized as a Google certified Python Programmer is a testament to my relentless pursuit of expertise, propelling me confidently forward in my journey to shape innovative Python-driven solutions.</p>
      </div>
    </div>
    <div class='vertical-line'></div>
    <div class='achievements-list'>
      <div class="achievement">
        <img src={require('./images/tpp.jpg')} alt="Top 10 State-Level Technical Paper Presentation" />
        <div class="horizontal-line right"></div>
        <p>Clinching a spot among the top 10 in a state-level technical paper presentation competition underscores my ability to articulate complex ideas, setting me apart as a skilled communicator in the realm of technology.</p>
      </div>
      <div class="achievement">
        <img src={require('./images/oc.jpg')} alt="Student Organizing Committee" />
        <div class="horizontal-line left"></div>
        <p>Serving as a valued member of the student organizing committee for a state-level technical paper presentation competition, I played a crucial role in orchestrating a seamless event that celebrated innovation and knowledge-sharing.</p>
      </div>
    </div>
  </div>
</div>


<div class="gap"></div>



      <div id="contact" className="scroll-section">
        <div className="container">
        <h1 className="subtitle">Contact Me</h1>
        <div class="gap"></div>
          <div className="row">
          <div className="contact-left">
              <p><FontAwesomeIcon icon={faEnvelopeOpen} /> proteti11aeccse@gmail.com</p>
              <p><FontAwesomeIcon icon={faPhone} /> 7477612348</p>
              <SocialLinks />
              <a href={CV} download="Proteti_cv.pdf" className="btn btn2" onClick={handleDownload}>
              Download CV
                </a>
          </div>
             
            
            <div className="contact-right">
              <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="Name"
                  placeholder="Your name"
                  required
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  name="Message"
                  rows="6"
                  placeholder="Your Message"
                  required
                ></textarea>
                <button type="submit" className="btn btn2">
                  Submit
                </button>
              </form>
              {msgSent && <span id="msg">Message Sent Successfully</span>}
            </div>
            </div>
          </div>
          <div className="copyright">
            <p>
              Copyright @PM 2023{' '}
              <FontAwesomeIcon icon={faHeart} />
            </p>
          </div>
        </div>
      </div>
    
  );
};

export default Portfolio;