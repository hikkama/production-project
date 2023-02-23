import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'

import { Input } from './Input'

export default {
  title: 'shared/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Light = Template.bind({})
Light.args = {
  value: 'Text',
  type: 'text',
  placeholder: 'Placeholder',
  autofocus: true,
}

export const Dark = Template.bind({})
Dark.args = {
  value: 'Text',
  placeholder: 'Placeholder',
  autofocus: true,
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
