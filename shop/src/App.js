// import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Detail from './routes/Detail';
import { useNavigate } from 'react-router-dom';

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      {/* 네비게이션 바 */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
            <Nav.Link href="/event">Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 세부경로 라우팅 */}

      <Routes>
        {/* home */}
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Container>
                <Row>
                  {shoes.map((shoe, idx) => {
                    return <Card shoe={shoe} idx={idx + 1} />;
                  })}
                </Row>
              </Container>
            </>
          }
        />
        <Route path="/detail" element={<Detail />} />
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<h4>첫주문 시 양배추즙 서비스</h4>} />
          <Route path="two" element={<h4>생일기념 쿠폰 받기</h4>} />
        </Route>
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <Col sm>
      <div>
        <img src={'/img/shoes' + props.idx + '.jpg'} width="80%" alt="shoes1" />
        <h4>{props.shoe.title}</h4>
        <p>{props.shoe.content}</p>
      </div>
    </Col>
  );
}

function Event() {
  let navigate = useNavigate();

  return (
    <>
      <span
        onClick={() => {
          navigate('one');
        }}
      >
        one
      </span>
      <span
        onClick={() => {
          navigate('two');
        }}
      >
        two
      </span>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
    </>
  );
}

export default App;
