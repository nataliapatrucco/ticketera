import styled from "@emotion/styled";


export const Contenedor = styled.div({
  backgroundColor: '#006088',
  position: 'relative',
  left: '75%',
  width: '300px',
  height: '201px',
  display: 'inline-block',
  marginBottom: '16px',
  color: 'white',
  borderRadius: '4px',
  marginRight: '75px',
  paddingRight: '19px'
})

export const UbicacionContainer = styled.div({
  marginLeft: '52.9px',  
  fontFamily: 'Montserrat',
  width: '214px',
  heigth: '16px',
  display: 'inline-block'
  
})

export const IconContainer = styled.div({
  opacity: '90%',
  width: '10px',
  height: '12px',
  float: 'left',

})

export const UbicacionIcon = styled.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover'
})

export const Ubicacion = styled.p({
  fontFamily: 'Montserrat',
  fontSize: '12px',
  width: '222.4px',
  height: '16px',
  margin: 0,
  letterSpacing: '0.4px',
  lineHeight: 1.33,
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal'  
})

export const TicketContainer = styled.div({
  backgroundColor: '#006e9e',  
  width: '265px',
  height: '116px',
  overfloWrap: 'break-word',
  wordWrap: 'break-word',
  hyphens: 'auto',
  textAlign: 'left',
  overflow: 'hidden',
  marginLeft: '16px',
  marginTop: '14.2px',
  top: '68px',
  borderRadius: '4px',
  fontFamily: 'Montserrat',
  fontWeight: 600,
  display: 'inline-block',
  paddingLeft: '8px'
  
})

export const Ticket = styled.div({
  fontFamily: 'Montserrat',
  fontWeight: 600,
  width: '239px',
  height: '48px',
  fontSize: '12px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: '16px',
  letterSpacing: '0.4px',
  marginTop: '8px',
  marginRight: '18px',
  opacity: '90%'
})

export const AlumnContainer = styled.div({
  marginTop: '8px',
  marginLeft: '8px',
  width: '79.2%'
})

export const Alumn = styled.div({
   fontFamily: 'Montserrat',
   fontWeight: 600,
   fontSize: '12px',
   opacity: '90%',
   margingLeft: '52px'
})

export const AssistantContainer = styled.div({
  marginTop: '16px',
  marginLeft: '16px',
})

export const Assistant = styled.div({
  fontFamily: 'Montserrat',
   fontWeight: 600,   
   fontSize: '14px',
   lineHeight: '24px',
   letterSpacing: '0.1px',
   opacity: '90%'
   
})

export const Fotito = styled.img`
  width: ${props => props.size};
  height: ${props => props.size};
  margin-right: ${props => props.margin};
  border-radius: 100%;
  float: left;
`
  




