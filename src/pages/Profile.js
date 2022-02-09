import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

import { useState } from "react";
import CreateModifyModal from "../modals/CreateModifyModal";
import { VolunteerContext } from "../contexts/Volunteer";
import moment from "moment";
import { Content, Container, Title } from '../components/styled-components/FormPage'
// import CreateModifyForm from '../modals/CreateModifyForm'

const Info = styled.div`
  .buttondisplayflex {
    display: flex;
  }

  .buttondisplayflex button {
    margin-left: 550px;
  }
  .information h1 {
    font-size: 60px;
    margin-left: 50px;
    color: #0375bb;
    display: flex;
    margin-top: 20px;
  }

  .globalinfo {
    display: flex;
    color: #0375bb;
  }

  .information h2 {
    margin-left: 53px;
    color: #0375bb;
  }

  .information p {
    margin-left: 53px;
  }

  button {
    background-color: orange;
    border-radius: 30px;
    font-size: 20px;
    color: white;
    border: none;
    width: 100px;
    height: 40px;
  }

  .paragraphe1 {
    margin-top: 30px;
    margin-bottom: 50px;
  }

  .paragraphe2 {
  }
`;

const Profile = () => {
  const [createModifyModalVisible, setCreateModifyModalVisible] =
    useState(false);
  const { user } = useContext(VolunteerContext);

  if(!user) {
    return (
      <Container>
      <Sidebar />
      <Content>
        <Title>Sessions</Title>
        <p>Vous n'êtes pas autorisé.e à acceder à la page</p>
      </Content>
    </Container>
    )
  }

  return (
    <Info>
      <div className="globalinfo">
        <Sidebar />
        <div className="information" style={{ marginLeft: 450 }}>
          <h1>
            {user.lastName} {user.firstName}
          </h1>
          <div className="buttondisplayflex">
            <h2>Entreprise: {user.businessName}</h2>
            <button onClick={() => setCreateModifyModalVisible(true)}>
              Modifier
            </button>
          </div>

          <div className="paragraphe1">
            <p>
              Date de début du bénévolat:{" "}
              {moment(user.createdAt).format("DD/MM/YYYY")}
            </p>
            <p>Session: DigiStart/ DigitAll</p>
            <p>Horaires: 20h/ 36h</p>
          </div>
          <div >
            <h2>Infos Personnelles</h2>
            <p>Email: {user.email}</p>
            <p>Mot de passe: xxxxxxxxxxxxxx</p>
            <p>N° de téléphone: {user.telephone}</p>
          </div>
        </div>
      </div>
      <CreateModifyModal
        isOpen={createModifyModalVisible}
        onClose={() => setCreateModifyModalVisible(false)}
      />
    </Info>
  );
};

export default Profile;
