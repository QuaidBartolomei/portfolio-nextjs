export type ProjectData = {
  name: string;
  description: string;
  github: string;
  demo: string;
  imageUrl: string;
  technologiesUsed: string[];
};

const projectData: ProjectData[] = [
  {
    name: 'CAB Clothing',
    description:
      'This is an example e-commerce page I made with NextJS, Material-UI and Firebase.',
    imageUrl: '/e-commerce_screenshot.png',
    github: 'https://github.com/QuaidBartolomei/e-commerce',
    demo: 'https://e-commerce-indol.vercel.app/',
    technologiesUsed: ['React', 'Typescript', 'Firebase', 'Material-UI'],
  },
  {
    name: 'Drawnit',
    description: `Draw on an html canvas with your friends. 
    Changes are automatically sent to anyone else viewing the page using Socket.IO.
     For this project I made the backend through a test-driven development process with Jest as the testing framework. 
     `,
    imageUrl: '/drawnit_screenshot.png',
    github: 'https://github.com/QuaidBartolomei/drawnit',
    demo: 'https://drawnit.herokuapp.com/',
    technologiesUsed: ['React', 'Typescript', 'Node', 'MongoDB', 'Express'],
  },
];

export default projectData;
