import { Navbar, Group, Code, ScrollArea, createStyles, Button, Loader, MantineProvider, Paper, Text } from '@mantine/core';
import { TablerIcon, IconDeviceAnalytics, IconUserSearch, IconPackage, IconReportMoney, IconShoppingCart, IconShare, IconRefresh, IconTool, IconBrandVimeo, IconCaretRight } from '@tabler/icons';

export type navItems = "Home" | "Parties" | "Items" | "Share" | "Sync/Backup" | "Settings" | navSaleItems | navPurchaseItems | "Sale" | "Purchase"
export type navSaleItems = "Invoice" | "Quotation" | "Payment In" | "Sale Return" | "Estimate"
export type navPurchaseItems = "Purchase Bill" | "Payment Status" | "Purchase Return"



import { LinksGroup, LinksGroupProps } from './NavbarLinksGroup';
import { useState, useEffect } from 'react';


const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
  },
}));

interface navPropType {
  opened: boolean, mainVal: (_: navItems) => void
}

export function NavbarNested({ opened, mainVal }: navPropType) {
  const [current, setCurrent] = useState<navItems>("Home")
  useEffect(() => { mainVal(current) }, [current])
  const navlinksMid: LinksGroupProps[] = [
    {
      icon: IconDeviceAnalytics,
      label: "Home",
      ctrlFn: setCurrent,
    },
    {
      icon: IconUserSearch,
      label: "Parties",
      ctrlFn: setCurrent,
    },
    {
      icon: IconPackage,
      label: "Items",
      ctrlFn: setCurrent,
    },
    {
      icon: IconReportMoney,
      label: "Sale",
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
      ctrlFn: setCurrent,
    },
    {
      icon: IconRefresh,
      label: "Sync/Backup",
      ctrlFn: setCurrent,
    },
    {
      icon: IconTool,
      label: "Settings",
      ctrlFn: setCurrent,
    }
  ]
  const { classes } = useStyles();
  const linksMid = navlinksMid.map((item) => <LinksGroup {...item} key={item.label} />);
  const linksEnd = navlinksEnd.map((item) => <LinksGroup {...item} key={item.label} />);
  return (
    <Navbar hiddenBreakpoint="lg" hidden={!opened} width={{ lg: 250 }} p="md" className={classes.navbar}>
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{linksMid}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <div className={classes.linksInner}>{linksEnd}</div>
      </Navbar.Section>
    </Navbar>
  );
}
