import styled from "styled-components";


export const Img=styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 4px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover {
  transform: scale(1.03);
  cursor: zoom-in;
}
 `

 /*
 "&:hover": {
      background: "#efefef"
    },
    "&:last-child": {
      borderRight: "solid 1px #cccccc"
    }*/