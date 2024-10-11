const { randomUserMock, additionalUsers } = require("./FE4U-Lab2-mock");
const { filterUsers } = require("./filtering");
const { formatUser } = require("./format-user");
const { validateUser } = require("./validate-user");
const { sortUsers } = require("./sorting");

const unformattedUsers = [...randomUserMock, ...additionalUsers];
