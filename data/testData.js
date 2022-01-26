// Images Pixabay: https://pixabay.com/fr/users/jmexclusives-10518280/

const COURSES = [
  {
    id: "1",
    title: "Fomation JavaScript Moderne",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!",
    image:
      "https://media.istockphoto.com/photos/mid-adult-professor-teaching-a-lecture-from-desktop-pc-at-computer-picture-id1079587192?b=1&k=20&m=1079587192&s=170667a&w=0&h=R1AoC2KyoxPE2doi9y7Q_udKyoWeN2DcUFQtZM4rbTQ=",

    price: 99.99548454,
    selected: false,
    instructorId: "1",
  },
  {
    id: "2",
    title: "Coder facebook avec React JS",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!",
    image:
      "https://media.istockphoto.com/photos/group-of-school-kids-and-teacher-in-classroom-picture-id499343530?b=1&k=20&m=499343530&s=170667a&w=0&h=Kc-qCyG7gviYDMIssZ1KKuM3kH2tupvWgqdjG1b_4sI=",
    price: 49.99,
    selected: false,
    instructorId: "1",
  },
  {
    id: "3",
    title: "Wordpress pour débutants",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!",
    image:
      "https://media.istockphoto.com/photos/digital-native-students-elearning-over-computers-at-school-picture-id1224309929?b=1&k=20&m=1224309929&s=170667a&w=0&h=9rq9n_WbEw8i2xRGVrUd2y4LNTq1fMkisOLq0lHYXHo=",
    price: 29.49,
    selected: false,
    instructorId: "1",
  },
  {
    id: "4",
    title: "Maîtiser le logiciel Confluence",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!",
    image:
      "https://media.istockphoto.com/photos/classroom-picture-id903609746?b=1&k=20&m=903609746&s=170667a&w=0&h=JNdz_yonoK1pqtz2hJ0eJaW5vD927SJ_HL41ksBB3CY=",
    price: 49.29,
    selected: false,
    instructorId: "1",
  },
  {
    id: "5",
    title: "Python pour les débutants",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!",
    image:
      "https://media.istockphoto.com/photos/rear-view-of-large-group-of-students-raising-arms-during-a-class-at-picture-id1093523312?b=1&k=20&m=1093523312&s=170667a&w=0&h=N8PTVo9rH2AUOdIDmBNmSOgiKC2ZnXhfxb2ldpFO1pQ=",
    price: 199.99,
    selected: false,
    instructorId: "1",
  },
  {
    id: "6",
    title: "apprendre CSS3 ",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!",
    image:
      "https://media.istockphoto.com/photos/elearning-education-concept-learning-online-picture-id1290864946?b=1&k=20&m=1290864946&s=170667a&w=0&h=zZq7rG5McSptSIpEm9f8iTGd3Mrdkcslakr91T7qTYM=",
    price: 9.99,
    selected: false,
    instructorId: "1",
  },
  {
    id: "7",
    title: "Formation PHP Orienté Objets",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!",
    image:
      "https://media.istockphoto.com/photos/learning-picture-id136284651?b=1&k=20&m=136284651&s=170667a&w=0&h=xuJQH3NMwRvlAZUNdsUPUEzIawGDJ257saSlUSkp7js=",
    price: 29.99,
    selected: false,
    instructorId: "1",
  },
  {
    id: "8",
    title: "Formation SEO de 0 à PRO!",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!",
    image:
      "https://media.istockphoto.com/photos/empty-classroom-during-covid19-pandemic-picture-id1282723854?b=1&k=20&m=1282723854&s=170667a&w=0&h=_92OPXXN4-62twb_x-UEix8iMgRjo0n2xiCPWe6siig=",
    price: 19.49,
    selected: false,
    instructorId: "1",
  },
  {
    id: "9",
    title: "Formation Microsoft Clarity",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!",
    image:
      "https://media.istockphoto.com/photos/conference-photo-audience-and-speaker-giving-speech-seminar-presenter-picture-id1188899957?b=1&k=20&m=1188899957&s=170667a&w=0&h=bjsg-hBAc-PnwSt9jf-EdxxfONoGiv5Gq5lOnIe7c9w=",
    price: 29.45,
    selected: false,
    instructorId: "1",
  },
];

export default COURSES;
