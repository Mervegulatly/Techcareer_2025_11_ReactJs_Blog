 //rfce
 
 import React from 'react'
 import HeaderComponent from './components/HeaderComponent'
 import MainComponet from './components/MainComponet'
 import FooterComponent from './components/FooterComponent' 
 
 //ROUTER APP COMPONENT
 function RouterApp() {
   return (
     <React.Fragment>
        <HeaderComponent logo="fa fa-apple"/>
        <MainComponet/>
        <FooterComponent/>
     </React.Fragment>
   )
 }
 
 export default RouterApp 
 