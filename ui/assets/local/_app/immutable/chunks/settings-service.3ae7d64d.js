import{r as U,a as C,g as E}from"./route-for-api.5de7e4eb.js";function I(){return{}.VITE_TEMPORAL_UI_BUILD_TARGET??null}const b=/(tmprl\.cloud|tmprl-test\.cloud)$/,L=async(k=fetch)=>{var l,o,c,d,u,i,f,w,m,h,A;const D=U("settings"),r=await C(D,{request:k}),a=I();return{auth:{enabled:!!((l=r==null?void 0:r.Auth)!=null&&l.Enabled),flow:(o=r==null?void 0:r.Auth)==null?void 0:o.Flow,providerUrl:(c=r==null?void 0:r.Auth)==null?void 0:c.ProviderURL,issuerUrl:(d=r==null?void 0:r.Auth)==null?void 0:d.IssuerURL,authorizationUrl:(u=r==null?void 0:r.Auth)==null?void 0:u.AuthorizationURL,clientId:(i=r==null?void 0:r.Auth)==null?void 0:i.ClientID,scopes:(f=r==null?void 0:r.Auth)==null?void 0:f.Scopes,options:(w=r==null?void 0:r.Auth)==null?void 0:w.Options},baseUrl:E(),codec:{endpoint:(m=r==null?void 0:r.Codec)==null?void 0:m.Endpoint,passAccessToken:(h=r==null?void 0:r.Codec)==null?void 0:h.PassAccessToken,includeCredentials:(A=r==null?void 0:r.Codec)==null?void 0:A.IncludeCredentials},defaultNamespace:(r==null?void 0:r.DefaultNamespace)||"default",disableWriteActions:!!(r!=null&&r.DisableWriteActions)||!1,workflowTerminateDisabled:!!(r!=null&&r.WorkflowTerminateDisabled),workflowCancelDisabled:!!(r!=null&&r.WorkflowCancelDisabled),workflowSignalDisabled:!!(r!=null&&r.WorkflowSignalDisabled),workflowResetDisabled:!!(r!=null&&r.WorkflowResetDisabled),batchActionsDisabled:!!(r!=null&&r.BatchActionsDisabled),hideWorkflowQueryErrors:!!(r!=null&&r.HideWorkflowQueryErrors),showTemporalSystemNamespace:r==null?void 0:r.ShowTemporalSystemNamespace,notifyOnNewVersion:r==null?void 0:r.NotifyOnNewVersion,feedbackURL:r==null?void 0:r.FeedbackURL,runtimeEnvironment:{get isCloud(){return a?a==="cloud":b.test(window.location.hostname)},get isLocal(){return a?a==="local":b.test(window.location.hostname)},envOverride:Boolean(a)},version:r==null?void 0:r.Version}};export{L as f,b as i};
