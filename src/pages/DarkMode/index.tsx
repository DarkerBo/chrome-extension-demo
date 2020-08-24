import React from 'react';
import { Button } from 'antd';

const DarkMode: React.FC = () => {
  
  /**
   *改变当前页面的背景颜色。
   *
   */
  const changeBackgroundStyle = () => {
    const script = 'document.body.style.filter = "grayscale(1)";';
    // 向页面注入JavaScript代码.
    chrome.tabs.executeScript({
      code: script,
    })
  }

  return (
    <div>
      <Button type="primary" onClick={changeBackgroundStyle}>暗黑模式</Button>
    </div>
  )
}

export default DarkMode;
