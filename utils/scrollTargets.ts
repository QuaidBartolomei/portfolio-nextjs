enum scrollTargets {
  projects = 'scroll-target-projects',
  contact = 'scroll-target-contact',
}

const offset = -64

export const scrollData = {
  contact: {
    target: scrollTargets.contact,
    offset,
  },
  projects: {
    target: scrollTargets.projects,
    offset,
  },
}
