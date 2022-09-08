import { Group, Text, Burger, Header, createStyles, MediaQuery, useMantineTheme, Box, Button, ActionIcon, useMantineColorScheme,ThemeIconVariant,ButtonVariant } from '@mantine/core';
import {useState} from 'react';
import { IconBrandVimeo, IconCaretRight, IconSearch, IconArrowRight, IconSettings, IconSun, IconMoonStars } from '@tabler/icons'
import { InputWithButton } from './InputWithButton';
import React from 'react';

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
      }`,
  },
  parentGroupLG: {
    width: '100%',
    height: '100%'
  },
  parentGroupSM: {
    width: '100%',
    height: '100%'
  },
  childGroupLG: {
    width: '250px'
  },
  childGroupSM: {
    width: '100%'
  },
  hiddenGroup: {
    hidden: true
  }
}));



interface headProp {
  op: boolean,
  setOp: (_: (i: boolean) => boolean) => void
}

export function AppHeader({ op, setOp }: headProp) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const icon_variant:ThemeIconVariant="light"
  const button_variant:ButtonVariant="light"
  const theme = useMantineTheme();
  const { classes } = useStyles()
  const [value, setValue] = useState('');
  const data =value.trim().length > 0 && !value.includes('@') ? ['sukima.moe','gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${value}@${provider}`) : [];
  return (
    <Header height={60}>
      <div style={{ height: '100%' }}>
        <Group className={classes.header + " " + classes.parentGroupLG} position='left'>

          <MediaQuery smallerThan={'lg'} styles={{ width: '100%' }}>
            <Group position="apart" className={classes.childGroupLG} >
              <IconBrandVimeo size={20} style={{ margin: '1rem',color:theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black }} />
              <Text sx={{ fontWeight: 600, color:theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black }}>Firm name</Text>
              <MediaQuery largerThan="lg" styles={{ display: 'none'}}>
                <Burger
                  opened={op}
                  onClick={() => setOp((o) => !o)}
                  size="sm"
                  color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black }
                  mr="xl"
                />
              </MediaQuery>
              <MediaQuery smallerThan="lg" styles={{ display: 'none' }}>
                <IconCaretRight size={20} style={{ margin: '1rem',color:theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black  }} />
              </MediaQuery>
            </Group>
          </MediaQuery>

          <MediaQuery smallerThan={'lg'} styles={{ display: 'none' }} >
            <Group position='apart' sx={{ flexGrow: 1 }}>
              <InputWithButton data={data} value={value} onChange={setValue}/>
              <Group spacing={'md'} position={'right'} sx={{ flexGrow: 1 }}>
                <Button variant={button_variant}>Add Sale</Button>
                <Button variant={button_variant}>Add Purchase</Button>
                <ActionIcon size={32} radius="md" color={theme.primaryColor} variant={icon_variant} sx={{}}>
                  <IconSettings size={18} />
                </ActionIcon>
                <ActionIcon size={32} radius="md" color={theme.primaryColor} onClick={() => toggleColorScheme()} variant={icon_variant} sx={{ margin: '0.5rem', marginRight: '2rem' }}>
                  {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoonStars size={18} />}
                </ActionIcon>
              </Group>
            </Group>
          </MediaQuery>
        </Group>
      </div >
    </Header >
  )
}