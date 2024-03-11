
import { UIKitProvider } from './ui-kit/themes';
import { Button } from './ui-kit/components/Button/Button';
import { Input } from './ui-kit/components/Input/Input';
import { useTextInput } from './ui-kit/components/Input/useInput';
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
