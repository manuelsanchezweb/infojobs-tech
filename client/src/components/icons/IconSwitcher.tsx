import { Illustrations, Stack, Technology } from '@/types/types'
import {
  IconAngular,
  IconBackend,
  IconData,
  IconDevOps,
  IconFrontend,
  IconFullStack,
  IconMobile,
  IconQwik,
  IconReact,
  IconVue,
} from './Icons'
import { IllustrationError } from './illustrations'

type IconSwitcherProps = {
  icon: Technology | Stack | Illustrations
  classCustom?: string
}

export const IconSwitcher = ({ icon, classCustom }: IconSwitcherProps) => {
  function renderIcon(icon: Technology | Stack | Illustrations) {
    switch (icon) {
      case 'react':
        return <IconReact classCustom={classCustom} />
      case 'vue':
        return <IconVue classCustom={classCustom} />
      case 'qwik':
        return <IconQwik classCustom={classCustom} />
      case 'angular':
        return <IconAngular classCustom={classCustom} />
      case 'error':
        return <IllustrationError classCustom={classCustom} />
      case 'frontend':
        return <IconFrontend classCustom={classCustom} />
      case 'backend':
        return <IconBackend classCustom={classCustom} />
      case 'fullstack':
        return <IconFullStack classCustom={classCustom} />
      case 'data':
        return <IconData classCustom={classCustom} />
      case 'devops':
        return <IconDevOps classCustom={classCustom} />
      case 'mobile':
        return <IconMobile classCustom={classCustom} />

      default:
        return <IconFullStack classCustom={classCustom} />
    }
  }

  return renderIcon(icon)
}
