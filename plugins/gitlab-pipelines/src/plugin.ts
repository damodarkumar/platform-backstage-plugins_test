import { createApiFactory, createComponentExtension, createPlugin, discoveryApiRef } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';
import { GitlabPipelinesApiClient, gitlabPipelinesApiRef } from './api';

export const gitlabPipelinesPlugin = createPlugin({
  id: 'gitlab-pipelines',
  routes: {
    root: rootRouteRef,
  },
  apis: [
    createApiFactory({
      api: gitlabPipelinesApiRef,
      deps: { discoveryApi: discoveryApiRef },
      factory: ({discoveryApi}) => {
        return new GitlabPipelinesApiClient({
          discoveryApi: discoveryApi
        })
      }
    })
  ]
});

export const GitlabPipelinesOverview = gitlabPipelinesPlugin.provide(
  createComponentExtension({
    name: 'GitlabPipelinesOverview',
    component: {
      lazy: () =>
        import('./components/GitlabPipelinesOverview').then(m => m.GitlabPipelinesOverview),
    },
  })
);

export const GitlabPipelineList = gitlabPipelinesPlugin.provide(
  createComponentExtension({
    name: 'GitlabPipelineList',
    component: {
      lazy: () =>
        import('./components/GitlabPipelinesList').then(m => m.GitlabPipelinesList),
    },
  })
)

export const GitlabJobs = gitlabPipelinesPlugin.provide(
  createComponentExtension({
    name: 'GitlabJobs',
    component: {
      lazy: () =>
        import('./components/GitlabJobs').then(m => m.GitlabJobs),
    },
  })
)