import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import { Title, Content, Container } from "../components/styled-components/FormPage";
import { ListSessionsContext } from "../context/ListSessions";

const List = styled.div`
  margin-top: 22px;
  height: calc(100vh - 135px);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    background: #16a8e0;
    border-radius: 9999px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #0375bb;
    border-radius: 9999px;
  }
`;

const CardSessions = styled.div`
  /* background-color: #e9e9e9; */
  padding: 15px 20px;
  border-radius: 28px;
  margin-bottom: 20px;
  margin-right: 10px;
  color: black;

  &:hover {
    background-color: ${(props) =>
      props.session === "DigitAll" ? "#F6BC4D" : "#16A8E0"};
  }
`;

const CardTitle = styled.p`
  font-size: 28px;
`;

const CardInfo = styled.p`
  font-size: 16px;
`;

const Home = () => {
  const { sessions, getSessions } = useContext(ListSessionsContext);

  useEffect(() => {
    getSessions();
  });

  console.log(sessions)

  return (
    <Container>
      <Sidebar />
      <Content>
        <Title>Sessions</Title>
        <List>
          {/* {sessions && sessions.lenght > 0 && ( */}
            <CardSessions session="DigitAll">
              <Link to="/" className="link link-card">
                <CardTitle>1 Janvier - 3 Février</CardTitle>
                <CardInfo>Place disponibles: 5</CardInfo>
                <CardInfo>Lieu: Paris</CardInfo>
                <CardInfo>Sessions: DigitAll</CardInfo>
              </Link>
            </CardSessions>
         {/* )}  */}
        </List>
      </Content>
    </Container>
  );
};

export default Home;
