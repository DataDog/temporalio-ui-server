import{r as b,a as D,g as k}from"./route-for-api.62ccba59.js";function t(){return{}.VITE_TEMPORAL_UI_BUILD_TARGET??null}const f=/(tmprl\.cloud|tmprl-test\.cloud)$/,E=async(w=fetch)=>{var o,l,c,d,i,u;const m=b("settings"),r=await D(m,{request:w}),a=t();return{auth:{enabled:!!((o=r==null?void 0:r.Auth)!=null&&o.Enabled),options:(l=r==null?void 0:r.Auth)==null?void 0:l.Options},baseUrl:k(),codec:{endpoint:(c=r==null?void 0:r.Codec)==null?void 0:c.Endpoint,passAccessToken:(d=r==null?void 0:r.Codec)==null?void 0:d.PassAccessToken,includeCredentials:(i=r==null?void 0:r.Codec)==null?void 0:i.IncludeCredentials,decodeEventHistoryDownload:(u=r==null?void 0:r.Codec)==null?void 0:u.DecodeEventHistoryDownload},defaultNamespace:(r==null?void 0:r.DefaultNamespace)||"default",disableWriteActions:!!(r!=null&&r.DisableWriteActions)||!1,workflowTerminateDisabled:!!(r!=null&&r.WorkflowTerminateDisabled),workflowCancelDisabled:!!(r!=null&&r.WorkflowCancelDisabled),workflowSignalDisabled:!!(r!=null&&r.WorkflowSignalDisabled),workflowResetDisabled:!!(r!=null&&r.WorkflowResetDisabled),batchActionsDisabled:!!(r!=null&&r.BatchActionsDisabled),hideWorkflowQueryErrors:!!(r!=null&&r.HideWorkflowQueryErrors),showTemporalSystemNamespace:r==null?void 0:r.ShowTemporalSystemNamespace,notifyOnNewVersion:r==null?void 0:r.NotifyOnNewVersion,feedbackURL:r==null?void 0:r.FeedbackURL,runtimeEnvironment:{get isCloud(){return a?a==="cloud":f.test(window.location.hostname)},get isLocal(){return a?a==="local":f.test(window.location.hostname)},envOverride:Boolean(a)},version:r==null?void 0:r.Version}};export{E as f,f as i};
