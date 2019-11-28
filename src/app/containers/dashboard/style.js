import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  backgroundColor: "#091e35"
});

export const Section = styled.section({});

export const SectionProcess = styled.section({
  position: "relative",
  top: "150px",
  right: "690px"
});

export const SectionAnswer = styled.section({
  position: "relative",

  right: "300px"
});

export const Title = styled.h2(
  {
    height: "30px",
    // opacity: "0.9",
    fontFamily: "Montserrat",
    fontSize: "18px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.67",
    letterSpacing: "2px"
    // color: "#ffffff"
  },
  props => ({
    color: props.color,
    width: props.width,
    opacity: props.opacity
  })
);

export const ProcessTitle = styled.h2({
  // width: 266px;
  // font-family: Montserrat;
  // font-size: 18px;
  // font-weight: 500;
  // font-stretch: normal;
  // font-style: normal;
  // line-height: 1.67;
  // letter-spacing: 2px;
  // color: var(--cian);
});
