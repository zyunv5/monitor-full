// https://bobi.ink/2019/08/10/react-hooks/

//useInfiniteList 实现无限加载列表
import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
  useContext,
  FC,
} from 'react';
import { message } from 'antd';

const returnEmptyArray = () => []

function useInfiniteList<T>(fn:(params:{offset:number;pageSize:number;list:T[]})=>Promise<T[]>,
pageSize:number=20){
  const [list,setList]=useState<T[]>(returnEmptyArray)
  //列表是否全部加载完毕
  const [hasMore,setHasMore,hasMoreRef]=useRefState(true)
  //列表为空
  const [empty,setEmpty]=useState(false);
  const promise
}

const ThemeContext = React.createContext<object>({});
const ThemeProvider: FC<{ theme: object }> = props => {
  return <ThemeContext.Provider value={props.theme}>{props.children}</ThemeContext.Provider>;
};
const theme = {
  primary: '#000',
  secondary: '#444',
};
function useTheme<T extends object>(): T {
  return useContext(ThemeContext)
}

function HookDemo() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi obcaecati officiis autem pariatur temporibus aspernatur a, in, numquam eveniet perferendis vero asperiores voluptatum accusamus ducimus incidunt voluptate, magnam id aut!</span>
        </div>
      </ThemeProvider>
    </>
  );

  const Button: FC = props => {
    const t = useTheme<typeof theme>();
    const style = {
      color: t.primary,
    };
    return <button style={style}>{props.children}</button>;
  };
}
export default HookDemo;
