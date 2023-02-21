import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'

import { Modal } from './Modal'

export default {
  title: 'shared/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Light = Template.bind({})
Light.args = {
  children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, debitis. Fuga neque voluptatum non sed accusamus eligendi, at nostrum similique natus. Corporis repudiandae molestias rem, tenetur voluptate fugiat harum obcaecati dolore neque non a qui sed nisi eum exercitationem repellat error illo minus distinctio excepturi! Nobis voluptates praesentium cupiditate cumque!',
  isOpen: true,
}

export const Dark = Template.bind({})
Dark.args = {
  children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, debitis. Fuga neque voluptatum non sed accusamus eligendi, at nostrum similique natus. Corporis repudiandae molestias rem, tenetur voluptate fugiat harum obcaecati dolore neque non a qui sed nisi eum exercitationem repellat error illo minus distinctio excepturi! Nobis voluptates praesentium cupiditate cumque!',
  isOpen: true,
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
