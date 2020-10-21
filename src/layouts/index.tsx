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
  handleClick = (e:any) => {
    console.log('click ', e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 200 }}
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
              <span>页面性能监控</span>
            </span>
          }
        >
          <Menu.ItemGroup key="g1" title="监控">
            <Menu.Item key="1">JS错误监控</Menu.Item>
            <Menu.Item key="2">API接口监控</Menu.Item>
            <Menu.Item key="3">日志详情</Menu.Item>
            <Menu.Item key="4">用户轨迹</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="性能">
            <Menu.Item key="5">页面管理</Menu.Item>
            <Menu.Item key="6">性能指标</Menu.Item>
            <Menu.Item key="7">报警服务</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="统计报表">
          <Menu.Item key="8">大盘走势</Menu.Item>
          <Menu.Item key="9">地域</Menu.Item>
          <Menu.Item key="10">运营商</Menu.Item>
          <Menu.Item key="11">浏览器</Menu.Item>
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
