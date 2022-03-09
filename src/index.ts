import './fetch-polyfill'
import {paths} from "./jira"
import {Fetcher} from "openapi-typescript-fetch"

const fetcher = Fetcher.for<paths>()
fetcher.configure({
    baseUrl: "https://bswtechconsulting.atlassian.net",
    init: {
        headers: {}
    }
})

const getIssueById = fetcher.path("/rest/api/3/issue/{issueIdOrKey}")
    .method("get")
    .create()

getIssueById({issueIdOrKey: "CAK-76"}).then(stuff => {
    console.log(stuff.data.fields["summary"])
})