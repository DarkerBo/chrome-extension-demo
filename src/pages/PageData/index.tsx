import React, { useEffect, useState, useCallback } from 'react';
import { Card, Tooltip } from 'antd';
import styles from './index.module.scss';

type PageInfoType = {
  title: string;
  description: string;
  link: string;
}

const PageData: React.FC = () => {

  const [pageInfo, setPageInfo] = useState<PageInfoType>({
    title: '',
    description: '',
    link: ''
  });

  const getPageData = useCallback(() => {
    window.addEventListener('message', ({ data }) => {
      console.log('data: ', data);
      if (data.type !== 'tabsData') return;
      if (!data.response) return;
      const { title, description, link } = data.response;
      setPageInfo(() => ({
        title,
        description,
        link
      }))
    })
  }, [])

  useEffect(() => {
    getPageData();
  }, [getPageData])

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <Card title="当前Web页面信息" style={{ width: 400 }}>
          <div className={styles.item}>
            <Tooltip title={pageInfo.link}>
              <span>地址：{pageInfo.link}</span>
            </Tooltip>
          </div>
          <div className={styles.item}>
            <Tooltip title={pageInfo.title}>
              <span>标题：{pageInfo.title}</span>
            </Tooltip>
          </div>
          <div className={styles.item}>
            <Tooltip title={pageInfo.description}>
              <span>描述：{pageInfo.description}</span>
            </Tooltip>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default PageData;
