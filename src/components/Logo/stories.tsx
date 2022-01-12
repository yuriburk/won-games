import { Story, Meta } from '@storybook/react'

import Logo, { LogoProps } from 'components/Logo'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const Default: Story<LogoProps> = args => <Logo {...args} />
