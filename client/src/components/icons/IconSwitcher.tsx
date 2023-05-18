import { Technology } from '@/types/types'
import { IconQwik, IconReact, IconVue } from './Icons'

type IconSwitcherProps = {
  icon: Technology
  classCustom?: string
}

export const IconSwitcher = ({ icon, classCustom }: IconSwitcherProps) => {
  function renderIcon(icon: Technology) {
    switch (icon) {
      case 'react':
        return <IconReact classCustom={classCustom} />
      case 'vue':
        return <IconVue classCustom={classCustom} />
      case 'qwik':
        return <IconQwik classCustom={classCustom} />

      default:
        return <IconReact classCustom={classCustom} />
    }
  }

  return renderIcon(icon)
}
