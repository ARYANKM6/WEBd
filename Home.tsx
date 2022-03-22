import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItemDivider, IonPage, IonRadio, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import menu from "../assets/menu.svg";
import shopingCart from "../assets/shopping-cart.svg";
import bell from "../assets/bell.svg";
import Group from "../assets/Group.svg";
import Vector from "../assets/Vector.svg";
import phoneCall from "../assets/phone-call.svg";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class='header'>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol size='8.5'>
        <IonImg class='menuIcon' src={menu}></IonImg>
        </IonCol>
        <IonCol size='1.5'>
        <IonImg class='menuIcon' src={shopingCart}></IonImg>
        </IonCol>
        <IonCol >
        <IonImg class='menuIcon' src={bell}></IonImg>
        </IonCol>
        </IonRow>
        </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <IonGrid class='content2 '>
         <IonGrid class='content'>
           <IonRow class='R1 com'>
             About Diana
           </IonRow>
           <IonRow class='R2 com'>
           A platform that looks out for you
           </IonRow>
           <IonRow class='R3 com'>
           Diana empowers you to understand how your body works so you can look and feel your best. 
           </IonRow>
           <IonRow class='line'></IonRow>
           <IonRow class='R4 com'>
           Our Philosophy
           </IonRow>
           <IonRow class='R5 com'>
           Sustainable wellness is a big-picture, inside out approach 
           </IonRow>
           <IonRow class='R6 com'>
           Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness.
           </IonRow>
           <IonRow class='R6 com'>
           That’s why we’ve created an integrated ecosystem of:  
           </IonRow>
           <IonRow class='com  image'>
             <IonImg src={Group}>

             </IonImg>
           </IonRow>
           <IonRow class='R7 com'>
           Consciously formulated products that deliver feel-good results fast
           </IonRow>
           <IonRow class='com image'>
             <IonImg src={Vector}>

             </IonImg>
           </IonRow>
           <IonRow class='R7 com'>
           In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body
           </IonRow>
           <IonRow class='com image'>
             <IonImg src={phoneCall}>

            </IonImg>
           </IonRow>
           <IonRow class='R7 com'>
           In-app consultation portals that connect you with compassionate wellness experts
           
           </IonRow>
           <IonRow class='R8 com'>
           Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday.
           </IonRow>

         </IonGrid>
         </IonGrid>
         <IonGrid class='content4'>
           <IonGrid class='content3'>
          
           <IonRow class='R9 com'>
           What makes us different?
           </IonRow>

           <IonRow class='R10 com'>
           Reimagining and rewiring self-care
           </IonRow>
           
           <IonRow class='R11 com'>
           You care about conscious consumption, and so do we. 
           </IonRow>
           
           <IonRow class='R12 com'>
           When it comes to your health, “good enough” is not good enough. We’re here to flip the script on that narrative because you deserve the best
           </IonRow>
          
           <IonRow class='R13 com'>
           We collaborate with researchers and doctors to 
           </IonRow>
         
           <IonRow class='R14 com'>
           • Help you get granular about your health and self-care with personalized insights, and
           </IonRow>
         
           <IonRow class='R15 com'>
           • Equip you with simple, sustainable products that get the job done
           </IonRow>
         
           <IonRow class='R16 com'>
           No to-the-moon-and-back claims in this neck of the woods.
           </IonRow>
          
           <IonRow class='R17 com'>
           We’re just solving real problems for real people here. 
           </IonRow>
           
           


          </IonGrid>
           </IonGrid>

           <IonGrid class='content5'>
           <IonGrid class='content6'>
          
           <IonRow class='R18 com'>
           Liberate your everyday<br></br>wellness

           </IonRow>

           <IonRow class='R19 com'>
           Shop our self-care products
           </IonRow>
           
           <IonRow class='R20 com'>
           Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get.   

           </IonRow>
           
           
           
           
           
           
           
           
           </IonGrid>
           </IonGrid>
      </IonContent>
    </IonPage>
  );

  





};




export default Home;
