let celebrity = [
    {
        name:"Abdul_Sattar_Edhi",
        title:"Founder of edhi Foundation",
        wikipidia:"https://en.wikipedia.org/wiki/Abdul_Sattar_Edhi",
        img:"edhi.jpg",
        quote:"My religion is humanitarianism, which is the basis of every religion in the world”"
    },
    {
        name:"Malala",
        title:"Activist for female education",
        wikipidia:"https://en.wikipedia.org/wiki/Malala_Yousafzai",
        img:"malala.jpg",
        quote:"One child, one teacher, one book, one pen can change the world."
    },
    {
        name:"Quaid-e-azam",
        title:"Founder of Pakistan",
        wikipidia:"https://en.wikipedia.org/wiki/Muhammad_Ali_Jinnah",
        img:"quaid-e-azam.jpg",
        quote:"With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve."
    },
    {
        name:"Marium Mukhtiar",
        title:"Flying Officer",
        wikipidia:"https://en.wikipedia.org/wiki/Marium_Mukhtiar",
        img:"marium.jpg",
        quote:"Werid is the way of these lofty passion, You laugh,and I feel the joy"
    },
    {
        name:"Abdul Qadir Khan",
        title:"Physicist",
        wikipidia:"https://en.wikipedia.org/wiki/Abdul_Qadeer_Khan",
        img:"abdul.khan.jpg",
        quote:"Nation should be rest assured Pakistan is a safe atomic power"
        
    },
    {
        name:"Benazir Bhutto",
        title:"11th Prime Minister of Pakistan",
        wikipidia:"https://en.wikipedia.org/wiki/Benazir_Bhutto",
        img:"benazir-bhutto.jpg",
        quote:"Democracy is necessary to peace and to undermining the forces of terrorism."

    },
    {
        name:"Imran Khan",
        title:"Cricketer",
        wikipidia:"https://en.wikipedia.org/wiki/Imran_Khan",
        img:"imran-khan.jpg",
        quote:"The more you study, the more you know; how less you know."
    },
    {
        name:"Shehzad Mirza",
        title:"Inter National Chess Master",
        wikipidia:"https://chess-db.com/public/pinfo.jsp?id=7800088",
        img:"shehzad.jpg",
        quote:"Most of the girls can outshine men in national chess tournaments"
    }
]

function  initializer() {
    let celebGroupEL = document.querySelector("#celeb-list");
    for ( let i = 0; i < celebrity.length; i ++) {
        celebGroupEL .innerHTML += `<div class="celebrity-img-div" 
        style="background-image:url('images/${celebrity[i].img}')" onclick="celebChange(${i})">
        <p class="celeb-img-text">${celebrity[i].name}</p>
        </div>
        `
    
    }
}

function celebChange(celebIndex) {
    document.querySelector("#celeb-name").innerHTML=celebrity[celebIndex].name;
    document.querySelector("#celeb-title").innerHTML=celebrity[celebIndex].title;
    document.querySelector("#celeb-img").style["background-image"]=`url(images/${celebrity[celebIndex].img})`;
    document.querySelector("#celeb-qoute").innerHTML=celebrity [celebIndex].quote;
    document.querySelector("#celeb-link a").href=celebrity [celebIndex]. wikipidia;
}
