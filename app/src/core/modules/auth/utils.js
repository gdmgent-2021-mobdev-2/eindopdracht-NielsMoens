const {Roles} = require("./constants");

const isAdmin = (user) =>{
    return user.role === Roles.admin;
};

export {
    isAdmin
}
