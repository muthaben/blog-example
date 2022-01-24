module.exports = {
  title: `Muthaben's Library`,
  description: `무타벤의 기억과 기록`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://muthaben.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `무타벤`,
    bio: {
      role: `개발자`,
      description: ['함께 일하는', '배움을 즐기는', '철봉을 좋아하는'],
      thumbnail: 'profile.jpeg', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/muthaben`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `wskim.dev@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      // {
      //   date: '2021.02 ~',
      //   activity: '개인 블로그 개발 및 운영',
      //   links: {
      //     post: '/gatsby-starter-zoomkoding-introduction',
      //     github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
      //     demo: 'https://www.zoomkoding.com',
      //   },
      // },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: "Runner's High",
        description:
          '러닝 메이트를 구하는 게시물을 등록하고 댓글과 채팅으로 다른 사용자와 소통할 수 있는 서비스입니다.',
        techStack: ['NodeJS', 'Express', 'MySQL', 'AWS S3', 'AWS CodePipeline'],
        thumbnailUrl: 'runnershigh.jpeg',
        links: {
          github: 'https://github.com/muthaben/runnershigh-1',
          demo: 'https://runnershigh.click',
        },
      },
    ],
  },
};
