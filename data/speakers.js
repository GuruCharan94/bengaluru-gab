

var keynoteData = {
  speakers: [
    { name: "Wilhelm Weise", imageURL: "assets/images/speakers/wilhelm.jpeg", title: "Head of India Development Center at ABB Global Industries and Services Private Limited" },
    { name: "Wilhelm Weise", imageURL: "assets/images/speakers/wilhelm.jpeg", title: "Head of India Development Center at ABB Global Industries and Services Private Limited" },
    { name: "Sandeep Alur", imageURL: "assets/images/speakers/sandeep.jpeg", title: "Director - Partner Technology Engagements at Microsoft" },
  ]
};

var featuredSpeakerData = {
  featuredSpeakers: [
    { name: "Anand Gothe", imageURL: "assets/images/speakers/default-speaker.png", title: "Asp.Net Core Expert" },
    { name: "Deepak Singh Dhami", imageURL: "assets/images/speakers/default-speaker.png", title: "ITPro Expert" },
    { name: "Deepthi Anantharaman", imageURL: "assets/images/speakers/default-speaker.png", title: "Sr, Technology Evangelist" },
    { name: "Wriju Ghosh", imageURL: "assets/images/speakers/default-speaker.png", title: "Azure Solution Architect" },
    { name: "Jeeva Chelladhurai", imageURL: "assets/images/speakers/default-speaker.png", title: "Open Soource Expert" },
    { name: "Mohit Chabra", imageURL: "assets/images/speakers/default-speaker.png", title: "" },
    { name: "Nish Anil", imageURL: "assets/images/speakers/default-speaker.png", title: "Xamarin Solution Architect" },
    { name: "Mahesh", imageURL: "assets/images/speakers/default-speaker.png", title: "" },
    { name: "Ilyas", imageURL: "assets/images/speakers/default-speaker.png", title: "IoT Evangelist" },
    { name: "Anoop Chandran Nair", imageURL: "assets/images/speakers/default-speaker.png", title: "ITPro Expert" },
    { name: "Swaminathan Vetri", imageURL: "assets/images/speakers/default-speaker.png", title: "Developer Evangelist" },
    { name: "Murugan Andezuthu Dharmaratnam", imageURL: "assets/images/speakers/murugan.jpeg", title: "Azure Architect" },
    { name: "Vishnu", imageURL: "assets/images/speakers/default-speaker.png", title: "DevOps Architect" },
    { name: "Gireesh", imageURL: "assets/images/speakers/default-speaker.png", title: "DevOps Architect" },
    { name: "Sudheesh", imageURL: "assets/images/speakers/default-speaker.png", title: "ITPro Architect" },
    { name: "Rajul", imageURL: "assets/images/speakers/default-speaker.png", title: "ITPro Architect" },
    { name: "Vimal", imageURL: "assets/images/speakers/default-speaker.png", title: "ITPro Architect" },
    { name: "Ajay", imageURL: "assets/images/speakers/default-speaker.png", title: "ITPro Architect" },
    { name: "Adil", imageURL: "assets/images/speakers/default-speaker.png", title: "ITPro Architect" },
    { name: "Vic Parmar", imageURL: "assets/images/speakers/default-speaker.png", title: "IoT Architect" }
  ]
};

var speakerData = {
  speakers: [
    
    { name: "Anoop Chandran Nair", imageURL: "assets/images/speakers/anoop.jpg", title: "Enterprise Mobility Expert" },
    { name: "Deepak Singh Dhami", imageURL: "assets/images/speakers/default-speaker.png", title: "Cloud and Datacenter Management Expert" },
    { name: "Deepak Singh Dhami", imageURL: "assets/images/speakers/default-speaker.png", title: "Cloud and Datacenter Management Expert" },
    { name: "Swaminathan Vetri", imageURL: "assets/images/speakers/swami.jpg", title: "" }

  ]
};

var allSpeakersData = {};

allSpeakersData.speakers = [];

allSpeakersData.speakers =
  keynoteData.speakers.concat(
    featuredSpeakerData.featuredSpeakers.concat(
      speakerData.speakers));
