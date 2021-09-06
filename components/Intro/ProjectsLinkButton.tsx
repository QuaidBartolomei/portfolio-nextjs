import Button from '@mui/material/Button';
import React from 'react';
import { scroller } from 'react-scroll';
import { scrollData } from 'utils/scrollTargets';

export type ProjectsLinkButtonProps = {
  // props
};

export default function ProjectsLinkButton({}: ProjectsLinkButtonProps) {
  const { target, offset } = scrollData.projects;
  const scrollToProjects = () =>
    scroller.scrollTo(target, {
      smooth: true,
      offset,
    });
  return (
    <Button variant='contained' color='primary' onClick={scrollToProjects}>
      View My Work
    </Button>
  );
}
