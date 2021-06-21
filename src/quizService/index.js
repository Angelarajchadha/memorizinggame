import andaman from "../assets/andaman.png";
import andhra from "../assets/andhra.png";
import Arunachal from "../assets/Arunachal.png";
import assam from "../assets/assam.png";
import Bihar from "../assets/Bihar.png";
import Chandigarh from "../assets/Chandigarh.png";
import Chhattisgarh from "../assets/Chhattisgarh.png";
import Dadra from "../assets/Dadra.png";
import delhi from "../assets/delhi.png";
import Goa from "../assets/Goa.png";
import Gujarat from "../assets/Gujarat.png";
import Haryana from "../assets/Haryana.png";
import Himachal from "../assets/Himachal.png";
import Jharkhand from "../assets/Jharkhand.png";
import jk from "../assets/jk.png";
import Karnataka from "../assets/Karnataka.png";
import Kerela from "../assets/Kerela.png";
import Ladakh from "../assets/Ladakh.png";
import Lakshadweep from "../assets/Lakshadweep.png";
import madhya from "../assets/madhya.png";
import maharastra from "../assets/maharastra.png";
import manipur from "../assets/manipur.png";
import meghalaya from "../assets/meghalaya.png";
import mizoram from "../assets/mizoram.png";
import nagaland from "../assets/nagaland.png";
import odisha from "../assets/odisha.png";
import Puducherry from "../assets/Puducherry.png";
import punjab from "../assets/punjab.png";
import rajasthan from "../assets/rajasthan.png";
import sikkim from "../assets/sikkim.png";
import Tamil from "../assets/Tamil.png";
import Telangana from "../assets/Telangana.png";
import Tripura from "../assets/Tripura.png";
import Up from "../assets/Up.png";
import Uttrakhand from "../assets/Uttarakhand.png";
import Bengal from "../assets/Bengal.png";


