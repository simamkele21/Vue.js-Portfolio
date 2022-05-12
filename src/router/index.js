import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Projects from "../views/Projects/Projects.vue";
import Education from "../views/Education.vue";
import ProjectsDetails from "../views/Projects/ProjectsDetails.vue";
import Testimonials from "../views/Testimonials/Testimonials.vue";
import TestimonialsDetails from "../views/Testimonials/TestimonialsDetails.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/Education",
    name: "Education",
    component: Education,
  },
  {
    path: "/Projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/Projects/:id",
    name: "ProjectsDetails",
    component: ProjectsDetails,
    props: true,
  },
  {
    path: "/Testimonials",
    name: "Testimonials",
    component: Testimonials,
  },
  {
    path: "/Testimonials/:id",
    name: "TestimonialsDetails",
    component: TestimonialsDetails,
    props: true,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
