// import React from 'react';
// import profile from '../profile.jpg'
// function About() {
//   const containerStyle = {
//     background: 'url("https://images.inc.com/uploaded_files/image/1920x1080/getty_675471868_2000133320009280231_384817.jpg")',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',

//     padding: '40px 0',
//   };

//   const flexContainerStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   };

//   const profileImageStyle = {
//     width: '79%',
//     height: '15%',
//     borderRadius: '50%',
//     objectFit: 'cover',
//   };

// //   https://images.inc.com/uploaded_files/image/1920x1080/getty_675471868_2000133320009280231_384817.jpg
// // https://img.freepik.com/premium-vector/seamless-background-road-with-fields-flowers-grass-mountains-panorama-green-landscape_273525-1064.jpg
//   return (
//     <div style={containerStyle} className=''>
//       <div className="container">
//         <div style={flexContainerStyle}>
//           <div>
//             <h2>About Me</h2>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               Nulla facilisi. Integer id varius purus. Nullam eget lacinia urna,
//               eget ornare ligula. Morbi vel arcu justo.
//             </p>
//           </div>
//           <div>
//             <img
//               src={profile}
//               alt="Profile"
//               style={profileImageStyle}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;




import React from 'react';
import './about.css'; // Import your CSS file for styling
import image from '../profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
function AboutMe() {


    return (
        <div className="abb" id='about' >
            <div className="sc" style={{ backgroundColor: "", padding: "20px" }} >
                <div className="dc" style={{ maxWidth: "1200px", margin: "0 auto" }} >
                    <div className="ac" style={{
                        width: "76%",
                        height: "10%",
                        borderRadius: '50%', display: "flex", alignContent: "center",
                        objectFit: "cover",alignItems:"center"
                    }}>
                        <div>
                            <h2>About Me <FontAwesomeIcon icon={faAddressCard}  /></h2>
                            <p style={{fontFamily:"fantasy",background:"#f8f8f842",fontSize:'large'}}>
                                {/* Hey! there this is Akshit Tomar , a B-Tech Computer Science student at Graphic Era University, Dehradun.Presently I am in my 4th year. I have been working over MERN stack integrated with CI/CD pipelines . My major project is Office-Boy. I have made 8+ live deployed projects over MERN and React JS. I am weel versed with Azure Devops and Azure Application Service . I am active problem solver at Leetcode and I am proficient in Data Structures and Algorithms using JAVA.<br/>Thank You! */}
                                

                                Greetings! I'm Akshit Tomar, a B-Tech Computer Science student at Graphic Era University. In my 4th year, I've specialized in MERN stack development with CI/CD pipelines. Notably, I've creted my major project "Office-Boy" and delivered 5+ live projects using MERN and React JS. My proficiency extends to Azure DevOps and Azure Application Service. As an active problem solver on LeetCode, I excel in Data Structures and Algorithms using Java. Thank you!
                            </p>
                        </div>
                        <div>
                            <img
                                src={image}
                                alt="Profile"
                                style={{
                                    width: "200%",
                                    height: "",
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    marginLeft: "32%"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
