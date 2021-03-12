<template>
    <label for="states">Select a state</label>
    <select name="states" id="states">
        <option v-for="state in states" :value="state.value" :key="state.value">{{state.title}}</option>
    </select>
</template>

<script>
export default {
    data(){
        return {
            states: [
             {
                title: "Alabama",
                value: "AL"
            },
            {
                title: "Alaska",
                value: "AK"
            },
            {
                title: "American Samoa",
                value: "AS"
            },
            {
                title: "Arizona",
                value: "AZ"
            },
            {
                title: "Arkansas",
                value: "AR"
            },
            {
                title: "California",
                value: "CA"
            },
            {
                title: "Colorado",
                value: "CO"
            },
            {
                title: "Connecticut",
                value: "CT"
            },
            {
                title: "Delaware",
                value: "DE"
            },
            {
                title: "District Of Columbia",
                value: "DC"
            },
            {
                title: "Federated States Of Micronesia",
                value: "FM"
            },
            {
                title: "Florida",
                value: "FL"
            },
            {
                title: "Georgia",
                value: "GA"
            },
            {
                title: "Guam",
                value: "GU"
            },
            {
                title: "Hawaii",
                value: "HI"
            },
            {
                title: "Idaho",
                value: "ID"
            },
            {
                title: "Illinois",
                value: "IL"
            },
            {
                title: "Indiana",
                value: "IN"
            },
            {
                title: "Iowa",
                value: "IA"
            },
            {
                title: "Kansas",
                value: "KS"
            },
            {
                title: "Kentucky",
                value: "KY"
            },
            {
                title: "Louisiana",
                value: "LA"
            },
            {
                title: "Maine",
                value: "ME"
            },
            {
                title: "Marshall Islands",
                value: "MH"
            },
            {
                title: "Maryland",
                value: "MD"
            },
            {
                title: "Massachusetts",
                value: "MA"
            },
            {
                title: "Michigan",
                value: "MI"
            },
            {
                title: "Minnesota",
                value: "MN"
            },
            {
                title: "Mississippi",
                value: "MS"
            },
            {
                title: "Missouri",
                value: "MO"
            },
            {
                title: "Montana",
                value: "MT"
            },
            {
                title: "Nebraska",
                value: "NE"
            },
            {
                title: "Nevada",
                value: "NV"
            },
            {
                title: "New Hampshire",
                value: "NH"
            },
            {
                title: "New Jersey",
                value: "NJ"
            },
            {
                title: "New Mexico",
                value: "NM"
            },
            {
                title: "New York",
                value: "NY"
            },
            {
                title: "North Carolina",
                value: "NC"
            },
            {
                title: "North Dakota",
                value: "ND"
            },
            {
                title: "Northern Mariana Islands",
                value: "MP"
            },
            {
                title: "Ohio",
                value: "OH"
            },
            {
                title: "Oklahoma",
                value: "OK"
            },
            {
                title: "Oregon",
                value: "OR"
            },
            {
                title: "Palau",
                value: "PW"
            },
            {
                title: "Pennsylvania",
                value: "PA"
            },
            {
                title: "Puerto Rico",
                value: "PR"
            },
            {
                title: "Rhode Island",
                value: "RI"
            },
            {
                title: "South Carolina",
                value: "SC"
            },
            {
                title: "South Dakota",
                value: "SD"
            },
            {
                title: "Tennessee",
                value: "TN"
            },
            {
                title: "Texas",
                value: "TX"
            },
            {
                title: "Utah",
                value: "UT"
            },
            {
                title: "Vermont",
                value: "VT"
            },
            {
                title: "Virgin Islands",
                value: "VI"
            },
            {
                title: "Virginia",
                value: "VA"
            },
            {
                title: "Washington",
                value: "WA"
            },
            {
                title: "West Virginia",
                value: "WV"
            },
            {
                title: "Wisconsin",
                value: "WI"
            },
            {
                title: "Wyoming",
                value: "WY"
            }

        ]
    }}
}
</script>

<style>

</style>