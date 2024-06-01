// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import "./App.css";
// import { Header } from "./components/header/Header";
// import { Faculty } from "./components/pages/about/Faculty";
// import { Contact } from "./components/pages/contact/Contact";
// import { LandingPage } from "./components/pages/landing/LandingPage";
// import { Login } from "./components/pages/login/Login";
// import { Register } from "./components/pages/registration/Register";
// import { Layout } from "./components/layout/Layout";
// import { Notice } from "./components/pages/notice/Notice";
// import Admin from "./components/pages/admin/Admin";
// import {Event} from './components/pages/events/Event'
// import {Academics} from './components/pages/academics/Academics'
// import { AdminLogin } from "./components/pages/login/AdminLogin";
// import { PrivateRoutes } from "./components/routes/PrivateRoutes";
// // import { Forget } from "./components/pages/login/Forget";
// import Forget from './components/pages/login/Forget';
// import { NewPassword } from "./components/pages/login/NewPassword";
// import { CreateEvent } from "./components/pages/events/CreateEvent";

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           path: "",
//           element: <LandingPage />,
//         },
//         {
//           path: "faculty",
//           element: <Faculty />,
//         },
//         {
//           path: "login",
//           element: <Login />,
//         },
//         {
//           path: "register",
//           element: <Register />,
//         },{
//           path:"admin",
//           element:<Admin/>

//         },
//         {
//           path: "contact",
//           element: <Contact />,
//         },
//         {
//           path:"notice",
//           element:<Notice/>
//         },
     
//         // {
//         //   path:"events",
//         //   element:<Event/>
//         // },
//         // {
//         //   path:"academics",
//         //   element:<Academics/>
//         // },
//         {
//           path:"adminlogin",
//           element:<AdminLogin/>
//         },
//         {path:"forget",
//           element:<Forget/>
//         },{
//           path:"newpassword",
//           element:<NewPassword/>
//         },
//         {
//           element:<PrivateRoutes/>,
//           children:[
//             {path:"events", element:<Event/>},
//             {path:"academics",
//             element:<Academics/>},
//             {
//               path:"createevent",
//               element:<CreateEvent/>
//             },
         
//           ]
//       }
//       ],
//     },
//   ]);
//   return (
//     <div className="App">
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;
















import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/Header';
// import  {Newfac}  from './components/pages/faculty/updated faculty/Faculty';
import Newfaculty from "./components/pages/faculty/newfaculty/Newfaculty"
import { Contact } from './components/pages/contact/Contact';
import { LandingPage } from './components/pages/landing/LandingPage';
import { Login } from './components/pages/login/Login';
import { Register } from './components/pages/registration/Register';
import { Layout } from './components/layout/Layout';
import { Notice } from './components/pages/notice/Notice';
import Admin from './components/pages/admin/Admin';
import { Event } from './components/pages/events/Event';
import { Academics } from './components/pages/academics/Academics';
import { AdminLogin } from './components/pages/login/AdminLogin';
import Forget from './components/pages/login/Forget';
import { NewPassword } from './components/pages/login/NewPassword';
import { PrivateRoutes } from './components/routes/PrivateRoutes';
import { CreateEvent } from './components/pages/events/CreateEvent';
import { CreateNotice } from './components/pages/notice/CreateNotice';
import { MnageNotice } from './components/pages/notice/MnageNotice';
import { EditNotice } from './components/pages/notice/EditNotice';
import { Exam } from './components/pages/exam/Exam';
import { CreateExam } from './components/pages/exam/CreateExam';
import ManageQuestions from './components/pages/exam/ManageQuestions ';
import { ExamLogin } from './components/pages/exam/ExamLogin';
import { Result } from './components/pages/exam/Result';
import { Student } from './components/pages/student/Student';
import  {SarchResult}  from './components/pages/student/SarchResult';
import { ContactMail } from './components/pages/admin/ContactMail';
import { MailreReply } from './components/pages/mailreply/MailreReply';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '', element: <LandingPage /> },
        { path: 'faculty', element: <Newfaculty /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'admin', element: <Admin /> },
        { path: 'contact', element: <Contact /> },
        { path: 'notice', element: <Notice /> },
        {
          path: 'events',
          element: <PrivateRoutes />,
          children: [{ path: '', element: <Event /> }],
        },
        {
          path: 'academics',
          element: <PrivateRoutes />,
          children: [{ path: '', element: <Academics /> }],
        },
        { path: 'adminlogin', element: <AdminLogin /> },
        { path: 'forget', element: <Forget /> },
        { path: 'newpassword', element: <NewPassword /> },
        {
          path: 'createevent',
          element: <PrivateRoutes />,
          children: [{ path: '', element: <CreateEvent /> }],
        },
        {
          path: 'createnotice',
          element: <PrivateRoutes />,
          children: [{ path: '', element: <CreateNotice /> }],
        },
        {
          path: 'mnagenotice',
          element: <PrivateRoutes />,
          children: [{ path: '', element: <MnageNotice /> }],
        },
        {
          path: 'editnotice',
          element: <PrivateRoutes />,
          children: [{ path: '', element: <EditNotice /> }],
        },
        ,
        {
          path: 'createexam',
          element: <PrivateRoutes />,
          children: [{ path: '', element: <CreateExam /> }],
        },
        {
          path: 'exam',
          element: <PrivateRoutes />,
          children: [{ path: '', element: <Exam /> }],
        },
        {
          path: 'manageexam',
          element: <PrivateRoutes />,
          children: [{ path: '', element: <ManageQuestions /> }],
        },
        {
          path: 'examlogin',
          element: <PrivateRoutes />,
          children: [{ path: '', element: <ExamLogin /> }],
        },
        {
          path: 'result',
          element: <PrivateRoutes />,
          children: [{ path: '', element: <Result /> }],
        },
        {
          path: 'studentprofile',
          element: <PrivateRoutes />,
          children: [{ path: '', element: <Student /> }],
        },
        {
          path: 'sarchresult',
          element: <PrivateRoutes />,
          children: [{ path: '', element: <SarchResult /> }],
        },
        {
          path: 'contactmail',
          element: <PrivateRoutes />,
          children: [{ path: '', element: <ContactMail /> }],
        },
        {
          path: 'mailreply',
          element: <PrivateRoutes />,
          children: [{ path: '', element: <MailreReply /> }],
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

