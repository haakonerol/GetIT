let model = {
  app: {
    userLoggedIn: false,
    currentPage: "loginpage",
  },

  input: {
    login: {
      userName: "",
      password: "",
    },
    createUser:{
        userName: "",
        email:"",
        password: "",
        city:"",
        age:null,
    },
    search:"",
  },

  data: {
    users:[],
    comments:[],
    likes:[],
    friends:[],
  },
};
