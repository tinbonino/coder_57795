import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Collection from './Collection.jsx'
import Agregar from './Agregar.jsx'
import Actualizar from './Actualizar.jsx'
import Query from './Query.jsx'
import Batch from './Batch.jsx'
import {initializeApp} from "firebase/app"

import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyDjOwob5rBBotejUYS3UH47Ok8sLb4hhR0",
  authDomain: "tienda-20f08.firebaseapp.com",
  projectId: "tienda-20f08",
  storageBucket: "tienda-20f08.appspot.com",
  messagingSenderId: "955911397339",
  appId: "1:955911397339:web:7674ecf8b19392d3df51fe"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    {/* <Agregar/> */}
    {/* <Actualizar/> */}
    <Query/>
    {/* <Collection/> */}
    <Batch/>

  </>,
)
