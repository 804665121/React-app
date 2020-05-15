import styled from 'styled-components'

export const HeaderWrap = styled.div`

background:#ee7e2f;
align-items:center;
display:flex;
justify-content:center;
// padding:1rem 0;
ul{
   padding:1rem 0;
    display:flex;
    justify-content:center;
    postition:relative;
}
li{
    flex:1;
    color:#fff;
    padding:.4rem 1rem;
    border:1px solid #fff;
    
}

ul>li:first-child{
    border-right:0;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    transform: translate(0, 0);
    transition:all 0.4s ease-in;
}
ul>li:last-child{
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
}
}
 .actions{
    transform: translate(100, 100);
    // border-radius:1rem;
    background:#fff;
    color:#ee7e2f;
}


`



export const CateWrap=styled.div`

height:100%;
overflow:hidden;
`