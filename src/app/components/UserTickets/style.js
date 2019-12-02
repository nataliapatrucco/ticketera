import styled from "@emotion/styled";
import { Z_BLOCK } from "zlib";

export const QuestionStatusContainer = styled.div ({
    width: '710px',
    height: '36px',
    float: 'left'
})

export const QuestionStatus = styled.div({
    display: 'inline-block',
    borderRadius: '4px',
    padding: '6px 16px',
    marginRight: '16px',
    fontFamily: 'Montserrat',
    fontSize: '18px',
    fontStretch: 'normal',
    lineHeight: 1.33,
    letterSpacing: '2px',
    fontWeight: 500,
    color: 'rgba(255, 255, 255, 0.38)',
    '&:hover': {
        color:  'rgba(255, 255, 255, 0.87)',
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        
    }
})
