import { createContext} from "react";
import { WorkflowResultsProps, WorkflowRun } from "../../utils/types";


export type GithubWorkflowsContextType = {
  listAllWorkflows: (projectName: string) => Promise<WorkflowResultsProps[] | null | void>,
  branch: string | null,
  setBranchState: (branch: string) => void,
  workflowsState: WorkflowResultsProps[] | null,
  setWorkflowsState: React.Dispatch<React.SetStateAction<WorkflowResultsProps[] | null>>,
  workflowByAnnotation: (projectName: string, annotations: string[]) => Promise<WorkflowResultsProps[] | null>,
  getWorkflowRunById: (runId: string, projectSlug: string) =>  Promise<WorkflowRun | null>,
  handleStartWorkflowRun: (workFlowId: number, projectSlug: string, branch: string) => Promise<void>,
  handleStopWorkflowRun: (runId: number, projectSlug: string) => Promise<void>
};

export const GithubWorkflowsContext = createContext<GithubWorkflowsContextType>(null!);