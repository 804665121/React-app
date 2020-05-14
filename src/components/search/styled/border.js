import styled from 'styled-components'
const border = ({ Comp, width = "1px", style = "solid", color = "#ccc", rodius = "10px" }) => {
    const BorderComp = styled(Comp)
        `  border-width:${width};
        border-color:${color};
        border--style:${style};
        border-radius
        `

    return BorderComp
}