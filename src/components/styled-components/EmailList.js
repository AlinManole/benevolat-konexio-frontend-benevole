import React, { useContext } from 'react'
import { ListMessageContext } from "./context/ListMessage"

import styled from "styled-components"

import EmailRow from './EmailRow'

import moment from "moment"
import "moment/locale/fr"


const List = styled.div`
.emailList {
    flex: 1;
    overflow-y: scroll;
    width: 990px;
    margin-left: 50px;
    margin-top: 30px;
    border: solid 1px grey;
    /* scrollbar-width: thin; */
    /* : 50px; */
    /* scrollbar-color: #16A8E0; */
    height: 450px
}

/* .emailList:hover{
    scrollbar-color: #0375BB;
}

.emailList::-webkit-scrollbar {
  width: 20px;
}

/* Track */
.emailList::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
} */

.emailListSettings {
    // position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 4px solid #D3D5D5;
    z-index: 999;
    padding-right: 10px;
}

.checkbox {
    margin-left: 20px;
}
`

///const Message = () => {
    
    
const EmailList = () => {
        
        const { message, getMessage } = useContext(ListMessageContext)

        useEffect(() => {
            getMessage();
        }, []);
        
        if (message === null) return <p>chargement</p>;
        
        <>
            <List>
                {message.map((message) => {


                    const { title, content, createdAt, updatedAt } = message;
                    const created = moment(createdAt).locale("fr").format("llll");
                    
                    return (
                        <div className="emailList_list">
                            <EmailRow
                                title={title}
                                subject="Cours annulé !"
                                description={description}
                                time={created}
                            />
                        </div>
                    ))}}
            </List>
        </>
        );
};


export default EmailList