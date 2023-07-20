export interface Workflow {
    id: number;
    nodeId: string;
    name: string;
    path: string;
    state: string;
    createdAt: string;
    updatedAt: string;
    url: string;
    htmlUrl: string;
    badgeUrl: string;
}
export interface WorkflowResponseFromApi {
    totalCount: number;
    workflows: Workflow[];
}

export interface WorkflowRun {  
    id: string;
    name: string;
    headBranch: string;
    event: string;
    status: string;
    conclusion: string;
    runStartedAt: string;
    createdAt: string;
    updatedAt: string;
}

export interface WorkflowRunsResponseFromApi {
    totalCount: number;
    workflow_runs: WorkflowRun[];
}

export interface Branches {
    name: string;
    commit?: Commit,
    protected: boolean;
}

export interface Commit {
    sha: string ,
    url: string
}
