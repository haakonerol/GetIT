const model = {
  app: {
    userLoggedIn: null,
    currentPage: "loginPage",
  },

  input: {
    login: {
      userName: "",
      password: "",
    },
    createAccount: {
      email: "",
      userName: "",
      password: "",
    },
    createNewCharacter: {
      characterName: "",

    }
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
            characterName: "asdf",
            health: 80,
            coding: 75,
            nk: 99,
            backpack: [],
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
            characterName: "asdf",
            health: 70,
            coding: 65,
            nk: 99,
            backpack: [],
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
            characterName: "asdf",
            health: 80,
            coding: 55,
            nk: 99,
            backpack: [],
          },
        ],
      },
      {
        userId: 4,
        userName: "leo",
        userEmail: "leonardo@getacademy.no",
        password: "1234",
        userData: [
          {
            characterName: "asdf",
            health: 60,
            coding: 75,
            nk: 99,
            backpack: [],
          },
          {},
        ],
      },
    ],

    characters: [
      {
        charId: 1,
        characterName: " ",
        characterArquetype: "Geek",
        codingPoints: 5,
        nkPoints: -5,
        image: null,
      },
      {
        charId: 2,
        characterName: " ",
        characterArquetype: "Charmer",
        codingPoints: -5,
        nkPoints: +5,
        image: null,
      },
      {
        charId: 3,
        characterName: " ",
        characterArquetype: "Avarage Joe",
        codingPoints: 0,
        nkPoints: 0,
        image: null,
      },
    ],
    bosses: [
      {
        bossName: "Eskil",
        bossId: 0,
        introduksjonTekst: 'Hei, jeg heter Eskil og jeg er kjempe flink på NK',
        challengeById: [2,3,4,],

      },
      {
        bossId:1,
        bossName: "Terje",
        bossMsg:"Vell vell, for å gå videre må du svare på spørsmålet:",
        questions: [
          {
            question:"Hva er resultat av denne?console.log(1<0 && 1>0)",
            answerOptions: ["false", "true", "error"],
            correctAnswer: answerOptions[0],
            resultFalse:"Beklager!Ta en titt på logiske operatører på moodle.",
            answerPoints:25
          },
          {
            question:"Hva betyr MVC?",
            answerOptions: [
              "model view controller",
              "manage view constructor",
              "model vise const"
              ],
            correctAnswer: "model view controller",
            resultFalse:"Beklager! Ta en titt på 'model view controller' metodikken.",
            answerPoints:20
          },
          {
            question:"Hvorfor bruker vi 'return' i function?",
            answerOptions: [
              "For å kalle function",
              "For å bruke returnere MVC",
              "For å returnere verdigen ut fra function"
              ],
            correctAnswer: "For å returnere verdigen ut fra function",
            resultFalse:"Beklager! Ta en titt på function med return på moddle.",
            answerPoints:35
          },
        ],
      },
    ],
    
    eskilsChallengeList: [
      {
        challengeId: 2,
        challengeName: "Growth Mindset",
        challengeIntroTekst: "La oss se hvor langt du gikk på søket etter et bedre selv!",
        nkQuestionById: [0,1,2,]
      },
      {
        challengeId: 3,
        challengeName: "Locus of Control",
        challengeIntroTekst: "Jeg lurer på hvilken del av spekteret du er nå.",
        nkQuestionById: [5,6,7]
      },
      {
        challengeId: 4,
        challengeName: "Teamwork",
        challengeIntroTekst: "Ikke få meg til å spørre teamkameratene dine hvor hyggelig du er!",
        nkQuestionById: [10,11,12]
      },
    ],
    
    nkQuestionList: [
      {
        challengeId: 2,
        questionId: 0,
        questionText: "Hva betyr Growth Mindset for deg?",
        answerById: [0,1,2],
        rightAnswer: 2,
      },
        {
          amswerId: 0,
          answerText: "Det betyr ingenting for meg",
        },
        {
          amswerId: 1,
          answerText: "Det betyr at vi er som trær",
        },
        {
          amswerId: 2,
          answerText: "Growth Mindset beskriver en måte å se utfordringer og tilbakeslag på.",
        },
        
      {
        challengeId: 2,
        questionId: 0,
        questionText: "Hva betyr Growth Mindset for deg?",
        answerById: [0,1,2],
        rightAnswer: 2,
      },
        {
          amswerId: 0,
          answerText: "Det betyr ingenting for meg",
        },
        {
          amswerId: 1,
          answerText: "Det betyr at vi er som trær",
        },
        {
          amswerId: 2,
          answerText: "Growth Mindset beskriver en måte å se utfordringer og tilbakeslag på.",
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
        itemId: 5,
        itemName: "redbull",
        itemPoints: 32,
        coinValue: 60,
        image: null,
      },
      {
        itemId: 6,
        itemName: "moddle",
        itemPoints: 29,
        coinValue: 60,
        image: null,
      },
      {
        itemId: 7,
        itemName: "mvc",
        itemPoints: 29,
        coinValue: 60,
        image: null,
      },
      {
        itemId: 8,
        itemName: "gitHub",
        itemPoints: 29,
        coinValue: 60,
        image: null,
      },
      {
        itemId: 9,
        itemName: "C# .Net",
        itemPoints: 29,
        coinValue: 60,
        image: null,
      },
      {
        itemId: 10,
        itemName: "JS",
        itemPoints: 29,
        coinValue: 60,
        image: null,
      },
    ],
    skillShopByItemId: [1,3,4,5,6],
  },
};
