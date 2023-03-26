export const formatDate = (dateStr) => {
    const dateObj = new Date(dateStr);
    const formattedDate = dateObj.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    })
    return formattedDate;
}

export const convertTerritory = (abbr) => {
    if (abbr==="AL"){return "Alabama"};
    if (abbr==="AK"){return "Alaska"};
    if (abbr==="AR"){return "Arkansas"};
    if (abbr==="AS"){return "American Samoa"};
    if (abbr==="CA"){return "California"};
    if (abbr==="CO"){return "Colorado"};
    if (abbr==="CT"){return "Connecticut"};
    if (abbr==="DE"){return "Delaware"};
    if (abbr==="DC"){return "District of Columbia"};
    if (abbr==="FL"){return "Florida"};
    if (abbr==="GA"){return "Georgia"};
    if (abbr==="GU"){return "Guam"};
    if (abbr==="HI"){return "Hawaii"};
    if (abbr==="ID"){return "Idaho"};
    if (abbr==="IL"){return "Illinois"};
    if (abbr==="IN"){return "Indiana"};
    if (abbr==="IA"){return "Iowa"};
    if (abbr==="KS"){return "Kansas"};
    if (abbr==="KY"){return "Kentucky"};
    if (abbr==="LA"){return "Louisiana"};
    if (abbr==="ME"){return "Maine"};
    if (abbr==="MD"){return "Maryland"};
    if (abbr==="MA"){return "Massachusetts"};
    if (abbr==="MI"){return "Michigan"};
    if (abbr==="MN"){return "Minnesota"};
    if (abbr==="MS"){return "Mississippi"};
    if (abbr==="MO"){return "Missouri"};
    if (abbr==="MT"){return "Montana"};
    if (abbr==="NE"){return "Nebraska"};
    if (abbr==="NV"){return "Nevada"};
    if (abbr==="NH"){return "New Hampshire"};
    if (abbr==="NJ"){return "New Jersey"};
    if (abbr==="NM"){return "New Mexico"};
    if (abbr==="NY"){return "New York"};
    if (abbr==="NC"){return "North Carolina"};
    if (abbr==="ND"){return "North Dakota"};
    if (abbr==="MP"){return "Northern Mariana Islands"};
    if (abbr==="OH"){return "Ohio"};
    if (abbr==="OK"){return "Oklahoma"};
    if (abbr==="OR"){return "Oregon"};
    if (abbr==="PA"){return "Pennsylvania"};
    if (abbr==="PR"){return "Puerto Rico"};
    if (abbr==="RI"){return "Rhode Island"};
    if (abbr==="SC"){return "South Carolina"};
    if (abbr==="SD"){return "South Dakota"};
    if (abbr==="TN"){return "Tennessee"};
    if (abbr==="TX"){return "Texas"};
    if (abbr==="UT"){return "Utah"};
    if (abbr==="VT"){return "Vermont"};
    if (abbr==="VA"){return "Virginia"};
    if (abbr==="VI"){return "Virgin Islands"};
    if (abbr==="WA"){return "Washington"};
    if (abbr==="WV"){return "West Virginia"};
    if (abbr==="WI"){return "Wisconsin"};
    if (abbr==="WY"){return "Wyoming"};
    return "";
}
