import React from 'react';
import logo from './logo.svg';
import './App.css';
//如果要展开配置文件就用npm run eject 命令行，此命令不可逆，不可以转变为原来的状态，且本地文件要和git仓库相同，展开文件前把文件推到仓库中
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         this is a react file...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
