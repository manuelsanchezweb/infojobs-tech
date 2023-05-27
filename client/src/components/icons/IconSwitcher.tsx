import { Illustrations, Stack, Technology } from '@/types/types'
import { IconAngular, IconQwik, IconReact, IconVue } from './Icons'
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

      default:
        return <IconReact classCustom={classCustom} />
    }
  }

  return renderIcon(icon)
}
