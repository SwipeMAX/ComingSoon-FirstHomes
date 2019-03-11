import React, {Component} from 'react';
import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    min-height:100vh;
    max-height:100vh;
`
export const LandingWrapper = styled.div`
    width:100%
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-top:5rem;

    div{
        display:flex;
        flex-direction:column;
    }
    div img{
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
export const InnerBackground = styled.div `
    position: absolute;
    top: 50%;
    width: 100%;
    z-index: -1;
    overflow: hidden;
    height: 50vh;
     .second{
         position:relative;
         top: -53px;
     }
    @media  (min-width:320px) and (max-width:428px){
        top: 40% !important;
        height: 60vh;
    }
    @media (min-width: 429px) and (max-width:501px){
        top: 42%;
        height: 58vh;   
    }
`

class App extends Component {
    render(){
        return (
            <Container>
                <InnerBackground>
                    <img src={require('./assets/imgs/background.svg')} alt="background" />
                    <img src={require('./assets/imgs/second-bg.svg')} alt="background" className="second"/>
                </InnerBackground> 

                <LandingWrapper>

                    <div>
                        <img src={require('./assets/imgs/circle-icon.svg')} alt="circle-icon" />
                        <img src={require('./assets/imgs/arrow-polygon.svg')} alt="polygon" id="arrow-top"/>
                    </div>

                    
                    <img src={require('./assets/imgs/logo.svg')} alt="title" id="mobile-logo"/> 
                    <p>Coming soon...</p>
                    
                </LandingWrapper>
            </Container>
        )
    }
}

export default App;