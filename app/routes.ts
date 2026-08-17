import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/signin", "routes/signin.tsx"),
    route("/signup", "routes/signup.tsx"),
    route("/about", "routes/about.tsx"),
    route("/movie/:movieId", "routes/movieInfo.tsx"), //EDIT: add dynamic id route for movielist
    route("/search/:query", "routes/search.tsx"),
] satisfies RouteConfig;
