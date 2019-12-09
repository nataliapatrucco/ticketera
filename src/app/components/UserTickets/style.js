import styled from "@emotion/styled";   

export const QuestionStatusContainer = styled.div ({
    margin: '42px 182px 32px 30px',
    height: '36px',
    float: 'left',
    height: '100%'
})

export const QuestionStatus = styled.div`
    display: inline-block;
    border-radius: 4px;
    padding: 6px 16px;
    margin-right: 16px;
    font-family: Montserrat;
    font-size: 18px;
    font-stretch: normal;
    line-height: 1.33;
    letter-spacing: 2px;
    font-weight: 500;
    color: ${props => props.selected ? 'rgba(255, 255, 255, 0.87)' : 'rgba(255, 255, 255, 0.38)'};
    background-color: ${props => props.selected ? 'rgba(255, 255, 255, 0.08)' : '#071c34' } ;
`

// export const QuestionStatus = styled.div({
//     display: 'inline-block',
//     borderRadius: '4px',
//     padding: '6px 16px',
//     marginRight: '16px',
//     fontFamily: 'Montserrat',
//     fontSize: '18px',
//     fontStretch: 'normal',
//     lineHeight: 1.33,
//     letterSpacing: '2px',
//     fontWeight: 500,
//     color: 'rgba(255, 255, 255, 0.38)',
//     backgroundColor: '#071c34',
// }, props => props.selected ({
// }) 
// )

// '&:active': {
//     color:  'rgba(255, 255, 255, 0.87)',
//     backgroundColor: 'rgba(255, 255, 255, 0.08)',
    
// }