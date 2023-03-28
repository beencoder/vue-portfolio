import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
import Edit from "@/components/EditProfile";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/signUp",
      name: "SignUp",
      component: SignUp,
      props: true
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/edit",
      name: "Edit",
      component: Edit
    }
  ]
});
