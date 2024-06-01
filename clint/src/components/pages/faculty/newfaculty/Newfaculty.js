// Faculty.js
import { Container, Row, Col,Card } from 'react-bootstrap';
import React from 'react';
import './Faculty.css';
const Faculty = () => {
  const facultyMembers = [
    {
      name: '	Agnibha Dasgupta',
      info: "	Assistant Professor,M-tech",
      postgraduate: "Post Graduate: 2001, University of Calcutta ",
      undergraduate:"Under Graduate: 1999, University of Calcutta",
      experience:"TOTAL EXPERIENCE: 20 Years",
      image: './teachers/agniva-dasgupta.jpeg' // Replace 'image1.jpg' with your image source
    },
    {
      name: 'Anirban Kundu',
      info: 'professor ,M-tech phd, Ph.D.: PhD (Engg.) in Comp. Sc., Jadavpur University, India',
      postgraduate: "Post Graduate: M.Tech(IT), IIEST Shibpur, India ",
      undergraduate:"TOTAL EXPERIENCE: 20 Years, No of Journal Paper Published: 53, No Conference Paper Published: 66",
      image: './teachers/anirban-kundu.jpeg' // Replace 'image2.jpg' with your image source
    },
    {
      name: 'Anupam Ghosh',
      info: "Professor, Ph.D.: Engineering, Jadavpur University [2013] ",
      postgraduate: "Post Graduate: M. Tech. Computer Sc. and Engineering; M.Sc. in CS, University of Calcutta",
      undergraduate:"Under Graduate: B. Sc. (Honours) in Computer Science, University of Calcutta",
      experience:"TOTAL EXPERIENCE: 20 Years, No of Journal Paper Published: 52, No Conference Paper Published: 40",
      image: './teachers/anupam-ghosh.jpeg' // Replace 'image1.jpg' with your image source
    },
    {
      name: 'Arnab Chakraborty',
      info: 'Assistant Professor',
      postgraduate: "Post Graduate: M-tech in Computer Science and Engineering ",
      undergraduate:"Under Graduate: B-tech in Computer Science and Engineering",
      image: './teachers/arnab-chakraborty.jpeg' // Replace 'image2.jpg' with your image source
    },
    {
      name: 'Chandan Banerjee',
      info: "professor, Ph.D.: [ 2014, Jadavpur University ]",
      postgraduate: "Post Graduate: [ M.Tech (Computer Sc. & Engg.) 2003, University of Calcutta ] ; [ M.Sc ( Computer & Information Sc.",
      undergraduate:"Under Graduate: [ B.Sc (Computer Science Hons.) 1999, University of Calcutta ",
      experience:"TOTAL EXPERIENCE: 21 Years",
      image: './teachers/chandan-banerjee.jpeg' // Replace 'image1.jpg' with your image source
    },
    {
      name: 'Chandra Das',
      info: 'Associate Professor, Ph.D.: PhD in Engineering from Jadavpur University (under guidance of Indian Statistical Institute)',
      postgraduate: "Post Graduate: M.Tech in Computer Sc. & Engg. and M.Sc in Computer Science from University of Calcutta ",
      undergraduate:"Under Graduate: B.Sc in Computer Science from University of Calcutta",
      image: './teachers/chandra-das.jpeg' // Replace 'image2.jpg' with your image source
    },
    {
      name: 'Moujhuri Patra',
      info: "	Associate Professor, Ph.D.: Ph.D in Technology Birla Institute of Technology, Mesra (2015)",
      postgraduate: "Post Graduate: M.Tech in Computer Science and Engineering (2009) Birla Institute of Technology,Mesra",
      undergraduate:"Under Graduate: Mater of Computer Application Birla Institute of Technology, Mesra",
      experience:"TOTAL EXPERIENCE: 19 Years",
      image: './teachers/moujhuri-patra.jpeg' // Replace 'image1.jpg' with your image source
    },
    {
      name: 'Namrata Chowdhury',
      info: 'Assistant Professor',
      postgraduate: "Post Graduate: M. Tech, Jadavpur University",
      undergraduate:"Under Graduate: B. Tech, WBUT",
      image: './teachers/namrata-das.jpeg' // Replace 'image2.jpg' with your image source
    },
    {
      name: 'Nivedita Roy',
      info: "Assistant Professor, Ph.D.: Pursuing",
      postgraduate: "Post Graduate: MTech, CU ",
      undergraduate:"Under Graduate: Btech, Techno India",
      experience:"TOTAL EXPERIENCE: 17 Years",
      image: './teachers/nivedita-ray.jpeg' // Replace 'image1.jpg' with your image source
    },
    {
      name: 'Piyali Bagchi Khatua',
      info: 'professor ,M-tech phd, Ph.D.: PostDoc (Comp. Sc.) in High Performance Computing, Kuang-Chi Institute of Advanced Technology, Shenzhen, P. R. China;PhD (Engg.) in Comp. Sc., Jadavpur University, India',
      postgraduate: "Post Graduate: M.Tech(IT), IIEST Shibpur, India ",
      undergraduate:"TOTAL EXPERIENCE: 20 Years, No of Journal Paper Published: 53, No Conference Paper Published: 66",
      image: './teachers/piyali-khatua.jpeg' // Replace 'image2.jpg' with your image source
    },
    {
      name: 'Piyali Chatterjee',
      info: "Professor and HOD, Ph.D.: [2012, Jadavpur University]",
      postgraduate: "Post Graduate: [ M.Tech (CSE) 2004, University of Calcutta][M.Sc ( Computer & Info Sc) 2002,University of calcutta ",
      undergraduate:"Under Graduate: [B.Sc (Computer Science Hons.) 2000, University of Calcutta]",
      experience:"TOTAL EXPERIENCE: 17 Years",
      image: './teachers/piyali-chatterjee.jpeg' // Replace 'image1.jpg' with your image source
    },
    {
      name: '	Prithwish Das',
      info: 'Assistant Professor',
      postgraduate: "Post Graduate: M.E ",
      undergraduate:"Under Graduate: B.TECH",
      image: './teachers/prithwish-das.jpeg' // Replace 'image2.jpg' with your image source
    },
    {
      name: '	Purbsha Das',
      info: "	Assistant Professor",
      postgraduate: "Post Graduate: M.E. C.S.E., West Bengal University of Technology (In House)",
      undergraduate:"Under Graduate: B.E. C.S.E., University Institute of Technology, Burdwan University.",
      experience:"TOTAL EXPERIENCE: 14 Years",
      image: './teachers/purbasha-das.jpeg' // Replace 'image1.jpg' with your image source
    },
    {
      name: 'Rajkumar Patra',
      info: 'Assistant Professor',
      postgraduate: "Post Graduate: M.Tech in CSE, University of Calcutta ",
      undergraduate:"Under Graduate: B.Tech in CSE, University of Calcutta & B.Sc(H) in Physics, University of Calcutta",
      experience:"TOTAL EXPERIENCE: 8 Years",
      image: './teachers/rajkumar-patra.jpeg' // Replace 'image2.jpg' with your image source
    },
    {
      name: 'Ranu Sarkar',
      info: "	Assistant Professor",
      postgraduate: "Post Graduate: M.Tech, Jadavpur University ",
      undergraduate:"Under Graduate: B.E,University of Burdwan",
      experience:"TOTAL EXPERIENCE: 16 Years",
      image: './teachers/ranu-sarkar.jpeg' // Replace 'image1.jpg' with your image source
    },
    {
      name: 'Riya Majumder',
      info: 'Assistant Professor,Ph.D.: Pursuing, in Computer Science and Engineering department, University of Calcutta',
      postgraduate: "Post Graduate: M. Tech. in Computer Science and Engineering department, University of Calcutta",
      undergraduate:"Under Graduate: B. Tech. in Computer Science and Engineering department, University of Calcutta",
      experience:"TOTAL EXPERIENCE:7 years",
      image: './teachers/riya-majumder.jpeg' // Replace 'image2.jpg' with your image source
    },
    {
      name: 'Runa Chatterjee',
      info: "	Assistant Professor",
      postgraduate: "Post Graduate: M.tech,Calcutta University",
      undergraduate:"Under Graduate: B.tech, MAKAUT(formerly known as West Bengal University of Technology)",
      experience:"TOTAL EXPERIENCE: 16 Years",
      image: './teachers/runa-chatterjee.jpeg' // Replace 'image1.jpg' with your image source
    },
    {
      name: '	Sanjib Bose',
      info: 'Assistant professor',
      postgraduate: "Post Graduate: M. Tech (IT, IIEST Shibpur),MCA (PCMT, MAKAUT)",
      undergraduate:"Under Graduate: BSC(PHYSICS)",
      experience:"TOTAL EXPERIENCE: 13 Years",
      image: './teachers/sanjib-bose.jpeg' // Replace 'image2.jpg' with your image source
    },
    {
      name: 'Saumen Sarkar',
      info: "	Assistant Professor,Ph.D.: Currently pursuing PhD from TIU",
      postgraduate: "Post Graduate: M.E from BIT Meshra, Ranchi",
      undergraduate:"Under Graduate: B.E from Govt Engineering College, MP",
      experience:"TOTAL EXPERIENCE: 26 Years",
      image: './teachers/saumen-sarkar.jpeg' // Replace 'image1.jpg' with your image source
    },
    {
      name: 'Shampa Kundu',
      info: 'Assistant Professor',
      postgraduate: "Post Graduate: M.Tech in S/W Engg. , WEST BENGAL UNIVERSITY OF TECHNOLOGY",
      undergraduate:"Under Graduate: B.tech in IT , WEST BENGAL UNIVERSITY OF TECHNOLOGY",
      experience:"TOTAL EXPERIENCE: 19 Years",
      image: './teachers/shampa-kundu.jpeg' // Replace 'image2.jpg' with your image source
    },
    {
      name: '	Shilpi Bose',
      info: "Assistant Professor,Ph.D.: Pursuing (Taken registration in 2016), Jadavpur University",
      postgraduate: "Post Graduate: M.Tech in Computer Sc. & Engg. and M.Sc in Computer Sc. from University of Calcutta",
      undergraduate:"Under Graduate: B.Sc in Computer Science from University of Calcutta",
      experience:"TOTAL EXPERIENCE: 17 Years",
      image: './teachers/shilpi-bose.jpeg' // Replace 'image1.jpg' with your image source
    },
    {
      name: 'Soumen Swarnakar',
      info: 'Assistant Professor',
      postgraduate: "Post Graduate: M.E. (C.S.T.), BESU (Currently IIEST, Shibpur)",
      undergraduate:"Under Graduate: B. Tech.(C.S.E.), WBUT",
      experience:"TOTAL EXPERIENCE: 17 Years",
      image: './teachers/soumen-swarnakar.jpeg' // Replace 'image2.jpg' with your image source
    },
    {
      name: '	Soumi Ghosh',
      info: "	Assistant Professor",
      postgraduate: "Post Graduate: M.Tech, West Bengal university of Technology",
      undergraduate:"Under Graduate: B.Tech, WBUT",
      experience:"TOTAL EXPERIENCE: 12 Years",
      image: './teachers/soumi-ghosh.jpeg' // Replace 'image1.jpg' with your image source
    },
    {
      name: 'Sourav Dutta',
      info: 'Assistant Professor',
      postgraduate: "Post Graduate: M.Tech",
      undergraduate:"Under Graduate: B.Tech",
      experience:"TOTAL EXPERIENCE: 11 Years",
      image: './teachers/sourav-dutta.jpeg' // Replace 'image2.jpg' with your image source
    },
    // Add more faculty members here
  ];
  return (
    <section>
    <div>
    <div className="faculty-section">
      <h2>OUR FACULTY</h2>
    </div>
    <Container className='section'>  
      <Row>
        {facultyMembers.map((member, index) => (
          <Col md={6} key={index}>
            <Card className="mb-4">
              <Row noGutters>
                <Col md={6}>
                  <Card.Img variant="top" src={member.image} />
                </Col>
                <Col md={6}>
                  <Card.Body className='top-margin'>
                    <Card.Title className='name'>{member.name}</Card.Title>
                    <Card.Text>{member.info}</Card.Text>
                    <Card.Text>{member.academic}</Card.Text>
                    <Card.Text>{member.postgraduate}</Card.Text>
                    <Card.Text>{member.undergraduate}</Card.Text>
                    <Card.Text>{member.experience}</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    
    </div>
    </section>
  );
};

export default Faculty;
