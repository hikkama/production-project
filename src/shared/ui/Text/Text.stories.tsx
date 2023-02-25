import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'

import { Text, TextTheme } from './Text'

export default {
  title: 'shared/Text',
  component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Main = Template.bind({})
Main.args = {
  title: 'Main title',
  description: 'Some description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium eius accusamus nesciunt suscipit vel aperiam ducimus sit iure molestias id laudantium corrupti voluptatibus, commodi minima voluptatum, voluptates doloremque magni! Itaque expedita cumque nihil voluptatibus dolorum nulla dignissimos optio nam aliquid, labore quae dolorem autem, est quam sequi illo neque pariatur.',
}

export const Error = Template.bind({})
Error.args = {
  theme: TextTheme.ERROR,
  title: 'Main title',
  description: 'Some description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium eius accusamus nesciunt suscipit vel aperiam ducimus sit iure molestias id laudantium corrupti voluptatibus, commodi minima voluptatum, voluptates doloremque magni! Itaque expedita cumque nihil voluptatibus dolorum nulla dignissimos optio nam aliquid, labore quae dolorem autem, est quam sequi illo neque pariatur.',
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
  title: 'Main title',
}

export const OnlyDescription = Template.bind({})
OnlyDescription.args = {
  description: 'Some description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium eius accusamus nesciunt suscipit vel aperiam ducimus sit iure molestias id laudantium corrupti voluptatibus, commodi minima voluptatum, voluptates doloremque magni! Itaque expedita cumque nihil voluptatibus dolorum nulla dignissimos optio nam aliquid, labore quae dolorem autem, est quam sequi illo neque pariatur.',
}

export const MainDark = Template.bind({})
MainDark.args = {
  title: 'Main title',
  description: 'Some description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium eius accusamus nesciunt suscipit vel aperiam ducimus sit iure molestias id laudantium corrupti voluptatibus, commodi minima voluptatum, voluptates doloremque magni! Itaque expedita cumque nihil voluptatibus dolorum nulla dignissimos optio nam aliquid, labore quae dolorem autem, est quam sequi illo neque pariatur.',
}
MainDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
  title: 'Main title',
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyDescriptionDark = Template.bind({})
OnlyDescriptionDark.args = {
  description: 'Some description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium eius accusamus nesciunt suscipit vel aperiam ducimus sit iure molestias id laudantium corrupti voluptatibus, commodi minima voluptatum, voluptates doloremque magni! Itaque expedita cumque nihil voluptatibus dolorum nulla dignissimos optio nam aliquid, labore quae dolorem autem, est quam sequi illo neque pariatur.',
}
OnlyDescriptionDark.decorators = [ThemeDecorator(Theme.DARK)]
