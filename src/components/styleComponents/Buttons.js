import styled from 'styled-components';
const Conteiner = styled.div`
    display: grid;
    grid-template-columns: 60px 60px 60px 60px;
    gap: 10px;
`
const ButtonNum = styled.button`
    width:60px;
    height:60px;
    border-radius: 1em;
    border: none;
    background-color: #3c4043;
    color: white;
    box-shadow: 0 0 2px black;
    cursor: pointer;
    &:hover{
        cursor: pointer;
        background-color: #2E2E2E;
    }
`
const ButtonsOper = styled(ButtonNum)`
    background-color: #70757a;
    &:hover{
        cursor: pointer;
        background-color: #6E6E6E;
    }
`
const ButtonEqu = styled(ButtonNum)`
    background-color: #FF8000;
    &:hover{
        cursor: pointer;
        background-color: #DF7401;
    }
`
export{
    ButtonNum,
    Conteiner,
    ButtonsOper,
    ButtonEqu
}