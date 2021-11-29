import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Navbar, NavbarProps } from 'components/Navbar/Navbar'

export default {
  title: 'Example/Navbar',
  component: Navbar,
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args: NavbarProps) => (
  <Navbar {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
