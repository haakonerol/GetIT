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
    createUser: {
      userName: "",
      email: "",
      password: "",
      city: "",
      age: null,
    },
    search: "",
  },

  data: {
    users: [
      {
        userId: 1,
        userName: "johndoe",
        email: "john.doe@example.com",
        password: "password123",
        city: "New York",
        age: 23,
        friends: [],
        frendsRequest:[],
        userImg:null
      },
      {
        userId: 2,
        userName: "janesmith",
        email: "jane.smith@example.com",
        password: "securepass",
        city: "Los Angeles",
        age: 25,
        friends: [],
        frendsRequest:[],
        userImg:null
      },
      {
        userId: 3,
        userName: "boblee",
        email: "bob.lee@example.com",
        password: "123password",
        city: "Chicago",
        age: 30,
        friends: [],
        frendsRequest:[],
        userImg:null
      },
      {
        userId: 4,
        userName: "alicebrown",
        email: "alice.brown@example.com",
        password: "alice123",
        city: "Houston",
        age: 27,
        friends: [],
        frendsRequest:[],
        userImg:null
      },
      {
        userId: 5,
        userName: "michaelwhite",
        email: "michael.white@example.com",
        password: "whitepass",
        city: "Phoenix",
        age: 35,
        friends: [],
        frendsRequest:[],
        userImg:null
      },
      {
        userId: 6,
        userName: "lindajones",
        email: "linda.jones@example.com",
        password: "lindapass",
        city: "Philadelphia",
        age: 22,
        friends: [],
        frendsRequest:[],
        userImg:null
      },
      {
        userId: 7,
        userName: "davidmartin",
        email: "david.martin@example.com",
        password: "martin123",
        city: "San Antonio",
        age: 29,
        friends: [],
        frendsRequest:[],
        userImg:null
      },
      {
        userId: 8,
        userName: "susanclark",
        email: "susan.clark@example.com",
        password: "clarkpass",
        city: "San Diego",
        age: 26,
        friends: [],
        frendsRequest:[],
        userImg:null
      },
      {
        userId: 9,
        userName: "kevinwilson",
        email: "kevin.wilson@example.com",
        password: "wilson123",
        city: "Dallas",
        age: 32,
        friends: [],
        frendsRequest:[],
        userImg:null
      },
      {
        userId: 10,
        userName: "karentaylor",
        email: "karen.taylor@example.com",
        password: "taylorpass",
        city: "San Jose",
        age: 28,
        friends: [],
        frendsRequest:[],
        userImg:null
      },
      {
        userId: 11,
        userName: "charles anderson",
        email: "charles.anderson@example.com",
        password: "andersonpass",
        city: "Austin",
        age: 34,
        friends: [],
        frendsRequest:[],
        userImg:null
      },
      {
        userId: 12,
        userName: "patriciathomas",
        email: "patricia.thomas@example.com",
        password: "thomas123",
        city: "Jacksonville",
        age: 31,
        friends: [],
        frendsRequest:[],
        userImg:null
      },
      {
        userId: 13,
        userName: "jason moore",
        email: "jason.moore@example.com",
        password: "moorepass",
        city: "Fort Worth",
        age: 21,
        friends: [],
        frendsRequest:[],
        userImg:null
      },
      {
        userId: 14,
        userName: "nancyhall",
        email: "nancy.hall@example.com",
        password: "hallpass",
        city: "Columbus",
        age: 33,
        friends: [],
        frendsRequest:[],
        userImg:null
      },
      {
        userId: 15,
        userName: "ericking",
        email: "eric.king@example.com",
        password: "kingpass",
        city: "Charlotte",
        age: 24,
        friends: [],
        frendsRequest:[],
        userImg:null
      },
      {
        userId: 16,
        userName: "laurawright",
        email: "laura.wright@example.com",
        password: "wright123",
        city: "Indianapolis",
        age: 27,
        friends: [],
        frendsRequest:[],
        userImg:null
      },
      {
        userId: 17,
        userName: "markharris",
        email: "mark.harris@example.com",
        password: "harrispass",
        city: "Seattle",
        age: 29,
        friends: [],
        frendsRequest:[],
        userImg:null
      },
      {
        userId: 18,
        userName: "maryclark",
        email: "mary.clark@example.com",
        password: "clark123",
        city: "Denver",
        age: 26,
        friends: [],
        frendsRequest:[],
        userImg:null
      },
      {
        userId: 19,
        userName: "danielmiller",
        email: "daniel.miller@example.com",
        password: "millerpass",
        friends: [],
        frendsRequest:[],
        userImg:null
      },
      {
        userId: 20,
        userName: "sarahmartin",
        email: "sarah.martin@example.com",
        password: "martinpass",
        city: "Boston",
        age: 25,
        friends: [],
        frendsRequest:[],
        userImg:null
      },
    ],
    comments: [
      {
        commentId: 1,
        commentText: "This is a great topic!",
        userId: 1,
        topicId: 1,
      },
      {
        commentId: 2,
        commentText: "I completely agree with your point.",
        userId: 2,
        topicId: 1,
      },
      {
        commentId: 3,
        commentText: "Can you provide more details on this?",
        userId: 3,
        topicId: 2,
      },
      {
        commentId: 4,
        commentText: "This information helped me a lot.",
        userId: 4,
        topicId: 2,
      },
      {
        commentId: 5,
        commentText: "I have a different perspective on this.",
        userId: 5,
        topicId: 3,
      },
      {
        commentId: 6,
        commentText: "Thank you for sharing this!",
        userId: 6,
        topicId: 3,
      },
      {
        commentId: 7,
        commentText: "Interesting discussion happening here.",
        userId: 7,
        topicId: 1,
      },
    ],

    likes: [
      {
        likeId: 1,
        likeCount: 3,
        commentId: 1,
        userIds: [1, 2, 3],
      },
      {
        likeId: 2,
        likeCount: 2,
        commentId: 2,
        userIds: [2, 4],
      },
      {
        likeId: 3,
        likeCount: 4,
        commentId: 3,
        userIds: [1, 3, 5, 7],
      },
      {
        likeId: 4,
        likeCount: 1,
        commentId: 4,
        userIds: [4],
      },
      {
        likeId: 5,
        likeCount: 2,
        commentId: 5,
        userIds: [5, 6],
      },
      {
        likeId: 6,
        likeCount: 3,
        commentId: 6,
        userIds: [3, 6, 7],
      },
      {
        likeId: 7,
        likeCount: 2,
        commentId: 1,
        userIds: [1, 7],
      },
    ],

    topics: [
      {
        topicId: 1,
        title: "Introduction to JavaScript",
        topicText: "Let's discuss the basics of JavaScript programming.",
        userId: 1,
      },
      {
        topicId: 2,
        title: "Advanced CSS Techniques",
        topicText:
          "Share your favorite advanced CSS techniques for responsive design.",
        userId: 2,
      },
      {
        topicId: 3,
        title: "Understanding APIs",
        topicText: "What are APIs and how do they help in web development?",
        userId: 3,
      },
      {
        topicId: 4,
        title: "Database Optimization Tips",
        topicText:
          "Discuss best practices for optimizing database performance.",
        userId: 4,
      },
      {
        topicId: 5,
        title: "Version Control with Git",
        topicText:
          "Share your workflow and tips for effective version control using Git.",
        userId: 5,
      },
      {
        topicId: 6,
        title: "Building Web Applications with React",
        topicText:
          "Discuss your experience and tips when building web apps using React.",
        userId: 6,
      },
      {
        topicId: 7,
        title: "Security Best Practices",
        topicText:
          "What are the top security best practices for web applications?",
        userId: 7,
      },
    ],
  },
};
