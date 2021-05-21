import { createStyles, makeStyles } from '@material-ui/core/styles';
import ProjectItem, { ProjectItemProps } from 'components/ProjectItem';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
      minHeight: '100%',
      flexWrap: 'wrap',
      '&>*': {
        margin: theme.spacing(1),
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

const screenshot = '/e-commerce_screenshot.png';

const projects: ProjectItemProps[] = [
  {
    name: 'CAB Clothing',
    description: 'E commerce site made with React, Typescript and Firebase.',
    imageUrl: screenshot,
    github: '#',
    demo: 'https://e-commerce-indol.vercel.app/',
  },
  {
    name: 'Drawnit',
    description: 'Draw on an html canvas with your friends',
    imageUrl: screenshot,
    github: '#',
    demo: '#',
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
