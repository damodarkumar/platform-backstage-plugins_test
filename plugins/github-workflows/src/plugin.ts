import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const githubWorkflowsPlugin = createPlugin({
  id: 'github-workflows',
  routes: {
    root: rootRouteRef,
  },
});

export const GithubWorkflowsPage = githubWorkflowsPlugin.provide(
  createRoutableExtension({
    name: 'GithubWorkflowsPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
