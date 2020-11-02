// https://bobi.ink/2019/08/10/react-hooks/

//维护多个表单
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
