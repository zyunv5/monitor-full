import React, { ReactDOM, useState } from 'react';
import { Tabs,Input} from 'antd';
const { TabPane } = Tabs;
const TAB_ALL = 'all';
const TAB_FINISHED = 'finished';
const TAB_UNFINISHED = 'unfinished';
const tabMap = {
  [TAB_ALL]: '全部',
  [TAB_FINISHED]: '已完成',
  [TAB_UNFINISHED]: '待完成',
};

function App() {
  const [active, setActiveTab] = useState(TAB_ALL);
  return (
    <>
      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane tab={tabMap[TAB_ALL]} key={TAB_ALL} />
        <TabPane tab={tabMap[TAB_FINISHED]} key={TAB_FINISHED} />
        <TabPane tab={tabMap[TAB_UNFINISHED]} key={TAB_UNFINISHED} />
      </Tabs>
      <div>
        <h1>Todo List</h1>
        <Input/>
        <TodoList />
      </div>
    </>
  );
}
