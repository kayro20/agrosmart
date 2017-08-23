import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Button as ReactstrapButton } from 'reactstrap';
import Header from 'components/header';

const Button = styled(ReactstrapButton)`
${(props) => `
  &.btn {
    border: 1px solid purple;

    &.btn-success {
      background-color: ${props.theme.$color};
    }
  }
`}
`

// Create a <Title> react component that renders an <h1> which is centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.color || "red"};
  &.light { font-weight: inherit; }
  &.bold { font-weight: 600; }
`;

// Create a <Wrapper> react component that renders a <section> with some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toggle: false,
      color: "white",
      theme: {'$color': 'purple'},
    }
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    var obj = {'abc': 'ed'};
    console.log(obj['abc']);
    var custom = document.getElementById('color').value;
    this.setState({ toggle: !this.state.toggle, color: custom, theme: {'$color': custom} });
  }

  render() {
    return (
        <ThemeProvider theme={this.state.theme}>
        <Wrapper>
          <Header theme={this.state.theme}/>
          <Title color={this.state.color} className={this.state.toggle ? "light" : "bold"}>Hello World, this is my first styled component!</Title>
          <div><input id="color" placeholder="color here"></input></div>
          <Button className="dropdown-toggle" color="success" onClick={this.toggleState}>Toggle typography {this.state.toggle ? "heavy" : "light"}</Button>
        </Wrapper>
      </ThemeProvider>
    );
  }
}
