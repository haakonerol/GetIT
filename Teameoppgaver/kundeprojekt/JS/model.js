const model = {
  app: {
    pages: "login",
  },

  input: {
    email: "",
    password: "",
    userName: "",
    charName: "",
  },
  data: {
    users: [
      {
        userId: 1,
        userName: "abi",
        userEmail: "abibakar@getacademy.no",
        password: "1234",
        userData: [
          {
            charName: "asdf",
            health: 80,
            coding: 75,
            nk: 99,
            backpack:[]
          },
          {},
         
        ],
        
      },
      {
        userId: 2,
        userName: "Chris",
        userEmail: "christoffer@getacademy.no",
        password: "1234",
        userData: [
          {
            charName: "asdf",
            health: 70,
            coding: 65,
            nk: 99,
            backpack:[]
          },
          {},
         
        ],
      },
      {
        userId: 3,
        userName: "hakan",
        userEmail: "hakan@getacademy.no",
        password: "1234",
        userData: [
          {
            charName: "asdf",
            health: 80,
            coding: 55,
            nk: 99,
            backpack:[]
          },
          {},
         
        ],
      },
      {
        userId: 4,
        userName: "leo",
        userEmail: "leonardo@getacademy.no",
        password: "1234",
        userData: [
          {
            charName: "asdf",
            health: 60,
            coding: 75,
            nk: 99,
            backpack:[]
          },
          {},
         
        ],
      },
    ],

    characters: [
      {
        charId:1,
        characterName: "Geek",
        codingPoints: 5,
        nkPoints: -5,
        image: null,
      },
      {
        charId:2,
        characterName: "Charmer",
        codingPoints: -5,
        nkPoints: +5,
        image: null,
      },
      {
        charId:3,
        characterName: "Avarage Joe",
        codingPoints: 0,
        nkPoints: 0,
        image: null,
      },
    ],
    bosses: [
      {
        boss: "ESKIL",
        test: "NKskills",
        questions: "Hva er resultat av denne?  console.log(1<0 && 1>0)",
        options: ["false", "true", "error"],
        anwser: "false",
      },
      {
        boss: "terje",
        test: "CODINGskills",
        questions: "Hva er resultat av denne?  console.log(1<0 && 1>0)",
        options: ["false", "true", "error"],
        anwser: "false",
      },
    ],
    items: [
      {
        itemId: 1,
        itemName: "mic",
        itemPoints: 12,
        coinValue: 60,
        image: null,
      },
      {
        itemId: 2,
        itemName: "coin",
        itemPoints: 150,
        image: null,
      },
      {
        itemId: 3,
        itemName: "keyboard",
        itemPoints: 24,
        coinValue: 60,
        image: null,
      },
      {
        itemId: 4,
        itemName: "chorei",
        itemPoints: 24,
        coinValue: 60,
        image: null,
      },
      {
        itemId: 4,
        itemName: "redbull",
        itemPoints: 32,
        coinValue: 60,
        image: null,
      },
      {
        itemId: 4,
        itemName: "moddle",
        itemPoints: 29,
        coinValue: 60,
        image: null,
      },
    ],
    butikk:[{
      mic:"yes",
      keybord:"yes",
      redBull:"yes",
      chorie: "yes",
      moodle: "yes",


        
    }]

  },
};
