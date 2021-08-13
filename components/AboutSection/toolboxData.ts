import { IconType } from 'react-icons';
import { IoLogoVercel } from 'react-icons/io5';
import {
  SiFirebase,
  SiHeroku,
  SiMaterialUi,
  SiMongodb,
  SiNextDotJs,
  SiReact,
  SiSocketDotIo,
  SiStorybook,
  SiTypescript,
} from 'react-icons/si';

export type ToolboxItemData = { Icon: IconType; name: string };

const toolboxData = [
  { Icon: SiReact, name: 'React' },
  { Icon: SiTypescript, name: 'Typescript' },
  { Icon: SiMongodb, name: 'MongoDB' },
  { Icon: SiSocketDotIo, name: 'Socket.io' },
  { Icon: SiMaterialUi, name: 'Material-UI' },
  { Icon: SiNextDotJs, name: 'Next.js' },
  { Icon: SiHeroku, name: 'Heroku' },
  { Icon: IoLogoVercel, name: 'Vercel' },
  { Icon: SiFirebase, name: 'Firebase' },
  { Icon: SiStorybook, name: 'Storybook' },
];

export default toolboxData;
