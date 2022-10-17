import { createWebHistory,createRouter } from "vue-router";
import MenuBar from "./components/MenuBar.vue";
import ContactUs from "./components/ContactUs.vue";

const routes=[
    {
       name:"MenuBar",
       path:"/",
       component:MenuBar 
    },
    {
        name:"ContactUs",
        path:"/contactus",
        component:ContactUs 
     }
];

const router=createRouter({
history:createWebHistory(),
routes
});
export default router;