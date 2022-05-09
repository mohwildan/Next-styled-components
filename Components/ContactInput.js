import styled from 'styled-components'
function ContactInput() {
    return (
        <InputMain>
        <TextInput>Name</TextInput>
        <Input type='text' placeholder='James Bonts'/>
        <TextInput>Email</TextInput>
        <Input type='email' placeholder='JamesBon@gmail.com'/>
        <InputSend>Send</InputSend>
        </InputMain>
    );
}

export default ContactInput;

const InputMain = styled.div`
display: flex;
flex-direction: column;
max-width: 450px;
`
const TextInput = styled.h3`
font-size: clamp(0.8125rem, 0.6923rem + 0.3846vw, 1rem);
color: #333;
font-weight: 600;
`
const Input = styled.input`
border: 1px solid rgba(0,0,0,.2);
padding: 1rem;
border-radius: 10px;
outline: none;

&::placeholder{
    color: #786969;
}
`
const InputSend = styled.button`
align-self: flex-start;
border: none;
background-color: #443466;
color: #fff;
margin-top: 1.3rem;
padding: .5rem 2rem;
border-radius: 5px;
font-weight: 600;
cursor: pointer;
`