
import { UIKitProvider } from './ui-kit/themes';
import { Button } from './ui-kit/component/Button/Button';
import { Input } from './ui-kit/component/Input/Input';
import { useTextInput } from './ui-kit/component/Input/useInput';
import { useState } from 'react';
import { ThemeMode } from './ui-kit/themes/themes';
import { useStyles } from './styles';

function App() {
  const {value, onChange} = useTextInput('Some text')
  const [theme, setTheme] = useState<ThemeMode>('light');
  const cls = useStyles({theme});

  const onThemeSwitch = () => {
    if(theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  return (
    <UIKitProvider theme={theme}>
      <div>
        <Input value={value} onChange={onChange} type='text' className={cls.inputWrapper}/> 
        <Button onClick={onThemeSwitch} className={cls.btn}>Change theme</Button>
      </div>
    </UIKitProvider>
  );
}

export default App;
