import React from 'react';
import styles from './index.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined, AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">修改密码</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">退出</a>
    </Menu.Item>
  </Menu>
);

class Sider extends React.Component {
  handleClick = (e) => {
    console.log('click ', e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        className={styles.slide}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <MailOutlined />
              <span>监控类</span>
            </span>
          }
        >
          <Menu.Item key="1">报错</Menu.Item>
          <Menu.Item key="2">性能上报</Menu.Item>
          <Menu.Item key="3">白屏时间</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      <div className={styles.header}>
        <div className={styles.title}>监控平台</div>
        <div className={styles.user}>
          <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              张三 <DownOutlined />
            </a>
          </Dropdown>
        </div>
      </div>
      <div className={styles.container}>
        <Sider />
        <div className={styles.main}>{props.children}</div>
      </div>
    </div>
  );
};

export default BasicLayout;
