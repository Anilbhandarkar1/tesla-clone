import React from "react";
import styled from "styled-components";

function Section() {
  return (
    <Wrapn>
      <div style={{ height: "100%" }}>height</div>
    </Wrapn>
  );
}

export default Section;

const Wrapn = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  /* background-color: orange; */
  background: url("../assets/images/model-s.jpg");
`;
