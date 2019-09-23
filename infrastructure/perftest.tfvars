//module vars
asp_name = "probate-perftest"
asp_rg = "probate-perftest"
env = "perftest"
external_host_name = "probate-caveats.perftest.platform.hmcts.net"

//app settings
capacity = "2"
deployment_env = "preprod"

feature_toggles_api_url = "http://rpe-feature-toggle-api-perftest.service.core-compute-perftest.internal"

idam_service_api = "http://rpe-service-auth-provider-perftest.service.core-compute-perftest.internal"
idam_user_host = "https://idam-api.perftest.platform.hmcts.net"
payment_create_url = "http://payment-api-perftest.service.core-compute-perftest.internal/card-payments"
orchestration_service_url = "http://probate-orchestrator-service-perftest.service.core-compute-perftest.internal"
external_hostName_url = "https://probate.perftest.platform.hmcts.net"

packages_environment = "preprod"
packages_version = "3.0.0"

caveat_frontend_https = "false"
caveat_frontend_use_redis = "true"

caveat_google_track_id = "UA-93598808-5"

reform_envirionment_for_test = "perftest"

vault_section = "preprod"

//unused?
outbound_proxy = ""
probate_redis_url = "betaPreProdprobatecache01.reform.hmcts.net"
f5_redis_listen_port = "6379"
