import { Story, Meta } from '@storybook/react'

import MediaMatch from 'components/MediaMatch'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: Story = () => (
  <MediaMatch greaterThan="medium">Desktop</MediaMatch>
)

export const Mobile: Story = () => (
  <MediaMatch lessThan="medium">Mobile</MediaMatch>
)
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
