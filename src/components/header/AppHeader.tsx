import { Group, Text, Burger, Header, createStyles, MediaQuery, useMantineTheme, Box, Button, ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconBrandVimeo, IconCaretRight, IconSearch, IconArrowRight, IconSettings, IconSun, IconMoonStars } from '@tabler/icons'
import { InputWithButton } from './InputWithButton';

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
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
  const theme = useMantineTheme();
  const { classes } = useStyles()
  return (
    <Header height={60}>
      <div style={{ height: '100%' }}>
        <Group className={classes.header + " " + classes.parentGroupLG} position='left'>

          <MediaQuery smallerThan={'lg'} styles={{ width: '100%' }}>
            <Group position="apart" className={classes.childGroupLG} >
              <IconBrandVimeo size={20} style={{ margin: '1rem' }} />
              <Text sx={{ fontWeight: 600 }}>Firm name</Text>
              <MediaQuery largerThan="lg" styles={{ display: 'none' }}>
                <Burger
                  opened={op}
                  onClick={() => setOp((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <MediaQuery smallerThan="lg" styles={{ display: 'none' }}>
                <IconCaretRight size={20} style={{ margin: '1rem' }} />
              </MediaQuery>
            </Group>
          </MediaQuery>

          <MediaQuery smallerThan={'lg'} styles={{ display: 'none' }} >
            <Group position='apart' sx={{ flexGrow: 1 }}>
              <InputWithButton />
              <Group spacing={'md'} position={'right'} sx={{ flexGrow: 1 }}>
                <Button variant='light'>Add Sale</Button>
                <Button variant='light'>Add Purchase</Button>
                <ActionIcon size={32} radius="md" color={theme.primaryColor} variant="light" sx={{}}>
                  <IconSettings size={18} />
                </ActionIcon>
                <ActionIcon size={32} radius="md" color={theme.primaryColor} onClick={() => toggleColorScheme()} variant="light" sx={{ margin: '0.5rem', marginRight: '2rem' }}>
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