import React from "react";
import styled from "styled-components";
import "./seat.scss";

const Grid = styled.div`
  display: grid;
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

class Seat extends React.Component {
  state = {
    seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  };

  onClick = e => {
    alert(e.target.textContent);
  };

  render() {
    const { seats } = this.state;
    return (
      <Grid>
        {seats.map((seat, i) => {
          return (
            <Item key={i} onClick={this.onClick}>
              {seat}
            </Item>
          );
        })}
      </Grid>
    );
  }
}

export default Seat;