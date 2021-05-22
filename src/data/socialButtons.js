import GoogleIcon from '@/assets/icons/Social/GoogleIcon'
import VkIcon from '@/assets/icons/Social/VkIcon'
import {getAuthLink} from '@/data/backend'

const socialButtons = [
  {
    name: 'Google',
    link: getAuthLink('google'),
    component: GoogleIcon
  },
  {
    name: 'VK',
    link: getAuthLink('vk'),
    component: VkIcon
  }
]

export default socialButtons
