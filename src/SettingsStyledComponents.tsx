import styled from "styled-components";

export const SettingsButton = styled.button`
background: black;
color: white;
width: 36px;
height: 36px;
margin: 1px;
:active {
  background: #333;
}
`;

export const SettingsText = styled.div`
background: #222;
color: white;
height: 36px;
width: 108px;
display: flex;
justify-content: center;
align-content: center;
align-items: center;
margin: 1px;
`;

export const SettingsPanel = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 36px;
`;