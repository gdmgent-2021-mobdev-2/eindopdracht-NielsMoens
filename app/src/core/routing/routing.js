const Routes = Object.freeze({
  Login: "/login ",
  Home: "/home",

  ServicesDetail: "/services/:id",
  Services: "/services",

  Projects: "/projects",
  ProjectsDetail: "/projects/:id",
  ProjectsEdit: "/projects/:id/edit",
  ProjectsCreate: "/projects/create",
  ProjectsDetailAddLog: "/projects/:id/logs",

  Clients: "/clients",
  ClientsDetail: "/clients/:id",
  ClientsEdit: "/clients/:id/edit",
  ClientsCreate: "/clients/create",

  Reviews: "/reviews",
  ReviewsCreate: "/reviews/create",

  Users: "/users",
  UsersCreate: "/users/create",
  UsersDetail: "/users/:id",
  UsersEdit: "/users/:id/edit",
  UsersDelete: "/users/:id",
});

// replaces : values with values from object
// e.g. route('/projects/:id', { id : 9 }) -> /projects/9
export const route = (path, options = {}) => {
  Object.keys(options).forEach((key) => {
    path = path.replace(`:${key}`, options[key]);
  });
  return path;
};

export { Routes };
