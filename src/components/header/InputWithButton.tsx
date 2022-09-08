import React from 'react';
import { TextInput, TextInputProps, ActionIcon, useMantineTheme, Autocomplete, AutocompleteProps } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons'
import {ThemeIconVariant} from '@mantine/core'

export function InputWithButton(props: AutocompleteProps) {
  const theme = useMantineTheme();
  const variant:ThemeIconVariant="light"
  return (
    <Autocomplete
      icon={<IconSearch size={18} />}
      radius="md"
      size="md"
      sx={{
        flex: '50%'
      }}
      styles={{
        input:{
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
          color:theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black
        },
        icon:{
          color:theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black
        },
        dropdown:{
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
        }
      }}
      rightSection={
        <ActionIcon size={32} radius="md" color={theme.primaryColor} variant={variant}>
          <IconArrowRight size={18} />
        </ActionIcon>
      }
      placeholder="Search Transactions"
      rightSectionWidth={42}
      {...props}
    />
  );
}