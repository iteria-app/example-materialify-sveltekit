import { writable } from "svelte/store";

export default writable({
    "xs-only": "only screen and (max-width: 599px)",
    "sm-only": "only screen and (min-width: 600px) and (max-width: 959px)",
    "sm-and-down": "only screen and (max-width: 959px)",
    "sm-and-up": "only screen and (min-width: 600px)",
    "md-only": "only screen and (min-width: 960px) and (max-width: 1263px)",
    "md-and-down": "only screen and (max-width: 1263px)",
    "md-and-up": "only screen and (min-width: 960px)",
    "lg-only": "only screen and (min-width: 1264px) and (max-width: 1903px)",
    "lg-and-down": "only screen and (max-width: 1903px)",
    "lg-and-up": "only screen and (min-width: 1264px)",
    "xl-only": "only screen and (min-width: 1904px)"
})

export const mediumAndDown = writable(true);