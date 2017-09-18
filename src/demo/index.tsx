import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.less';

ReactDOM.render(
    <h1>hello world! </h1>,
    document.getElementById('root')
);
const color = {
    color: 'red'
};

interface HelloProps {
    name: string;
}

class HelloMessage extends React.Component<HelloProps, {}> {
    render() {
        return<h1 style={color}>Hello {this.props.name}!</h1>;
    }
}

ReactDOM.render(
    <HelloMessage name="zhxj" />,
    document.getElementById('com')
);
// interface Props {
//     foo: string;
//   }
  
// class MyComponent extends React.Component<Props, {}> {
//     render() {
//         return <span>{this.props.foo}</span>
//     }
// }
// ReactDOM.render(
//     <MyComponent foo="zhxj"/>,
//     document.getElementById('com')
// );
