import React, {Component} from 'react';
import styled from 'styled-components';

export const Container = styled.div `
width: 100vw;
height: 100vh;
`
export const LandingWrapper = styled.div`
    width:100vw;
    height: 100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    // background: url("./assets/imgs/background.svg") 0px bottom no-repeat;

    // padding-top:5rem;

    // div{
        display:flex;
        flex-direction:column;
    }
   img{
        width:400px;
    }
    #arrow-top{
        margin-top: -53px;
    }
     p{
        padding: 15px 0px;
        font-size: 1.2rem;
        position: relative;
        left: 20px;
     } 
    @media (min-width:320px) and (max-width:428px){
        padding-top:7rem;

        img{
            width:280px !important;
        }
        #arrow-top{
            margin-top: -39px;
        }
        p{
            padding: 20px 0px;
            font-size: 1.15rem;
            position: relative;
            left: 5px;
        }
    }
    @media (min-width: 429px) and (max-width:501px){
        padding-top:6rem;

        img{
            width: 320px !important;
        }
        #arrow-top{
            margin-top: -42px;
            
        }
        #mobile-logo{
            width:285px !important;
        }

    }
`
// export const InnerBackground = styled.img `
//     position: absolute;
//     bottom: 0%;
//     width: 100vw;
   
//     @media  (min-width:320px) and (max-width:428px){
//         top: 40% !important;
//         height: 60vh;
//     }
//     @media (min-width: 429px) and (max-width:501px){
//         top: 42%;
//         height: 58vh;   
//     }
// `

class App extends Component {
    render(){
        return (
            <Container>
                {/* <InnerBackground src={require('./assets/imgs/background.svg')} alt="background"/> */}
                    {/* <img src={require('./assets/imgs/background.svg')} alt="background" /> */}
               

                <LandingWrapper>

                    <div>
                        <img src={require('./assets/imgs/Group.svg')} alt="circle-icon" />
                    </div>

                    
                    <img src={require('./assets/imgs/logo.svg')} alt="title" id="mobile-logo"/> 
                    <p>Coming soon...</p>
                    
                </LandingWrapper>
            </Container>
        )
    }
}

export default App;