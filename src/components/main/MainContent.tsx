import { useState } from 'react';
import { Text } from '@mantine/core'
import { navItems } from '../nav/Nav'

interface mainProps {
  currentState: navItems
}

export function MainContent({ currentState }: mainProps) {
  return (
    <><Text>{currentState}</Text></>
  )
}