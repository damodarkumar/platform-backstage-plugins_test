import { createApiFactory, createRoutableExtension, createPlugin, discoveryApiRef, createComponentExtension } from '@backstage/core-plugin-api';
import { rootRouteRef } from './routes';
import { githubWorkflowsApiRef, GithubWorkflowsApiClient } from './api';

export const githubWorkflowsPlugin = createPlugin({
  id: 'githubWorkflows',
  routes: {
    root: rootRouteRef,
  },
  apis: [
    createApiFactory({
      api: githubWorkflowsApiRef,
      deps: { discoveryApi: discoveryApiRef },
      factory: ({discoveryApi}) => {
        return new GithubWorkflowsApiClient({
          discoveryApi: discoveryApi
        })
      }
    })
  ]
});

export const GithubWorkflowsPage = githubWorkflowsPlugin.provide(
  createRoutableExtension({
    name: 'GithubWorkflowsPage',
    component: () =>
      import('./components/GithubWorkflowsOverview').then(m => m.GithubWorkflowsOverview),
    mountPoint: rootRouteRef,
  }),
);

export const GithubWorkflowsList = githubWorkflowsPlugin.provide(
  createComponentExtension({
    name: 'GithubWorkflowsList',
    component: {
      lazy: () =>
        import('./components/WorkFlowTable').then(m => m.WorkflowTable),
    },
  })
)

export const GithubWorkflowsCard = githubWorkflowsPlugin.provide(
  createComponentExtension({
    name: 'GithubWorkflowsCard',
    component: {
      lazy: () =>
        import('./components/WorkFlowCard').then(m => m.WorkFlowCard),
    },
  })
)