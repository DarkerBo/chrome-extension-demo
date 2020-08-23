import React from 'react';
import './App.scss';
import { Tabs } from 'antd';
import PageData from './pages/PageData';
import DarkMode from './pages/DarkMode';

const App: React.FC = () => {
  return (
    <div className="App">
      <Tabs type="card">
        <Tabs.TabPane tab="页面与扩展通信" key="1">
          <PageData />
        </Tabs.TabPane>
        <Tabs.TabPane tab="一键暗黑模式" key="2">
          <DarkMode />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default App;
