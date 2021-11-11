import styled from "styled-components"
import LoginLogo from "../../assets/hamburguer.jpg"

export const Body = styled.div`
background-image: url(${LoginLogo});
max-width: 100vw;
height: 90vh;
`

export const LoginForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 33vw;

h4 {
    text-align: center;
}
img {
    width: 100vw;
}
`

export const SignUpButtonArea = styled.div`
width: 100%;
`

export const InputContainer = styled.div`
height: 100%;
background-color:#e8f0fd;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 35vw;
`