// import React from 'react'
// import video from '../pexels2.mp4'
// import './bg.css'
// function Background() {
//     return (
//         <>

//             <div className="fullscreen-bg">
//                 <video className="fullscreen-bg__video" loop autoPlay muted>
//                     <source src={video} type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//                 <div className="fullscreen-bg__content">
//                     {/* <h1 style={{color:""}}>AKSHIT TOMAR</h1>*/}
//                     {/* <h1 className='' style={{marginBottom:"auto",fontSize:"large",fontFamily:"serif"}}><span className="badge bg-light" style={{color:"black"}}>Crafting Remarkable Projects with MERN Magic: Open to Collaborate, Ready to Elevate!</span></h1> */}

//                         <h1 className="fa-solid ">AKSHIT TOMAR</h1>
//                         <h4 style={{ color: "" }}>MERN STACK DEVELOPER</h4>
//                         <h4 style={{ color: "" }}>AZURE APP SERVICES</h4>
//                         <h4 style={{ color: "" }}>AZURE DEVOPS</h4>
//                         <h4 style={{ color: "" }}>REACT DEVELOPER</h4>
//                         <h4 style={{ color: "" }}>BACKEND DEVELOPER</h4>

//                         <div style={{ display: "flex  my-3" }}>
//                             <i className="fa-brands fa-linkedin mx-3 fa-2xl"></i>
//                             <i className="fa-brands fa-square-github mx-3 fa-2xl"></i>
//                             <i className="fa-brands fa-google mx-3 fa-xl"></i>
//                             <i className="fa-solid fa-square-envelope mx-3 fa-2xl"></i>
//                         </div>





//                 </div>
//             </div>


//         </>
//     )
// }

// export default Background








// import React, { useState, useEffect } from 'react';
// import video from '../pexels2.mp4';
// import './bg.css';

// function Background() {
//   const headings = [
//     'MERN STACK DEVELOPER',
//     'AZURE APP SERVICES',
//     'AZURE DEVOPS',
//     'REACT DEVELOPER',
//     'BACKEND DEVELOPER',
//   ];
//   const icons = [
//     "fa-solid fa-laptop",
//     'AZURE APP SERVICES',
//     'AZURE DEVOPS',
//     "fa-brands fa-react fa-spin",
//     "fa-brands fa-node-js",
//   ];

//   const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
//   const [currenticon, setcurrenticon] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentHeadingIndex((prevIndex) =>
//         (prevIndex + 1) % headings.length
//       );
//       setcurrenticon((prevIndex) =>
//         (prevIndex + 1) % headings.length
//       );
//     }, 3000); // Adjust the interval as needed (3000ms = 3 seconds)

//     return () => clearInterval(interval);
//   }, []);






//   return (
//     <div className="fullscreen-bg">
//       <video className="fullscreen-bg__video" loop autoPlay muted>
//         <source src={video} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="fullscreen-bg__content">
//         <h1 className="fa-solid">AKSHIT TOMAR</h1>
//         <div style={{display:"flex"}}>
//         <div className="fade-in-heading-container my-3" >
//           {headings.map((heading, index) => (
//             <h4
//               key={index}
//               style={{ color: "", opacity: currentHeadingIndex === index ? 1 : 0,lineHeight:"0" }}
//               className={currentHeadingIndex===index?"fade-in-heading fa-fade":"d-none"}
//             >
//               {heading}
//             </h4>
//           ))}
//         </div>
//         {/* <div>
//         <i className={currenticon}></i>
//         </div> */}
//         </div>


//         <div style={{ display: "flex" }} className='my-3'>
//           <i className="fa-brands fa-linkedin mx-3 fa-2xl"></i>
//           <i className="fa-brands fa-square-github mx-3 fa-2xl"></i>
//           <i className="fa-brands fa-google mx-3 fa-xl"></i>
//           <i className="fa-solid fa-square-envelope mx-3 fa-2xl"></i>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Background;







import React, { useState, useEffect } from 'react';
import video from '../pexels2.mp4';
import './bg.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop,faPalette,faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMicrosoft,faReact,faNodeJs,faLinkedin,faSquareGithub,faInstagram} from '@fortawesome/free-brands-svg-icons'
function Background() {
  const headings = [
    'MERN STACK DEVELOPER',
    'AZURE APP SERVICES',
    'REACT DEVELOPER',
    'AZURE DEVOPS ',
    'BACKEND DEVELOPER',
    'UI DESIGNER'
  ];
  const icons = [
    faLaptop,
    faMicrosoft,
    faReact,
    faMicrosoft,
    faNodeJs,
    faPalette,
    ]


  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [currenticons, setcurrenticons] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) =>
        (prevIndex + 1) % headings.length
      );
      setcurrenticons((prevIndex) =>
        (prevIndex + 1) % icons.length
      );
    }, 2500); // Adjust the interval as needed (3000ms = 3 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fullscreen-bg">
      <video className="fullscreen-bg__video" loop autoPlay muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="fullscreen-bg__content">
        <h1 className="fa-solid">AKSHIT TOMAR</h1>


        <div style={{ display: "flex" }}>
          <div className="fade-in-heading-container">
            {headings.map((heading, index) => (
              <h4
                key={index}
                style={{ color: "", opacity: currentHeadingIndex === index ? 1 : 0 }}
                className={currentHeadingIndex === index ? "fade-in-heading fa-fade" : "d-none"}
              >
                {heading}&nbsp;
                {/* <i
                style={{ color: "", opacity: currentHeadingIndex === index ? 1 : 0 }}
                className={icons[index]}
              ></i> */}
              <FontAwesomeIcon icon={icons[index]}  spin={index===2} />
              </h4>

              
            ))}
          </div>
          
         
          
        </div>

        <div style={{ display: "flex", cursor :"pointer"}}>
        <a href="https://www.linkedin.com/in/akshit-tomar-7b6a77220/" className='mx-3' target="_blank"  rel="noopener noreferrer" style={{color:"white"}}>
       <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
      </a>
      <a className='mx-3' href="https://github.com/akshittomar" target="_blank" rel="noopener noreferrer" style={{color:"white"}}> 
         <FontAwesomeIcon icon={faSquareGithub} size='2xl'/> </a>
          
          <a className='mx-3' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{color:"white"}}>
            <FontAwesomeIcon icon={faInstagram} size='2xl' />
          </a>

          <a className='mx-3' href="mailto:akshitt125@gmail.com" target="_blank" rel="noopener noreferrer" style={{color:"white"}}>
            <FontAwesomeIcon icon={faSquareEnvelope} size='2xl' />
            </a>
          
        </div>
      </div>
    </div>
  );
}

export default Background;
