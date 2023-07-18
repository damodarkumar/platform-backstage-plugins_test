import { makeStyles } from '@material-ui/core';
import React, { ReactNode } from 'react';
import SyncIcon from '@material-ui/icons/Sync';
import ReplayIcon from '@material-ui/icons/Replay';
import TimerIcon from '@material-ui/icons/Timer';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { 
  StatusError,
  StatusAborted,
  StatusOK,
  StatusPending,
  StatusRunning,
  StatusWarning } from '@backstage/core-components';

type WorkFlowItemProps = {
  children: ReactNode | string,
  status: string,
}

const useStyles = makeStyles(theme =>({
    workflow:{
      padding: '.8rem 3rem',
      background: 'transparent',
      border: '1px solid #979696',
      borderRadius: '30px',
      fontSize: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      color: theme.palette.text.primary,
      minWidth: '235px',
    },
    clickable:{
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }));

export const WorkFlowItem = ({status,children}:WorkFlowItemProps) => {

  const classes = useStyles();

  return (
    <div 
      className={classes.workflow}
      >
      {status === "ok" && <StatusOK/>}
      {status === "error" && <StatusError/>}
      {status === "pending" && <StatusPending/>}
      {status === "aborted" && <StatusAborted/>}
      {status === "running" && <StatusRunning/>}
      {status === "warning" && <StatusWarning/>}
      {children} 
      <span
        className={classes.clickable}>
        {status === "ok" && <SyncIcon/>}
        {status === "error" && <ReplayIcon/>}
        {status === "pending" && <TimerIcon/>}
        {status === "aborted" && <HighlightOffIcon/>}
        {status === "running" && <HourglassEmptyIcon/>}
        {status === "warning" && <ErrorOutlineIcon/>}
      </span>
    </div>
  )
}
