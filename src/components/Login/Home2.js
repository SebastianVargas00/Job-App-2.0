import React from 'react'
import { Nav, Tab, Table,  Col, Row} from 'react-bootstrap';

import '../../css/App.css';
import '../../css/App.css';

const Home2= () => {
    return (
<div class="">
<header class="bg-dark py-5">
            <div class="container px-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6">
                        <div class="text-center my-5">
                            <h1 class="display-5 fw-bolder text-white mb-2">Bienvenido Vancate</h1>
                            <p class="lead text-white-50 mb-4">Que desea hacer en nuestro sitio web?</p>
                            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Ver empleos</a>
                                <a class="btn btn-outline-light btn-lg px-4" href="#!">Buscar empleos</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section class="py-5 border-bottom" id="features">
            <div class="container px-5 my-5">
                <div class="row gx-5">
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-collection"></i></div>
                        <h2 class="h4 fw-bolder">Seguridad</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a class="text-decoration-none" href="#!">
                            Call to action
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>
                        <h2 class="h4 fw-bolder">Confianza</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a class="text-decoration-none" href="#!">
                            Call to action
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                    <div class="col-lg-4">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-toggles2"></i></div>
                        <h2 class="h4 fw-bolder">Oportunidad</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a class="text-decoration-none" href="#!">
                            Call to action
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <div className="jobs">
          
          <div className="Container_busqueda">
          <div className="busqueda">
            <div>
              <input className="form-control txt" type="text"></input>
            </div>
            <div style={{marginRight: "10px"}}>
              <button className="btn btn-outline-primary" variant="outline-primary">Buscar</button>
            </div>
            <div>
              <button className="btn btn-primary btn-job" href="/src/pages/New_Job.js">post a job</button>
            </div>
          </div>
        </div>

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Programacion</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Diseño</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="thrid">Mecanica</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Table striped bordered hover variant="light">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Localizacion</th>
                        <th>Posicion</th>
                        <th>Empresa</th>
                      </tr>
                   </thead>
                   <tbody>
                      
                   </tbody>
                </Table>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Table striped bordered hover variant="light">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Localizacion</th>
                      <th>Posicion</th>
                      <th>Empresa</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                  </tbody>
                </Table>
              </Tab.Pane>
              <Tab.Pane eventKey="thrid">
                <Table striped bordered hover variant="light">
                  <thead>
                  <tr>
                      <th>#</th>
                      <th>Localizacion</th>
                      <th>Posicion</th>
                      <th>Empresa</th>
                    </tr>
                  </thead>
                </Table>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
</div>
    )
}

export default Home2