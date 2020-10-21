import React from 'react';
import styles from './index.css';
import { Table, Tag, Space } from 'antd';
import { connect } from 'dva';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: any) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: any[]) => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: any, record: { name: React.ReactNode }) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [];

class Index extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className={styles.container}>
        <span>报错</span>
        <div className={styles.container_search}></div>
        <div className={styles.container_table}>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ ...Index }) => {
  return {
    ...Index,
  };
};

const mapDispatchToProps=(dispatch)=>{
  return {
    data:dispatch({type:"Index/getData"})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index);
