const { truthy } = require("@stoplight/spectral-functions")

module.exports = {
    message: "Missing the {{property}} http definition",
    description: "Each end point need to have defined the below error codes [29-8]",
    severity: "warn",
    given: "$.paths.[?(@property.toString().includes(\"}\"))].patch.responses.",
    then: [
        {
            field: "204",
            function: truthy
        },
        {
            field: "400",
            function: truthy
        },
        {
            field: "401",
            function: truthy
        },
        {
            field: "403",
            function: truthy
        },
        {
            field: "404",
            function: truthy
        },
        {
            field: "500",
            function: truthy
        },
        {
            field: "503",
            function: truthy
        },
        {
            field: "504",
            function: truthy
        }
    ]
}