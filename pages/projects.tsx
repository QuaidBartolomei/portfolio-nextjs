import { createStyles, makeStyles } from '@material-ui/core/styles';
import ProjectItem, { ProjectItemProps } from 'components/ProjectItem';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      minHeight: '100%',
      flexWrap: 'wrap',
      '&>*': {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
      },
    },
    fader: {
      width: '100%',
      textAlign: 'center',
    },
    title: {
      paddingBottom: 32,
    },
  })
);

const projects: ProjectItemProps[] = [
  {
    name: 'CAB Clothing',
    description: 'E commerce site made with React, Typescript and Firebase.',
    imageUrl: '/e-commerce_screenshot.png',
    github: '#',
    demo: 'https://e-commerce-indol.vercel.app/',
    technologiesUsed:[
      'React',
      'Typescript',
      'Firebase',
      'Material-UI',
    ]
  },
  {
    name: 'Drawnit',
    description: 'Draw on an html canvas with your friends',
    imageUrl: '/drawnit_screenshot.png',
    github: '#',
    demo: '#',
    technologiesUsed:[
      'React',
      'Typescript',
      'Node',
      'MongoDB',
      'Material-UI',
    ]
  },
];

export default function Projects() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {projects.map(project => (
        <ProjectItem {...project} github='#' demo='#' key={project.name} />
      ))}
    </div>
  );
}
