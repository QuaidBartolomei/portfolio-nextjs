import { Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ProjectItem, {
  ProjectItemProps,
} from 'components/ProjectItem/ProjectItem';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import BackdroppedContent from 'components/BackdroppedContent';
import ProjectDetails from 'components/ProjectItem/ProjectDetails';

const useStyles = makeStyles(theme =>
  createStyles({
    background: {
      position: 'relative',
      backgroundColor: theme.palette.background.default,
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      minHeight: '100%',
      flexWrap: 'wrap',
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
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
    projectsContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      '&>*': {
        margin: theme.spacing(2),
      },
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
    technologiesUsed: ['React', 'Typescript', 'Firebase', 'Material-UI'],
  },
  {
    name: 'Drawnit',
    description: 'Draw on an html canvas with your friends',
    imageUrl: '/drawnit_screenshot.png',
    github: '#',
    demo: '#',
    technologiesUsed: ['React', 'Typescript', 'Node', 'MongoDB', 'Material-UI'],
  },
];

export default function Projects() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Container className={classes.container} maxWidth='lg'>
        <Typography variant='h4'>Recent Projects</Typography>
        <div className={classes.projectsContainer}>
          <BackdroppedContent bottom left spacing={2}>
            <img
              style={{
                height: 180,
                width: 320,
              }}
              src={projects[1].imageUrl}
            />
          </BackdroppedContent>
          <BackdroppedContent top right spacing={2}>
            <Paper style={{ padding: 16 }}>
              <ProjectDetails {...projects[1]} />
            </Paper>
          </BackdroppedContent>
        </div>
        {projects.map(project => (
          <ProjectItem {...project} github='#' demo='#' key={project.name} />
        ))}
      </Container>
    </div>
  );
}
