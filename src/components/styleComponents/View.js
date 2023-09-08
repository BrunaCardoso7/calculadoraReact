
import styled from 'styled-components';

const View = styled.div`
    width: 80%;
    height:50px;
    margin-top: 20px;
    background-color: #202124;
    border: 1px solid white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 20px;
    margin-bottom: 10px;
    
`
const Val = styled.span`
    color: white;
    font-size: 20px;
    font-weight: 900;
`
const Resul = styled.span`
    color: white;
    font-size: 40px;
    font-weight: 900;
`
export { 
    View,
    Resul,
    Val
};  