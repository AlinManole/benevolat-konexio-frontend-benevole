import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import Sidebar from "../components/Sidebar"
import {
  Title,
  Content,
  Container,
} from "../components/styled-components/FormPage"
import { ListSessionsContext } from "../contexts/ListSessions"
import moment from "moment"

import "moment/locale/fr";
import { VolunteerContext } from "../contexts/Volunteer"

import CardSession from "../components/CardSession"


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

const Home = () => {
  const { sessions, getSessions } = useContext(ListSessionsContext);
  const { user } = useContext(VolunteerContext);

  useEffect(() => {
    getSessions();
  }, []);

  if (!user) {
    return (
      <Container>
        <Sidebar />
        <Content>
          <Title>Sessions</Title>
          <p>Vous n'êtes pas autorisé.e à acceder à la page</p>
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Sidebar />
      <Content>
        <Title>Sessions</Title>
        <List>
          {sessions &&
            sessions.length > 0 &&
            sessions.map((session) => {
              const { program, numberOfPlace, adress, startDate, endDate } =
                session;
              const start = moment(startDate).locale("fr").format("DD MMMM");
              const end = moment(endDate).locale("fr").format("DD MMMM");
              return (
                <CardSession
                  site="sessions"
                  key={session._id}
                  programName={program.name}
                  sessionId={session._id}
                  start={start}
                  end={end}
                  numberOfPlace={numberOfPlace}
                  adress={adress}
                />
              );
            })}
        </List>
      </Content>
    </Container>
  )
}

export default Home;