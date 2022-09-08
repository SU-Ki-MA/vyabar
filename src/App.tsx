import './css/App.css';
import { useState } from 'react'
import { MantineProvider, AppShell, useMantineTheme, Text, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { NavbarNested, navItems } from './components/nav/Nav'
import { AppHeader } from './components/header/AppHeader'
import { MainContent } from './components/main/MainContent'
import { ColorSlider } from '@mantine/core/lib/ColorPicker/ColorSlider/ColorSlider';

function App() {
  const theme = useMantineTheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const [opened, setOpened] = useState(false);
  const [current, setCurrent] = useState<navItems>("Home")
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    colorScheme==='dark'?theme.primaryColor='dark':theme.primaryColor='blue';
    theme.primaryShade={
      light:9,
      dark:9
    }
  };
  return (
    <div className="App">
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme:colorScheme }} withGlobalStyles withNormalizeCSS>
          <AppShell
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
                color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[6],
              },
            })}
            navbar={<NavbarNested opened={opened} setOp={setOpened} mainVal={setCurrent} />}
            navbarOffsetBreakpoint="lg"
            fixed
            header={
              <AppHeader op={opened} setOp={setOpened}/>
            }
          >
            <MainContent currentState={current} />
          </AppShell>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  )
}

export default App
