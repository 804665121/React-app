import styled from 'styled-components'

export const ClassifyWarp = styled.div`
 height:100%;
display:flex;
 div:first-child{
     width:4rem;
     margin-bottom:6.875rem;
     >ul{
        height:100%;
        overflow-y:scroll;
         li{
             text-align:center;
             line-height:2.5rem;
             background:#f3f3f3;
         }
         .active{
            background:#fff;
            position:relative;
            
        }.active:after{
            content: "";
            width: 1.5rem;
            height: .1rem;
            background: #ee7e2f;
            display: inline-block;
            position: absolute;
            bottom: 0;
            left: 31%;
        }

     }
    
 }
 
 div:last-child{
     flex:1;
     background:#fff;
     padding:.2rem .1rem;
     >ul{
         display:grid;
         grid-template-columns: repeat(3,1fr);
         flex-wrap:wrap;
         overflow-y:scroll;
         li{
             text-align: center;
             height:3rem;
             line-height:3rem;
             color:#666;
             
         }
     }
 }
 `