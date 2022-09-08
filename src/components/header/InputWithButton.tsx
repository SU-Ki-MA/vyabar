import React from 'react';
import { TextInput, TextInputProps, ActionIcon, useMantineTheme } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons'

export function InputWithButton(props: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <TextInput
      icon={<IconSearch size={18} />}
      radius="md"
      size="md"
      sx={{
        flex: '50%'
      }}
      rightSection={
        <ActionIcon size={32} radius="md" color={theme.primaryColor} variant="light">
          <IconArrowRight size={18} />
        </ActionIcon>
      }
      placeholder="Search Transactions"
      rightSectionWidth={42}
      {...props}
    />
  );
}