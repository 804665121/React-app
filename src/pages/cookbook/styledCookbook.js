import styled from 'styled-components'
export const HeaderWarp = styled.div`
height:1.6rem;
background:#ee742f;
color:#fff;
text-align:center;
line-height:1.6rem;
`
export const HotCateWrap = styled.div`
header{
    line-height:2rem;
    background:#fff;
    padding-left:1rem;
    border-bottom:3px solid #ccc;
}


.item{
    padding-top:1rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    height:5.1rem;
   
    img{
        border-radius: .5rem;
        width:70%;
        height:100%;
        object-fit: cover;
    }
    span{
        margin-top:.05px;
    }
}
`


export const HorListWarp = styled.div`
background:#fff;
header{
    line-height:2rem;
    background:#fff;
    padding-left:1rem;
}
>div{
    display:grid;
    grid-template-columns: repeat(2,1fr);
    figure{
       margin:1rem;
       
    }
    h3,p{
        margin:0;
        padding:0;
        font-weight:500;
    }
    p{
        
        overflow:hidden; 
        text-overflow:ellipsis;
        display:-webkit-box; 
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2; 
    }
    img{
        width:100%;
        object-fit: cover;

    }
    
    
}
`