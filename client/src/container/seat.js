import React from "react";
import styled from "styled-components";
import "./seat.scss";

const Grid = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: whitesmoke;
  padding: 10px;
  grid-gap: 10px;
`;

const Item = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: tomato;
  }
`;

const Seat = () => {
  return (
    <Grid>
      <Item>1</Item>
      <Item>2</Item>
      <Item>3</Item>
      <Item>4</Item>
      <Item>5</Item>
      <Item>6</Item>
      <Item>7</Item>
      <Item>8</Item>
      <Item>9</Item>
      <Item>10</Item>
      <Item>11</Item>
      <Item>12</Item>
    </Grid>
  );
};

export default Seat;
