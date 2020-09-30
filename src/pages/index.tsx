import React from 'react';
import styles from './index.css';
import { Table, Tag, Space } from 'antd';
import { connect } from 'dva';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
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

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

class Index extends React.Component {
  componentDidMount() {
    console.log(this.props)
    this.props.dispatch({type:"Index/getList"})
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
// const mapDispatchToProps = dispatch => {
//   getList = dispatch => {
//     dispatch({ type: 'Index/getList' });
//   };
// };

export default connect(
  mapStateToProps,
)(Index);
