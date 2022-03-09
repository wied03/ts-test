import './fetch-polyfill.js'
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

let result = await getIssueById({issueIdOrKey: "CAK-76"})
console.log(result.data.fields.summary)
