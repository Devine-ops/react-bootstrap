import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';


import img1 from '../assets/images/img1.jpg'
export default function AppAbout() {
    const now = 60;
    const now2 = 30;
    const now3 = 80;
    return (

        <section id='about' className='block about-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Sobre Nós</h2>
                    <div className='buntitle'>
                       - Saiba mais sobre nós -
                    </div>
                </div>
                <Row>
                    <Col sm={6}>
                        <Image src={img1} />
                    </Col>
                    <Col sm={6}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor.</p>
                        <div className='progress-block'>
                            <h4>HTML/CSS</h4>
                                <ProgressBar now={now} label={`${now}%`} />
                        </div>        
                        <div className='progress-block'>   
                            <h4>NODE.JS</h4>
                                <ProgressBar now={now2} label={`${now2}%`} />
                        </div>
                        <div className='progress-block'>     
                            <h4>JavaScript</h4>
                                <ProgressBar now={now3} label={`${now3}%`} />
                        </div>
                        
                    </Col>
                    
                </Row>
                
            </Container>
        </section>
    )

}