const qBank = [
  {
    id: 1,
    description: {
      image: andaman,
    },
    questions: [
      {
        question: "What is the capital of Andaman and Nicobar island? ",
        answers: ["Daman", "Port Blair","Agartala", "Srinagar"],
        correct: "Port Blair",
        questionId: "1001",
      },
      {
        question: "What is the official language of Andaman and Nicobar island? ",
        answers: ["Telugu", "Malayalam","Hindi","Kashmiri"],
        correct: "Hindi",
        questionId: "1002",
      },
      {
        question: "Does the Island has only Active Volcano of India?",
        answers: ["True", "False"],
        correct: "True",
        questionId: "1003",
      },
      {
        question: "Which of the following from below is one of the Tourist attraction of the island? ",
        answers: ["Jetty Garden", "Gulmarg","Agatti Island","Indira Point"],
        correct: "Indira Point",
        questionId: "1004",
      },
      {
        question: "Which of the following from below is dance form of the island? ",
        answers: ["Nicobari Dance", "Dol Cholam","Nautanki","Jhora"],
        correct: "Nicobari Dance",
        questionId: "1005",
      },
    ],
  },
  {
    id: 2,
    description: {
      image: andhra,
    },
    questions: [
      {
        question: "Which of the following is NOT a neighboring state of Andhra Pradesh?",
        answers: ["Telangana", "Arunachal Pradesh", "Odisha", "Tamil Nadu" ],
        correct: "Arunachal Pradesh",
        questionId: "2001",
      },
      {
        question: "What is the official language of Andhra Pradesh?  ",
        answers: ["Telugu", "Tamil", "Malayalam", "Tani"],
        correct: "Telugu",
        questionId: "2002",
      },
      {
        question: "What is the capital of Andhra Pradesh? ",
        answers: ["Dispur", "Patna","Amaravati", "Kavaratti",],
        correct: "Amaravati",
        questionId: "2003",
      },
      {
        question: "Which of the following is one of the tourist attractions in Andhra Pradesh?  ",
        answers: ["Itanagar", "Vishakapatnam","Kalpeni", "Ziro Valley",],
        correct: "Vishakapatnam",
        questionId: "2004",
      },
      {
        question: "What is the population of Andhra Pradesh?  ",
        answers: ["4 crore 95 lakh", "2 crore 90 thousand","1 lakh 95 thousand", "8 lakh 9 thousand",],
        correct: "4 crore 95 lakh",
        questionId: "2005",
      },
    ],
  },
  {
    id: 3,
    description: {
      image: Arunachal,
    },
    questions: [
      {
        question: "Which is the neighboring state of Arunachal Pradesh? ",
        answers: ["Assam", "Karnataka", "Andhra Pradesh", "Ladakh"],
        correct: "Assam",
        questionId: "3001",
      },
      {
        question: "Which of the following is one of the tourist attractions in Arunachal Pradesh?",
        answers: ["Kamakhya Temple", "Bodhgaya", "Tawang", "Paradise Beach"],
        correct: "Tawang",
        questionId: "3002",
      },
      {
        question: "What is the capital of Arunachal Pradesh? ",
        answers: ["Raipur", "Itanagar", "Panaji"," Gandhinagar"],
        correct: "Itanagar",
        questionId: "3003",
      },
      {
        question: "What is the official language of Arunachal Pradesh? ",
        answers: ["Telugu", "Malayalam", "Hindi","Tani"],
        correct: "Tani",
        questionId: "3004",
      },
      {
        question: "Which of the following from below is dance form of the Arunachal Pradesh? ",
        answers: ["Nicobari Dance", "Jhumra","Aji Lamu","Jhora"],
        correct: "Aji Lamu",
        questionId: "3005",
      },
    ],
  },
  {
    id: 4,
    description: {
      image: assam,
    },
    questions: [
      {
        question: "What Is The Official Language Of Assam?  ",
        answers: ["Assamese", "Hindi"," Konkani","Gujarati"],
        correct: "Assamese",
        questionId: "4001",
      },
      {
        question: "Which Is The a Tourist Attractions In Assam?  ",
        answers: ["Barnawapara Wildlife Sanctuary", "Kalangute Beach","Kaziranga National Park", "Golkonda Fort"],
        correct: "Kaziranga National Park",
        questionId: "4002",
      },
      {
        question: "What Is The Capital Of Assam?   ",
        answers: ["New Delhi","Dispur","Chandigarh", "Kohima"],
        correct: "Dispur",
        questionId: "4003",
      },
      {
        question: "Which Is NOT The Neighboring State Of Assam?  ",
        answers: ["Arunachal Pradesh","Westbengal", "Meghalaya", "Jharkhand"],
        correct: "Jharkhand",
        questionId: "4004",
      },
      {
        question: "What is the population of Assam?  ",
        answers: ["3 crore 12 thousand", "2 crore 90 thousand","1 lakh 95 thousand", "8 lakh 9 thousand",],
        correct: "3 crore 12 thousand",
        questionId: "4005",
      },
    ],
  },
  {
    id: 5,
    description: {
      image: Bihar,
    },
    questions: [
      {
        question: "Which of the following is The Tourist Attractions In Bihar? ",
        answers: ["Bodhgaya", "Barnawapara Wildlife Sanctuary","Baga Beach","Statue Of Unity"],
        correct: "Bodhgaya",
        questionId: "5001",
      },
      {
        question: "Is Bihar the largest producer of saffron?        ",
        answers: ["True", "False"],
        correct: "False",
        questionId: "5002",
      },
      {
        question: "Which Is The Neighboring State Of Bihar?   ",
        answers: ["New Delhi","Haryana","Jharkhand", "Maharashtra"],
        correct: "Jharkhand",
        questionId: "5003",
      },
      {
        question: "What Is The Capital Of Bihar?  ",
        answers: ["Aizwal", "Patna", "Bhopal", "Andro",],
        correct: "Patna",
        questionId: "5004",
      },
      {
        question: "Which of the following from below is dance form of Bihar? ",
        answers: ["Bhangra", "Jhumra","Aji Lamu","Jata-Jatin"],
        correct: "Jata-Jatin",
        questionId: "5005",
      },
    ],
  },
  {
    id: 6,
    description: {
      image: Chandigarh,
    },
    questions: [
      {
        question: "Chandigarh is NOT the capital of two states. ",
        answers: ["True", "False"],
        correct: "False",
        questionId: "6001",
      },
      {
        question: "Which Is The a Tourist Attractions In Chandigarh?  ",
        answers: ["Sun Temple", "Hawa Mahal","Rock Garden", "Golkonda Fort"],
        correct: "Rock Garden",
        questionId: "6002",
      },
      {
        question: "Which of  The following is the Neighboring State Of Chandigarh?  ",
        answers: ["New Delhi","Haryana","Tripura", "Kohima"],
        correct: "CHaryana",
        questionId: "6003",
      },
      {
        question: "Is The Capital Of Chandigarh - Chandigarh? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "6004",
      },
      {
        question: "Is the population of Chandigarh, 10 lakh?  ",
        answers: ["True","False"],
        correct: "True",
        questionId: "6005",
      },
    ],
  },
  {
    id: 7,
    description: {
      image: Chhattisgarh,
    },
    questions: [
      {
        question: "Which of the following is NOT a Neighboring State Of Chattisgarh? ",
        answers: ["Jharkhand", "Odisha","Uttar Pradesh", "Maharashtra"], 
        correct: "Jharkhand",
        questionId: "7001",
      },
      {
        question: "What Is The Capital Of Chattisgarh?   ",
        answers: ["New Delhi","Haryana","Raipur", "Kohima"],
        correct: "Raipur",
        questionId: "7002",
      },
      {
        question: "Chhatisgarh is the only state in India that produce____  ",
        answers: ["Iron Concentrates","Tin Concentrates","Copper Concentrates", "Lead Concentrates"],
        correct: "Tin Concentrates",
        questionId: "7003",
      },
      {
        question: "Which is the Tourist Attractions In Chattisgarh? ",
        answers: ["Barnawapara Wildlife Sanctuary", "Kalangute Beach", "Gir National Park", "Kurukhestra",],
        correct: "Barnawapara Wildlife Sanctuary",
        questionId: "7004",
      },
      {
        question: "Which of the following from below is dance form of Chattisgarh? ",
        answers: ["Gaur Maria", "Lavani","Tarpa","Jata-Jatin"],
        correct: "Gaur Maria",
        questionId: "7005",
      },
    ],
  },
  {
    id: 8,
    description: {
      image: Dadra,
    },
    questions: [
      {
        question: "What Is The Capital Of Dadra And Nagar Haveli And Daman And Diu?  ",
        answers: ["Dehradun", "Dadra","Daman","Diu"],
        correct: "Daman",
        questionId: "8001",
      },
      {
        question: "Which Is one of the Neighboring State Of Dadra And Nagar Haveli And Daman And Diu?   ",
        answers: ["New Delhi","Goa","Madhya Pradesh", "Gujarat"],
        correct: "Gujarat",
        questionId: "8002",
      },
      {
        question: "What Is Dadra And Nagar Haveli And Daman And Diu known for?  ",
        answers: ["Scenic Beauty","Home to Valley of Flower","Third largest Coal Producer", "Home of Bamboo"],
        correct: "Scenic Beauty",
        questionId: "8003",
      },
      {
        question: "Which of the following is The Tourist Attractions In Dadra And Nagar Haveli And Daman And Diu? ",
        answers: ["Zakirhusssain Rose Garden", "Die Fort" , "Thiksey Monastery", "Rock Beach"],
        correct: "Die Fort",
        questionId: "8004",
      },
      {
        question: "What is the population of Dadra and Nagar Haveli and Daman and Diu ?  ",
        answers: ["12 thousand", "5 lakh 85 thousand","95 thousand", "9 thousand",],
        correct: "5 lakh 85 thousand",
        questionId: "8005",
      },
    ],
  },
  {
    id: 9,
    description: {
      image: delhi,
    },
    questions: [
      {
        question: "Which one of the following Is The Tourist Attractions In New Delhi?  ",
        answers: ["Gulmarg", "India Gate","Agra Fort","Neer Mahal"],
        correct: "India Gate",
        questionId: "9001",
      },
      {
        question: "Which one of the following Is The Neighboring State Of New Delhi?   ",
        answers: ["Dehradun", "Chandigarh","Haryana","Jaipur"],
        correct: "Haryana",
        questionId: "9002",
      },
      {
        question: "What Is The Capital Of New Delhi?   ",
        answers: ["New Delhi","Delhi","Mumbai", "Gurugram"],
        correct: "Delhi",
        questionId: "9003",
      },
      {
        question: "What Is The Official Language Of New Delhi?",
        answers: ["Hindi", "Punjabi", "Tamil", "Kashmiri",],
        correct: "Hindi",
        questionId: "9004",
      },
      {
        question: "Is Nicobari Dance the dance form of New Delhi ",
        answers: ["True", "False"],
        correct: "False",
        questionId: "9005",
      },

    ],
  },
  {
    id: 10,
    description: {
      image: Goa,
    },
    questions: [
      {
        question: "What Is The Capital Of Goa? ",
        answers: ["Gandhinagar", "Panaji","Patna","Itanagar"],
        correct: "Panaji",
        questionId: "10001",
      },
      {
        question: "Does Goa has lowest per capita income in India? ",
        answers: ["True", "False"],
        correct: "False",
        questionId: "10002",
      },
      {
        question: "The Neighboring State Of Goa are____  ",
        answers: ["Maharashtra and Karnataka","Maharashtra and Kerala","Kerala and Madhya Pradesh", "Gujarat and Maharastra"],
        correct: "Maharashtra and Karnataka",
        questionId: "10003",
      },
      {
        question: "Which of the following are The Tourist Attractions In Goa? ",
        answers: ["Baga Beach", "Kaziranga National Park", "Ziro Valley", "Paradise Beach"],
        correct: "Baga Beach",
        questionId: "10004",
      },
      {
        question: "Which of the following from below is dance form of Goa? ",
        answers: ["Gaur Maria", "Lavani","Tarpa","Tarangamel"],
        correct: "Tarangamel",
        questionId: "10005",
      },
    ],
  },
  {
    id: 11,
    description: {
      image: Gujarat,
    },
    questions: [
      {
        question: "Is The Official Language Of Gujarat, Marathi  ",
        answers: ["True", "False"],
        correct: "False",
        questionId: "11001",
      },
      {
        question: "Gujarat has the largest _____ in India ",
        answers: ["Coal Mining", "Coastline","Mineral Resource Generator", "Silica Minerals"],
        correct: "Coastline",
        questionId: "11002",
      },
      {
        question: "Which are The Neighboring State Of Gujarat?  ",
        answers: ["Rajasthan and Maharashtra","Rajasthan and Haryana","Maharashtra and Chandigarh", "Kohima and Raipur"],
        correct: "Chandigarh",
        questionId: "11003",
      },
      {
        question: "What Is The Capital Of Gujarat?  ",
        answers: ["Gandhinagar", "Raipur", "Panaji", "Ranchi"],
        correct: "Gandhinagar",
        questionId: "11004",
      },
      {
        question: "What is the population of Gujarat ?  ",
        answers: ["12 thousand", "6 lakh 85 thousand","6 crore 85 lakhs", "9 thousand",],
        correct: "6 crore 85 lakhs",
        questionId: "11005",
      },
    ],
  },
  {
    id: 12,
    description: {
      image: Haryana,
    },
    questions: [
      {
        question: "Haryana is the largest exporter of ______ ",
        answers: ["Coffee", "Basmati Rice","Saffron","Beans"],
        correct: "Basmati Rice",
        questionId: "12001",
      },
      {
        question: "What Is The Official Language Of Haryana?   ",
        answers: ["Gujarati", "Punjabi","Haryanvi", "Konkani"],
        correct: "Haryanvi",
        questionId: "12002",
      },
      {
        question: "Which Is The NOT Neighboring State Of Haryana?  ",
        answers: ["New Delhi","Punjab","Uttar Pradesh", "Uttrakhand"],
        correct: "Uttrakhand",
        questionId: "12003",
      },
      {
        question: "Is Capital of Haryana, Gurugoan/Gurugram ",
        answers: ["True", "False"],
        correct: "False",
        questionId: "12004",
      },
      {
        question: "Which of the following from below is dance form of Haryana? ",
        answers: ["Gaur Maria", "Jhumar","Rangma","Shondol"],
        correct: "Jhumar",
        questionId: "12005",
      },
    ],
  },
  {
    id: 13,
    description: {
      image: Himachal,
    },
    questions: [
      {
        question: "Which Is The Neighboring State Of Himachal Pradesh? ",
        answers: ["Uttarakhand and Haryana", "Chandigarh and Punjab","Jammu And Kashmir"," Uttarakhand and Uttar Pradesh"],
        correct: "Uttarakhand and Haryana",
        questionId: "13001",
      },
      {
        question: "What Is The Capital Of Himachal Pradesh  ",
        answers: ["Shimla", "Kullu Manali","Hamirpur", "Bilaspur"],
        correct: "Shimla",
        questionId: "13002",
      },
      {
        question: "Which is following is The Tourist Attractions In Himachal Pradesh?   ",
        answers: ["Hundru Falls","Gir National Park","Kullu Manali", "Humpi"],
        correct: "Kullu Manali",
        questionId: "13003",
      },
      {
        question: "Does Himachal Pradesh has the largest glacier in the World? ",
        answers: ["True", "False"],
        correct: "False",
        questionId: "13004",
      },
      {
        question: "Is the population of Himachal Pradesh, 70 lakh?  ",
        answers: ["True","False"],
        correct: "False",
        questionId: "13005",
      },
    ],
  },
  {
    id: 14,
    description: {
      image: Jharkhand,
    },
    questions: [
      {
        question: "Which Is NOT the Neighboring State Of Jharkhand?  ",
        answers: ["West Bengal", "Chandigarh","Bihar","Odisha"],
        correct: "Chandigarh",
        questionId: "14001",
      },
      {
        question: "What Is The Capital Of Jharkhand? ",
        answers: ["Bangalore", "Karnataka","Agartala", "Ranchi"],
        correct: "Ranchi",
        questionId: "14002",
      },
      {
        question: "Jharkhand has the second largest ______ resource generator in India  ",
        answers: ["Mines","Mettalurgy","Mineral", "Iron"],
        correct: "Mineral",
        questionId: "14003",
      },
      {
        question: "Is Gir National Park a Torist Attraction in Jharkhand?  ",
        answers: ["True", "False"],
        correct: "False",
        questionId: "14004",
      },
      {
      question: "What is the population of Jharkhand ?  ",
      answers: ["3 crore 12 thousand", "1 crore 6 lakh 85 thousand","3 crore 29 lakhs", "9 thousand",],
      correct: "3 crore 22 lakhs",
      questionId: "14005",
    },
    ],
  },
  {
    id: 15,
    description: {
      image: jk,
    },
    questions: [
      {
        question: " Is Jammu and Kashmir is the largest producer of salt ",
        answers: ["True", "False"],
        correct: "False",
        questionId: "15001",
      },
      {
        question: "What Is The Capital Of Jammu And Kashmir?  ",
        answers: ["Srinagar and Jammu", "Jammu and Kashmir","Kishtwar and Kashmir", "Jammu and Shopian"],
        correct: "Srinagar and Jammu",
        questionId: "15002",
      },
      {
        question: "Which Is The Neighboring State Of Jammu And Kashmir?  ",
        answers: ["Punjab","Haryana","Chandigarh", "Himachal Pradesh"],
        correct: "Himachal Pradesh",
        questionId: "15003",
      },
      {
        question: "What Is The Official Language Of Jammu And Kashmir?  ",
        answers: ["Kashmiri", "Punjabi","Gujarati","Malayalam"],
        correct: "Kashmiri",
        questionId: "15004",
      },
      {
        question: "Which of the following from below is dance form of Jammu and Kashmir? ",
        answers: ["Rauf", "Jhumar","Rangma","Shondol"],
        correct: "Rauf",
        questionId: "15005",
      },
    ],
  },
  {
    id: 16,
    description: {
      image: Karnataka,
    },
    questions: [
      {
        question: "What Is The Official Language Of Karnataka?  ",
        answers: ["Hindi", "Konkani","Kanada","Telugu"],
        correct: "Kanada",
        questionId: "16001",
      },
      {
        question: "Which Is NOT The Neighboring State Of Karnataka?  ",
        answers: ["Telangana", "Odisha","Goa", "Kerala"],
        correct: "Odisha",
        questionId: "16002",
      },
      {
        question: "Is Karnataka the largest coffee exporter? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "16003",
      },
      {
        question: "The Capital of Karnataka is______ ",
        answers: ["Bangalore", "Belgaum","Mysore", "Tumkur"],
        correct: "Bangalore",
        questionId: "16004",
      },
      {
        question: "Which of the following from below is dance form of Karnataka? ",
        answers: ["Rauf", "Odissi","Rangma","Yakshagan"],
        correct: "Yakshagan",
        questionId: "16005",
      },
    ],
  },
  {
    id: 17,
    description: {
      image: Kerela,
    },
    questions: [
      {
        question: "What Is The Capital Of Kerala?  ",
        answers: ["Pathanamthitta", "Thiruvanantpuram","Kozhikode","JWayanadu"],
        correct: "Thiruvanantpuram",
        questionId: "17001",
      },
      {
        question: "Which Is The a Tourist Attractions In Kerala?  ",
        answers: ["Mysore Palace", "Wayanad","Kodaikanal", "Baga Beach"],
        correct: "Wayanad",
        questionId: "17002",
      },
      {
        question: "Kerala has the highest ______ rate  ",
        answers: ["Literacy","Population","Per Capita Income", "Death"],
        correct: "Literacy",
        questionId: "17003",
      },
      {
        question: "What Is The Official Language Of Kerala? ",
        answers: ["Tamil", "Kolakani","Malayalam","Hindi"],
        correct: "Malayalam",
        questionId: "17004",
      },
      {
        question: "Which of the following from below is dance form of Kerala? ",
        answers: ["Kathakali", "Odissi","Rangma","Yakshagan"],
        correct: "Kathakali",
        questionId: "17005",
      },
    ],
  },
  {
    id: 18,
    description: {
      image: Ladakh,
    },
    questions: [
      {
        question: "What Is The Capital Of Ladakh? ",
        answers: ["Shupian", "Leh","Samba","Pulwama"],
        correct: "Leh",
        questionId: "18001",
      },
      {
        question: "Which Is The a Tourist Attractions In Ladakh?  ",
        answers: ["Kalpeni", "Pangongtso Lake","Bodhgaya", "Gulmarg"],
        correct: "Pangongtso Lake",
        questionId: "18002",
      },
      {
        question: "Ladakh has the highest ______ in the world",
        answers: ["Desert","Freshwater Lake","Mountains", "Optical Telescope"],
        correct: "Optical Telescope",
        questionId: "18003",
      },
      {
        question: "What Is The Official Language Of Ladakh?  ",
        answers: ["Hindi", "Kashmiri", "Punjabi", "Nepali"],
        correct: "Nepali",
        questionId: "18004",
      },
      {
        question: "Which of the following from below is dance form of Ladakh? ",
        answers: ["Lava", "Shondol","Kathak","Yakshagan"],
        correct: "Shondol",
        questionId: "18005",
      },
    ],
  },
  {
    id: 19,
    description: {
      image: Lakshadweep,
    },
    questions: [
      {
        question: "___ and ___ are the minerals found in Lakshadweep",
        answers: ["Corals and Sand", "Silica and Copper","Silica and Corals","Sand and Copper"],
        correct: "Silica and Corals",
        questionId: "19001",
      },
      {
        question: "What Is The Capital Of Lakshadweep?   ",
        answers: ["Kavaratti", "Kalpeni","Kodaikanal", "Bitra"],
        correct: "Kavaratti",
        questionId: "19002",
      },
      {
        question: "Which of the following is the Tourist Attractions In Lakshadweep? ",
        answers: ["Agatti Island","Kurukhestra","Rock Beach", "Thiksey Monastery"],
        correct: "Agatti Island",
        questionId: "19003",
      },
      {
        question: "What Is The Official Language Of Lakshadweep?  ",
        answers: ["Telugu", "Tamil","Malayalam","Hindi"],
        correct: "Malayalam",
        questionId: "19004",
      },
      {
        question: "What is the population of Lakshadweep ?  ",
        answers: ["64 thousand", " 6 lakh 85 thousand","64 lakhs", "42thousand",],
        correct: "3 crore 22 lakhs",
        questionId: "19005",
      },
    ],
  },
  {
    id: 20,
    description: {
      image: madhya,
    },
    questions: [
      {
        question: "What Is The Official Language Of Madhya Pradesh?  ",
        answers: ["Meitei", "Marati","Hindi","Bengali"],
        correct: "Hindi",
        questionId: "20001",
      },
      {
        question: "What Is The Capital Of Madhya Pradesh?   ",
        answers: ["Bhopal", "Rajgarh","Morena", " Mandla"],
        correct: "Bhopal",
        questionId: "20002",
      },
      {
        question: "Which of the following are The Neighboring State Of Madhya Pradesh?   ",
        answers: ["New Delhi and Gujarat","Haryana and Dehradun","Chandigarh and Kohima", "Rajasthan and Chhatisgarh"],
        correct: "Rajasthan and Chhatisgarh",
        questionId: "20003",
      },
      {
        question: "Is Madhya Pradesh the largest State of India? ",
        answers: ["True", "False"],
        correct: "False",
        questionId: "20004",
      },
      {
        question: "Is Jhora the dance form of Madhya Pradesh ",
        answers: ["True", "False"],
        correct: "False",
        questionId: "20005",
      },
    ],
  },
  {
    id: 21,
    description: {
      image: maharastra,
    },
    questions: [
      {
        question: "What Is The Official Language Of Maharashtra?  ",
        answers: ["Malayalam", "Assamese","Marati","Meitei"],
        correct: "Marati",
        questionId: "21001",
      },
      {
        question: "Maharashtra has the only _____ in the world ",
        answers: ["Longest Cave System", "Saline Soda Lake","Floating National Park", "Coffee Exporter"],
        correct: "Saline Soda Lake",
        questionId: "21002",
      },
      {
        question: "Which Is NOT The Neighboring State Of Maharashtra? ",
        answers: ["New Delhi","Madhya Pradesh","Gujarat", "Telangana"],
        correct: "New Delhi",
        questionId: "21003",
      },
      {
        question: "Is Capital of Maharashtra, Pune? ",
        answers: ["True", "False"],
        correct: "False",
        questionId: "21004",
      },
      {
        question: "Which of the following from below is dance form of Maharashtra? ",
        answers: ["Lava", "Shondol","Kathak","Lavani"],
        correct: "Lavani",
        questionId: "21005",
      },
    ],
  },
  {
    id: 22,
    description: {
      image: manipur,
    },
    questions: [
      {
        question: "Is Imphal, The Capital Of Manipur?  ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "22001",
      },
      {
        question: "Manipur has only ______ in the world  ",
        answers: ["Longest Cave System", "Saline Soda Lake","Floating National Park", "Coffee Exporter"],
        correct: "Floating National Park",
        questionId: "22002",
      },
      {
        question: "Which of the following is NOT The Neighboring State Of Manipur?  ",
        answers: ["Mizoram","Haryana","Nagaland", "Assam"],
        correct: "Haryana",
        questionId: "22003",
      },
      {
        question: "What Is The Official Language Of Manipur? ",
        answers: ["Malayalam", "Assamese","Marati","Meitei"],
        correct: "Meitei",
        questionId: "22004",
      },
      {
        question: "Which of the following from below is dance form of Manipur? ",
        answers: ["Bhangra", "Shondol","Kathak","Dol Cholam"],
        correct: "Dol Cholam",
        questionId: "22005",
      },
    ],
  },
  {
    id: 23,
    description: {
      image: meghalaya,
    },
    questions: [
      {
        question: "What Is The Capital Of Meghalaya? ",
        answers: ["Imphal", "Shillong","Aizwal","Jaipur"],
        correct: "Shillong",
        questionId: "23001",
      },
      {
        question: "How long is the longest Cave system in Meghalaya?  ",
        answers: ["23km", "22km","20km", "24km"],
        correct: "22km",
        questionId: "23002",
      },
      {
        question: "Which of the following is The Tourist Attractions In Meghalaya?   ",
        answers: ["Secchip","Andro","Nohklikai Waterfall", "Kohima"],
        correct: "Nohklikai Waterfall",
        questionId: "23003",
      },
      {
        question: "Is Hindi the Official Language Of Meghalaya?  ",
        answers: ["True", "False"],
        correct: "False",
        questionId: "23004",
      },
      {
        question: "What is the population of Meghalaya ?  ",
        answers: ["64 thousand", " 22 lakh 66 thousand","64 lakhs", " 2 lakh 42 thousand",],
        correct: "22 lakh 66 thousand",
        questionId: "23005",
      },
    ],
  },
  {
    id: 24,
    description: {
      image: mizoram,
    },
    questions: [
      {
        question: "What Is The Official Language Of Mizoram? ",
        answers: ["Odia", "English","Hindi","Mizo"],
        correct: "Mizo",
        questionId: "24001",
      },
      {
        question: "Which Is The a Tourist Attractions In Mizoram  ",
        answers: ["Sun Temple", "Sechhip","Dimappur", "Senapati"],
        correct: "Sechhip",
        questionId: "24002",
      },
      {
        question: "WWhat Is The Capital Of Mizoram?   ",
        answers: ["Aizwal","Kolkata","Bhubaneshwar", "Kohima"],
        correct: "Aizwal",
        questionId: "24003",
      },
      {
        question: "Which of the following is NOT The Neighboring State Of Mizoram? ",
        answers: ["Tripura", "Assam","Arunachal Pradesh", "Manipur"],
        correct: "Arunachal Pradesh",
        questionId: "24004",
      },
      {
        question: "Which of the following from below is dance form of Mizoram? ",
        answers: ["Bhangra", "Shondol","Cheraw","Dol Cholam"],
        correct: "Cheraw",
        questionId: "24005",
      },
    ],
  },
  {
    id: 25,
    description: {
      image: nagaland,
    },
    questions: [
      {
        question: "Which of the following are The Neighboring State Of Nagaland?  ",
        answers: ["Assam and Manipur", "Arunachal Pradesh and Andhra Pradesh","Andhra Pradesh and Assam","Jaipur and Manipur"],
        correct: "Assam and Manipur",
        questionId: "25001",
      },
      {
        question: "Which Is The a Tourist Attractions In Nagaland?  ",
        answers: ["Imphal", "Dimappur","Kodaikanal", "Golkonda Fort"],
        correct: "Dimappur",
        questionId: "25002",
      },
      {
        question: "What Is The Capital Of Nagaland?  ",
        answers: ["Chennai","Imphal","Aizwal", "Kohima"],
        correct: "Kohima",
        questionId: "25003",
      },
      {
        question: "Nagaland is the only state with decline of _____ from 2001 to 2011 ",
        answers: ["Per Capita Income", "Literacy", "Death Rate", "Population"],
        correct: "Population",
        questionId: "25004",
      },
      {
        question: "What is the population of Nagaland ?  ",
        answers: ["19 lakh 64 thousand", " 9 lakh 85 thousand","19 lakh 78 thousand", "42 thousand",],
        correct: "19 lakh 78 thousand",
        questionId: "25005",
      },
    ],
  },
  {
    id: 26,
    description: {
      image: odisha,
    },
    questions: [
      {
        question: "What Is The Capital Of Odisha?  ",
        answers: ["Koraput", "Subarnapur","Bhopal","Bhubaneshwar"],
        correct: "Bhubaneshwar",
        questionId: "26001",
      },
      {
        question: "Which Is The a Tourist Attractions In Odissa?  ",
        answers: ["Purijagannath Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Purijagannath Temple",
        questionId: "26002",
      },
      {
        question: "How old are the rocks in Odisha?  ",
        answers: ["2 billion years","3 million years","3 trillion years ", "3 billion years"],
        correct: "3 billion years",
        questionId: "26003",
      },
      {
        question: "Is Odia the Official language spoken in Odissa? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "26004",
      },
      {
      question: "Is Garadi the dance form of Odisha? ",
      answers: ["True", "False"],
      correct: "False",
      questionId: "26005",
    },
    ],
  },
  {
    id: 27,
    description: {
      image: Puducherry,
    },
    questions: [
        {
          question: "What Is The Capital Of Puducherry?  ",
          answers: ["Puducherry", "Pondicherry","Lucknow","Jaipur"],
          correct: "Pondicherry",
          questionId: "27001",
        },
        {
          question: "Which of the following are The Neighboring State Of Puducherry?  ",
          answers: ["Tamil Nadu and Arunachal Pradesh", "Kerala and Karnataka","Telangana and Andhra Pradesh", "Goa and Kerala"],
          correct: "Kerala and Karnataka",
          questionId: "27002",
        },
        {
          question: "Puducherry is also know as_____ ",
          answers: ["Sugar Bowl of India","Gods own Country","France of India", "Queen of Hills"],
          correct: "France of India",
          questionId: "27003",
        },
        {
          question: "Is Telugu the official Language of Puducherry? ",
          answers: ["True", "False"],
          correct: "False",
          questionId: "27004",
        },
        {
          question: "Which of the following from below is dance form of Puducherry? ",
          answers: ["Garadi", "Garba","Cheraw","Kathi"],
          correct: "Garadi",
          questionId: "27005",
        },
    ],
  },
  {
    id: 28,
    description: {
      image: punjab,
    },
    questions: [
      {
        question: "Which Is The NOT a Neighboring State Of Punjab?  ",
        answers: ["New Delhi", "Rajasthan","Haryana","Himachal Pradesh"],
        correct: "New Delhi",
        questionId: "28001",
      },
      {
        question: "Which Is The a Tourist Attractions In Punjab?  ",
        answers: ["Charminar", "Hawa Mahal","Golden Temple", "Golkonda Fort"],
        correct: "Golden Temple",
        questionId: "28002",
      },
      {
        question: "What Is The Capital Of Punjab?  ",
        answers: ["New Delhi","Haryana","Chandigarh", "Kohima"],
        correct: "Chandigarh",
        questionId: "28003",
      },
      {
        question: "Does Punjab has the least visited torist site in India? ",
        answers: ["True", "False"],
        correct: "False",
        questionId: "28004",
      },
      {
        question: "Is the population of Punjab, 2 crore 77 lakh?  ",
        answers: ["True","False"],
        correct: "True",
        questionId: "28005",
      },
    ],
  },
  {
    id: 29,
    description: {
      image: rajasthan,
    },
    questions: [
      {
        question: "What Is The Capital Of Rajasthan? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Jaipur",
        questionId: "29001",
      },
      {
        question: "Which Is The a Tourist Attractions In Rajasthan?  ",
        answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Hawa Mahal",
        questionId: "29002",
      },
      {
        question: "Which of the following Is The NOT a Neighboring State Of Rajasthan?  ",
        answers: ["Delhi","Haryana","Uttar Pradesh", "Madhya Pradesh"],
        correct: "Delhi",
        questionId: "29003",
      },
      {
        question: "Is Rajasthan the largest State of India? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "29004",
      },
      {
        question: "Which of the following from below is dance form of Rajasthan? ",
        answers: ["Odissi", "Garhwali","Alkap","Ghumar"],
        correct: "Ghumar",
        questionId: "29005",
      },
    ],
  },
  {
    id: 30,
    description: {
      image: sikkim,
    },
    questions: [
      {
        question: "What Is The Official Language Of Sikkim? ",
        answers: ["Bengali", "Punjabi","Nepali","Hindi"],
        correct: "Nepali",
        questionId: "30001",
      },
      {
        question: "What Is The Capital Of Sikkim?  ",
        answers: ["Chennai", "Punjab","Jaipur", "Gangtok"],
        correct: "Gangtok",
        questionId: "30002",
      },
      {
        question: "Which Is The Neighboring State Of Sikkim?  ",
        answers: ["West Bengal", "Karnataka", "Andhra Pradesh", "Ladakh"],
        correct: "West Bengal",
        questionId: "30003",
      },
      {
        question: "Which of The following is Tourist Attractions In Sikkim ?  ",
        answers: ["Yuksom", "Jantar Mantar","Rameshwaram", "Golden Temple",],
        correct: "Yuksom",
        questionId: "30004",
      },
      {
        question: "What is the population of Sikkim ?  ",
        answers: ["6 lakh 10 thousand", " 56 lakh 85 thousand","1 lakh 78 thousand", "42 thousand",],
        correct: "6 lakh 10 thousand",
        questionId: "30005",
      },
    ],
  },
  {
    id: 31,
    description: {
      image: Tamil,
    },
    questions: [
      {
        question: "What Is The Official Language Of Tamil Nadu? ",
        answers: ["Bengali", "Punjabi","Tamil","Hindi"],
        correct: "Tamil",
        questionId: "31001",
      },
      {
        question: "What Is The Capital Of Tamil Nadu?   ",
        answers: ["Chennai", "Punjab","Jaipur", "Gangtok"],
        correct: "Chennai",
        questionId: "31002",
      },
      {
        question: "Which of the following Is The NOT a Neighboring State Of Tamil Nadu?  ",
        answers: ["West Bengal", "Karnataka", "Andhra Pradesh", "Kerala"],
        correct: "West Bengal",
        questionId: "31003",
      },
      {
        question: "Which of The following is Tourist Attractions In Tamil Nadu?  ",
        answers: ["Yuksom", "Jantar Mantar","Rameshwaram", "Golden Temple",],
        correct: "Rameshwaram",
        questionId: "31004",
      },
      {
        question: "Is Perini Sivatamdavam the dance form of Tamil Nadu? ",
        answers: ["True", "False"],
        correct: "False",
        questionId: "31005",
      },
    ],
  },
  {
    id: 32,
    description: {
      image: Telangana,
    },
    questions: [
      {
        question: "Which of The following is Tourist Attractions In Telangana? ",
        answers: ["Sun Temple", "Hawa Mahal","Kodaikanal", "Golkonda Fort"],
        correct: "Golkonda Fort",
        questionId: "32001",
      },
      {
        question: "What Is The Official Language Of Telangana?   ",
        answers: ["Tamil", "Punjabi","Hindi", "Telugu"],
        correct: "Telugu",
        questionId: "32002",
      },
      {
        question: "Which Is The Neighboring State Of Telangana?  ",
        answers: ["West Bengal", "Karnataka", "Kerala", "Ladakh"],
        correct: "Karnataka",
        questionId: "32003",
      },
      {
        question: "Telangana is only state that personifies food as gods ",
        answers: ["True", "False"],
        correct: "False",
        questionId: "32004",
      },
      {
        question: "What is the population of Telangana ?  ",
        answers: ["1 crore 19 lakh 64 thousand", " 3 crore 50 lakh ","1lakh 78 thousand", "1 lakh 42 thousand",],
        correct: "3 crore 50 lakh",
        questionId: "32005",
      },
    ],
  },
  {
    id: 33,
    description: {
      image: Tripura,
    },
    questions: [
      {
        question: "What Is The Official Language Of Tripura?  ",
        answers: ["Bengali", "Punjabi","Nepali","Hindi"],
        correct: "Bengali",
        questionId: "33001",
      },
      {
        question: "What Is The Capital Of Tripura?   ",
        answers: ["Agartala", "Aizwal","Lucknow", "Gangtok"],
        correct: "Agartala",
        questionId: "33002",
      },
      {
        question: "Tripura is also known as_____  ",
        answers: ["Sugar Bowl of India","Home of Bamboo","France of India", "Queen of Hills"],
        correct: "Home of Bamboo",
        questionId: "33003",
      },
      {
        question: "Which of The following is Tourist Attractions In Tripura ?  ",
        answers: ["Victoria Memorial", "Jantar Mantar","Rameshwaram", "Ujjyanta Palace",],
        correct: "Ujjyanta Palace",
        questionId: "33004",
      },
      {
        question: "Which of the following from below is dance form of Tripura? ",
        answers: ["Odissi", "Garhwali","Alkap","Hojagiri"],
        correct: "Hojagiri",
        questionId: "33005",
      },
    ],
  },
  {
    id: 34,
    description: {
      image: Up,
    },
    questions: [
      {
        question: "Which of The following is Tourist Attractions in Uttar Pradesh ?  ",
        answers: ["Victoria Memorial", "Taj Mahal","Dakshineswar Kali Temple", "Ujjyanta Palace"],
        correct: "Taj Mahal",
        questionId: "34001",
      },
      {
        question: "What Is The Capital Of Uttar Pradesh?   ",
        answers: ["Agra", "Varanasi","Noida", "Lucknow"],
        correct: "Lucknow",
        questionId: "34002",
      },
      {
        question: "Which of the following are The Neighboring State Of Uttar Pradesh?  ",
        answers: ["West Bengal and Jharkhand", "Karnataka and Chhattisgarh", "Andhra Pradesh and Madhya Pradesh", "Delhi and Uttarakhand"],
        correct: "Delhi and Uttarakhand",
        questionId: "34003",
      },
      {
        question: "Is Uttar Pradesh also known as Queens of hills? ",
        answers: ["True", "False"],
        correct: "False",
        questionId: "34004",
      },
      {
        question: "Which of the following from below is dance form of Uttar Pradesh? ",
        answers: ["Odissi", "Garhwali","Alkap","Nautanki"],
        correct: "Nautanki",
        questionId: "34005",
      },
    ],
  },
  {
    id: 35,
    description: {
      image: Uttrakhand,
    },
    questions: [
      {
        question: "What Is The Capital Of Uttarakhand? ",
        answers: ["Dehradun", "Chandigarh","Lucknow","Jaipur"],
        correct: "Dehradun",
        questionId: "35001",
      },
      {
        question: "Is Uttarakhand home of Valleys of Flowers?  ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "35002",
      },
      {
        question: "Which of the following is NOT The Neighboring State Of Uttarakhand? ",
        answers: ["Uttar Pradesh", "Himachal Pradesh", "New Delhi", "Haryana"],
        correct: "New Delhi",
        questionId: "35003",
      },
      {
        question: "Which of The following is Tourist Attractions In Uttarakhand?  ",
        answers: ["Nainital Lake", "Sarafa Bazaar","Rameshwaram", "Neermahal",],
        correct: "Nainital Lake",
        questionId: "35004",
      },
      {
        question: "Is Garhwali the dance form of Uttarakhand? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "35005",
      },
    ],
  },
  {
    id: 36,
    description: {
      image: Bengal,
    },
    questions: [
      {
        question: "What Is The Official Language Of West Bengal? ",
        answers: ["Bengali", "Punjabi","Nepali","Hindi"],
        correct: "Bengali",
        questionId: "36001",
      },
      {
        question: "What Is The Capital Of West Bengal?  ",
        answers: ["Chennai", "Imphal","Kolkata", "Gangtok"],
        correct: "Kolkata",
        questionId: "36002",
      },
      {
        question: "Which of the following is The Neighboring State Of West Bengal?   ",
        answers: ["Arunachal Pradesh", "Sikkim", "Andhra Pradesh", "Ladakh"],
        correct: "Sikkim",
        questionId: "36003",
      },
      {
        question: "Is West Bengal 3rd largest copper producing state in India? ",
        answers: ["True", "False"],
        correct: "False",
        questionId: "36004",
      },
      {
        question: "Is Kathi the dance form of West Bengal? ",
        answers: ["True", "False"],
        correct: "True",
        questionId: "36005",
      },
    ],
  },

];

  
const quizService = (n = 1) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
export default quizService;
