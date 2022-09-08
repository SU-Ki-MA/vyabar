import { Navbar, ScrollArea, createStyles, Button, ActionIcon, MediaQuery, useMantineTheme, useMantineColorScheme, Group , ThemeIconVariant,ButtonVariant} from '@mantine/core';
import { IconSettings,IconSun,IconMoonStars, IconDeviceAnalytics, IconUserSearch, IconPackage, IconReportMoney, IconShoppingCart, IconShare, IconRefresh, IconTool, IconBrandVimeo, IconCaretRight } from '@tabler/icons';
import { InputWithButton } from '../header/InputWithButton';

export type navItems = "Home" | "Parties" | "Items" | "Share" | "Sync/Backup" | "Settings" | navSaleItems | navPurchaseItems | "Sale" | "Purchase"
export type navSaleItems = "Invoice" | "Quotation" | "Payment In" | "Sale Return" | "Estimate"
export type navPurchaseItems = "Purchase Bill" | "Payment Status" | "Purchase Return"



import { LinksGroup, LinksGroupProps } from './NavbarLinksGroup';
import { useState, useEffect } from 'react';


const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
      }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]}`,
    padding:0
  },
}));

interface navPropType {
  opened: boolean,setOp:(_: (i: boolean) => boolean) => void, mainVal: (_: navItems) => void
}

export function NavbarNested({ opened,setOp, mainVal }: navPropType) {
  const [current, setCurrent] = useState<navItems>("Home")
  const [value, setValue] = useState('')
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const icon_variant:ThemeIconVariant="light"
  const button_variant:ButtonVariant="light"
  const data =value.trim().length > 0 && !value.includes('@') ? ['sukima.moe','gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${value}@${provider}`) : [];
  useEffect(() => { mainVal(current) }, [current])
  const navlinksMid: LinksGroupProps[] = [
    {
      icon: IconDeviceAnalytics,
      label: "Home",
      setOp:setOp,
      ctrlFn: setCurrent,
    },
    {
      icon: IconUserSearch,
      label: "Parties",
      setOp:setOp,
      ctrlFn: setCurrent,
    },
    {
      icon: IconPackage,
      label: "Items",
      setOp:setOp,
      ctrlFn: setCurrent,
    },
    {
      icon: IconReportMoney,
      label: "Sale",
      setOp:setOp,
      initiallyOpened: false,
      links: [
        { label: "Invoice" },
        { label: "Quotation" },
        { label: "Payment In" },
        { label: "Estimate" }
      ],
      ctrlFn: setCurrent,
    },
    {
      icon: IconShoppingCart,
      label: "Purchase",
      setOp:setOp,
      initiallyOpened: false,
      links: [
        { label: "Purchase Bill" },
        { label: "Payment Status" },
        { label: "Purchase Return" }
      ],
      ctrlFn: setCurrent,
    }
  ];
  const navlinksEnd: LinksGroupProps[] = [
    {
      icon: IconShare,
      label: "Share",
      setOp:setOp,
      ctrlFn: setCurrent,
    },
    {
      icon: IconRefresh,
      label: "Sync/Backup",
      setOp:setOp,
      ctrlFn: setCurrent,
    },
    {
      icon: IconTool,
      label: "Settings",
      setOp:setOp,
      ctrlFn: setCurrent,
    }
  ]
  const { classes } = useStyles();
  const linksMid = navlinksMid.map((item) => <LinksGroup {...item} key={item.label} />);
  const linksEnd = navlinksEnd.map((item) => <LinksGroup {...item} key={item.label} />);
  return (
    <Navbar hiddenBreakpoint="lg" hidden={!opened} width={{ lg: 250 }} p="md" className={classes.navbar} sx={{borderRight:`1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[4]}`}}>
      <MediaQuery largerThan="lg" styles={{ display: 'none' }}>
        <Navbar.Section>
          <InputWithButton data={data} value={value} onChange={setValue}/>
          <Group spacing={'sm'} sx={{paddingTop:'0.5rem',flexDirection:'row'}}>
            <Button variant={button_variant}>Add Sale</Button>
            <Button variant={button_variant}>Add Purchase</Button>
            <ActionIcon size={32} radius="md" color={theme.primaryColor} variant={icon_variant} sx={{}}>
              <IconSettings size={18} />
            </ActionIcon>
            <ActionIcon size={32} radius="md" color={theme.primaryColor} onClick={() => toggleColorScheme()} variant={icon_variant} sx={{}}>
              {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoonStars size={18} />}
            </ActionIcon>
          </Group>
        </Navbar.Section>
      </MediaQuery>
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{linksMid}</div>
        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
        <div className={classes.linksInner}>{linksEnd}</div>
        </MediaQuery>
      </Navbar.Section>
      <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
        <Navbar.Section className={classes.footer}>
          <div className={classes.linksInner}>{linksEnd}</div>
        </Navbar.Section>
      </MediaQuery>
    </Navbar>
  );
}
