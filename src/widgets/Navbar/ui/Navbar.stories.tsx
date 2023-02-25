import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'

import { Navbar } from './Navbar'

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  decorators: [StoreDecorator({ user: {} })],
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const LoginedLight = Template.bind({})
LoginedLight.decorators = [StoreDecorator({ user: { authData: {} } })]

export const LoginedDark = Template.bind({})
LoginedDark.decorators = [StoreDecorator({ user: { authData: {} } }), ThemeDecorator(Theme.DARK)]
