import './css/App.css';
import { useState } from 'react'
import { MantineProvider, AppShell, useMantineTheme, Text, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { NavbarNested, navItems } from './components/nav/Nav'
import { AppHeader } from './components/header/AppHeader'
import { MainContent } from './components/main/MainContent'

function App() {
  const theme = useMantineTheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const [opened, setOpened] = useState(false);
  const [current, setCurrent] = useState<navItems>("Home")
  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <div className="App">
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <AppShell
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
                color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[6],
              },
            })}
            navbar={<NavbarNested opened={opened} mainVal={setCurrent} />}
            navbarOffsetBreakpoint="lg"
            fixed
            header={
              <AppHeader op={opened} setOp={setOpened} />
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
