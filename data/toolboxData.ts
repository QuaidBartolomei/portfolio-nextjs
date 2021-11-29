import { IconType } from 'react-icons'
import { IoLogoVercel } from 'react-icons/io5'
import {
  SiBit,
  SiFirebase,
  SiHeroku,
  SiJest,
  SiMaterialui,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiSocketdotio,
  SiStorybook,
  SiTypescript,
} from 'react-icons/si'

export type ToolboxItemData = { Icon: IconType; name: string }

const toolboxData = [
  { Icon: SiReact, name: 'React' },
  { Icon: SiTypescript, name: 'Typescript' },
  { Icon: SiMongodb, name: 'MongoDB' },
  { Icon: SiSocketdotio, name: 'Socket.io' },
  { Icon: SiMaterialui, name: 'Material-UI' },
  { Icon: SiNextdotjs, name: 'Next.js' },
  { Icon: SiHeroku, name: 'Heroku' },
  { Icon: IoLogoVercel, name: 'Vercel' },
  { Icon: SiFirebase, name: 'Firebase' },
  { Icon: SiStorybook, name: 'Storybook' },
  { Icon: SiJest, name: 'Jest' },
  { Icon: SiBit, name: 'Bit.dev' },
]

export default toolboxData
