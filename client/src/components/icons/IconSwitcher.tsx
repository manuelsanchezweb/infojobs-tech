import { Stack, Technology } from '@/types/types'
import { IconAngular, IconQwik, IconReact, IconVue } from './Icons'

type IconSwitcherProps = {
  icon: Technology | Stack
  classCustom?: string
}

export const IconSwitcher = ({ icon, classCustom }: IconSwitcherProps) => {
  function renderIcon(icon: Technology | Stack) {
    switch (icon) {
      case 'react':
        return <IconReact classCustom={classCustom} />
      case 'vue':
        return <IconVue classCustom={classCustom} />
      case 'qwik':
        return <IconQwik classCustom={classCustom} />
      case 'angular':
        return <IconAngular classCustom={classCustom} />

      default:
        return <IconReact classCustom={classCustom} />
    }
  }

  return renderIcon(icon)
}
