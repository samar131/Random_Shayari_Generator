const shayari = [
    "Zindagi ke kuch lamhe yaadgar hote hain,Yadoon mein kuch log khass hote hain,Yu to woh door hote hain nazaron se,Par unke ehsaas dil ke paas hote hain.",
    "Teri har nakami ko kamyabi me badal dunga,Tere har sapno ko haqeekat me badal dunga,Aye dost hum khuda se dua aisi karenge..ki tere har gham ko khusi me badal denge..",
    "Kuch Rishtey Uparwaala Banaata hai,Kuch Rishte Log Banaate hain,Par wo, log Bahut Khaas Hote hain,Jo Bina Rishte ke Koi Rishta Nibhate hain.",
    "Zindagi ne mujhe bahut kuch sikhaya Thanhayi mein jeena sikhaya,Pyar ko chupana sikhaya, Doston se haske milna sikhaya,Aur man hi man rona sikhaya,Ab  kya kahunZindagi ne bahut kuch sikhaya Magar jeena nahin sikhaya",
    "Dost dost na raha, pyaar pyaar naa rahaJis pai bi aitbaar kiya, wo bewafa nikla,Jinke sath dost ban raha, wo dushman nikla,mera dost hi mera pyar le udha !!!",
    "Koi hasaae to has lete hai,Dil mein dard ho to ro lete hai,Neend waise bhi kam aati hai,Par sapno mein tum aaogi,Yeh soch ke so lete hai.",
    "Bekhudi ki zindagi hum jiya nahi karte,jaam dusro se chinkar piya nahi karte,unko mohobbat he to aakar izhar karewarna hum kisika picha nahi karte.Keval Khona",
    "Maut se dar nahi lagta mujhko,Tere sajda me zindgi bitana chahta hu.Bas kami hai tere rahmo karm ki maula,Mai to tere paas aana chahta hu.",
    "Zindagi hai kuch pal ki baki abhi..In palo ko mere sath tum guzar lo..Kal ka na karao intezar tum..Aaj mila hai mauka mera hath tham lo.",
    "Mene b badal diye apne zindagi k usul, Ab jo yaad karega woh yaad rahega",
    "Sabne kaha Dosti ek Dard hai Humne kaha Dard kabool hai Subne kaha is Dard ke saath Jee na Paogay Humne kaha teri Dosti ki saath Marna kabool hai",
    "Muskurana hi Khushi nahi hoti, Umar bitana hi Zindagi nahi hoti, Khud se bhi zyada khayal rakhna padta hai dosto ka, Kyoki Dost kehna hi Dosti nahi hoti.",
    "Mein bhula nahi hu kisi ko Mere bahut aache DOST hai jamane me, Bas thodi zindgi ulajhi padi hai Doo waqt ki roti kamane me",
    "Bindas muskurao kya gum hai, zindgi me tension kisko kam hai, aacha ya bura to kewal brham hai, zindgi ka naam hi, kabhi khushi kabhi gum hai.",
    "Mohabat ke har raste me Dard hi dard milega Mein soch raha hu Uss raste pe Medical store Khol lu Mast chalega",
    "Har taraf padhai ka saya hai, Kitabo main sukh kisne paya hai, Ladke to jate hai tution ladkiyan dekhne, Aur sir kehte hai dekho itni barsat mai ladka padhne aya hai",
    
]

let button = document.getElementById('btn');

const getNewShayari = () => {
    let showShayari = document.getElementById('showShayari').innerHTML = shayari[Math.floor(Math.random() * shayari.length)];
}