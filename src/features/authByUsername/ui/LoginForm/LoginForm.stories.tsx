import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'

import LoginForm from './LoginForm'

export default {
  title: 'features/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const PrimaryLight = Template.bind({})
PrimaryLight.args = {}
PrimaryLight.decorators = [StoreDecorator({ loginForm: { username: 'admin', password: '123' } })]

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {}
PrimaryDark.decorators = [StoreDecorator({ loginForm: { username: 'admin', password: '123' } }), ThemeDecorator(Theme.DARK)]

export const WithErrorLight = Template.bind({})
WithErrorLight.decorators = [StoreDecorator({ loginForm: { username: 'admin', password: '123', error: 'Error' } })]

export const WithErrorDark = Template.bind({})
WithErrorDark.decorators = [StoreDecorator({ loginForm: { username: 'admin', password: '123', error: 'Error' } }), ThemeDecorator(Theme.DARK)]

export const LoadingLight = Template.bind({})
LoadingLight.decorators = [StoreDecorator({ loginForm: { username: 'admin', password: '123', isLoading: true } })]

export const LoadingDark = Template.bind({})
LoadingDark.decorators = [StoreDecorator({ loginForm: { username: 'admin', password: '123', isLoading: true } }), ThemeDecorator(Theme.DARK)]
