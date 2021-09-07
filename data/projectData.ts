export type ProjectData = {
  name: string;
  description: string;
  githubUrl: string;
  liveDemoUrl: string;
  screenshotPath: string;
  technologiesUsed: string[];
};

const projectData: ProjectData[] = [
  {
    name: 'CAB Clothing',
    description:
      'This is an example e-commerce page I made with NextJS, Material-UI and Firebase.',
    screenshotPath: '/e-commerce_screenshot.png',
    githubUrl: 'https://github.com/QuaidBartolomei/e-commerce',
    liveDemoUrl: 'https://e-commerce-indol.vercel.app/',
    technologiesUsed: ['React', 'Typescript', 'Firebase', 'Material-UI'],
  },
  {
    name: 'Drawnit',
    description: `Draw on an html canvas with your friends. 
    Changes are automatically sent to anyone else viewing the page using Socket.IO.
     For this project I made the backend through a test-driven development process with Jest as the testing framework. 
     `,
    screenshotPath: '/drawnit_screenshot.png',
    githubUrl: 'https://github.com/QuaidBartolomei/drawnit',
    liveDemoUrl: 'https://drawnit.herokuapp.com/',
    technologiesUsed: ['React', 'Typescript', 'Node', 'MongoDB', 'Express'],
  },
];

export default projectData;
