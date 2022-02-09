// import React, { useContext, useEffect } from "react"
// import { useParams } from "react-router-dom"

// import moment from "moment"
// import "moment/locale/fr"
// import { datesGenerator } from "dates-generator"
// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'

// import styled from "styled-components"
// import {
//   Title,
//   Content,
//   Container,
// } from "../components/styled-components/FormPage"
// import { MdOutlineArrowLeft } from "react-icons/md"
// import {
//   ButtonReturn,
//   SubTitle,
// } from "../components/styled-components/CalendarStyle"
// import Sidebar from "../components/Sidebar"
// import CardSession from "../components/CardSession"
// // import CalendarComponent from "../components/CalendarComponent"

// import { ListSessionsContext } from "../contexts/ListSessions";
// import { useState } from "react/cjs/react.development";
// import { VolunteerContext } from "../contexts/Volunteer";

// const months = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];
// const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// const ContainerCalendar = styled.div`
//   width: 300px;
//   border: 1px solid black;
//   margin: 0 auto;
//   box-shadow: 10px 10px 0px black;
// `;

// const MonthText = styled.div`
//   font-size: 26px;
//   font-weight: bold;
//   text-align: center;
// `;

// const MainCalendar = () => {
//   const { id_session } = useParams();
//   const { user } = useContext(VolunteerContext)
//   const { getSession, session } = useContext(ListSessionsContext);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [dates, setDates] = useState([]);
//   const [calendar, setCalendar] = useState({
//     month: selectedDate.getMonth(),
//     year: selectedDate.getFullYear(),
//   });

//   useEffect(() => {
//     getSession(id_session);
//   }, []);
  

//   const getCalendar = () => {
//     setCalendar({
//       // month: moment(session.startDate).month(),
//       // year: moment(session.startDate).year(),
//       month: moment().month(),
//       year: moment().year(),
//     });

//     const body = {
//       month: calendar.month,
//       year: calendar.year,
//     };
//     const { dates, nextMonth, nextYear, previousMonth, previousYear } =
//       datesGenerator(body);

//     setDates([...dates]);
//     setCalendar({
//       ...calendar,
//       nextMonth,
//       nextYear,
//       previousMonth,
//       previousYear,
//     });
//   };

//   const onClickNext = () => {
//     const body = { month: calendar.nextMonth, year: calendar.nextYear };
//     const { dates, nextMonth, nextYear, previousMonth, previousYear } =
//       datesGenerator(body);

//     setDates([...dates]);
//     setCalendar({
//       ...calendar,
//       month: calendar.nextMonth,
//       year: calendar.nextYear,
//       nextMonth,
//       nextYear,
//       previousMonth,
//       previousYear,
//     });
//   };

//   const onClickPrevious = () => {
//     const body = { month: calendar.previousMonth, year: calendar.previousYear };
//     const { dates, nextMonth, nextYear, previousMonth, previousYear } =
//       datesGenerator(body);

//     setDates([...dates]);
//     setCalendar({
//       ...calendar,
//       month: calendar.previousMonth,
//       year: calendar.previousYear,
//       nextMonth,
//       nextYear,
//       previousMonth,
//       previousYear,
//     });
//   };

//   const onSelectDate = (date) => {
//     setSelectedDate(new Date(date.year, date.month, date.date));
//   };

//   if (!user) {
//     return (
//       <Container>
//         <Sidebar />
//         <Content>
//           <Title>Sessions</Title>
//           <p>Vous n'êtes pas autorisé.e à acceder à la page</p>
//         </Content>
//       </Container>
//     );
//   }

//   // console.log(calendar)
//   // console.log(dates)

//   if (!session) {
//     return (
//       <Container>
//         <Sidebar />
//         <Content>
//           <Title>Sessions</Title>
//           <h3>Session n'existe pas</h3>
//         </Content>
//       </Container>
//     );
//   }

//   return (
//     <>
//       <Container>
//         <Sidebar />
//         <Content>
//           <Title>Sessions</Title>
//           <ButtonReturn>
//             <MdOutlineArrowLeft style={{ fontSize: 25 }} />
//             Return
//           </ButtonReturn>
//           <div>
//             <CardSession
//               site="calendar"
//               key={session._id}
//               programName={session.program.name}
//               sessionId={session._id}
//               start={moment(session.startDate).locale("fr").format("DD MMMM")}
//               end={moment(session.endDate).locale("fr").format("DD MMMM")}
//               numberOfPlace={session.numberOfPlace}
//               adress={session.adress}
//             />
//           </div>
//           <SubTitle>Calendar</SubTitle>

//           {/* Calendar component */}
//           <div style={{ width: "100%", paddingTop: 50 }}>
//             <ContainerCalendar>
//               <div style={{ padding: 10 }}>
//                 <div
//                   onClick={onClickPrevious}
//                   style={{ float: "left", width: "50%" }}
//                 >
//                   Previous
//                 </div>
//                 <div
//                   onClick={onClickNext}
//                   style={{ float: "left", width: "50%", textAlign: "right" }}
//                 >
//                   Next
//                 </div>
//               </div>
//               <MonthText>{months[calendar.month]}</MonthText>
//               <div>
//                 <div>
//                   <table style={{ width: "100%" }}>
//                     <tbody>
//                       <tr>
//                         {days.map((day) => (
//                           <td key={day} style={{ padding: "5px 0" }}>
//                             <div
//                               style={{ textAlign: "center", padding: "5px 0" }}
//                             >
//                               {day}
//                             </div>
//                           </td>
//                         ))}
//                       </tr>

//                       {dates.length > 0 &&
//                         dates.map((week) => (
//                           <tr key={JSON.stringify(week[0])}>
//                             {week.map((each) => (
//                               <td
//                                 key={JSON.stringify(each)}
//                                 style={{ padding: "5px 0" }}
//                               >
//                                 <div
//                                   onClick={() => onSelectDate(each)}
//                                   style={{
//                                     textAlign: "center",
//                                     padding: "5px 0",
//                                   }}
//                                 >
//                                   {each.date}
//                                 </div>
//                               </td>
//                             ))}
//                           </tr>
//                         ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//               <div style={{ padding: 10 }}>
//                 Selected Date: {selectedDate.toLocaleString()}
//               </div>
//             </ContainerCalendar>
//           </div>
//         </Content>
//       </Container>
//     </>
//   );
// };

// export default MainCalendar
