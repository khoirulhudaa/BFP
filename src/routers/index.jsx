import React, { lazy } from "react";
const HomePage = lazy(() => import("../pages/homepage"));
const PF = lazy(() => import("../pages/PF"));
const PFF = lazy(() => import("../pages/PFF"));
const NGF = lazy(() => import("../pages/NGF"));

const Routers = [
    {
        exact: true,
        path: "/",
        component: HomePage,
    },
    {
        path: "/Proxy-Firewall",
        component: PF,
    },
    {
        path: "/Packet-Filtering",
        component: PFF,
    },
    {
        path: "/Next-Generation",
        component: NGF,
    },
];

export default Routers;
