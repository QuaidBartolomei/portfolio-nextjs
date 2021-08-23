import Button from '@material-ui/core/Button';
import { theme } from 'pages/_theme';
import React from 'react';
import { scroller } from 'react-scroll';
import scrollTargets from 'utils/scrollTargets';

export type ProjectsLinkButtonProps = {
  // props
};

export default function ProjectsLinkButton({}: ProjectsLinkButtonProps) {
  const scrollToProjects = () =>
    scroller.scrollTo(scrollTargets.projects, {
      smooth: true,
      offset: -theme.spacing(10),
    });
  return (
    <Button variant='contained' color='primary' onClick={scrollToProjects}>
      View My Work
    </Button>
  );
}
