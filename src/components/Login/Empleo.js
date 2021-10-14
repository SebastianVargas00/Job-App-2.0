import React from 'react'
import { Nav, Tab, Table,  Col, Row} from 'react-bootstrap';
import '../../css/App.css';
import '../../css/App.css';

const Empleo= () => {
    return (
<div class="">
<header class="bg-dark py-5" src="">
            <div class="container px-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6">
                        <div class="text-center my-5">
                            <h1 class="display-5 fw-bolder text-white mb-2">Empleos</h1>
                            <p class="lead text-white-50 mb-4">Busque el emplos de Tu Profession!!</p>
                            <form class="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN">
                                
                                <div class="row">
                                    <div class="col">
                                        <input class="form-control form-control-lg" id="emailAddress" type="email" placeholder="Escribe el Empelo que buscas" data-sb-validations="required,email" data-sb-can-submit="no"/>
                                        <div class="invalid-feedback text-white" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                                        <div class="invalid-feedback text-white" data-sb-feedback="emailAddress:email">Empelo no encontrado</div>
                                    </div>
                                    <div class="col-auto"><button class="btn btn-primary btn-lg " id="submitButton" type="submit">Submit</button></div>
                                </div>
                               
                                
                                <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    <section class="py-5 border-bottom" id="features">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first ">
        <Row>
          <Col sm={3}>
            <Nav variant="pills  " className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first" className="">Programacion</Nav.Link>
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
                <Table striped bordered hover variant="light table table-bordered table-hover">
                    <thead>
                      <tr className="table table-hover table-dark">
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
    
</section>
</div>
    )
}

export default Empleo