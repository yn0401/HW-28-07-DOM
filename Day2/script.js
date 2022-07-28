
let cardStyle={
    backgroundColor: "white" ,
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    width: "30%",
    borderRadius: "5px",
    margin: "auto",
    marginTop: "140px",
   
    // backgroundColor: "red" 
    
}

let contentStyle = {
    paddingTop: "40px",
    paddingBottom: "40px",
    paddingLeft: "40px",
    paddingRight: "40px",
}

let imageStyle ={
    width : "120px",
    height : "40px",
}

let inputStyle = {
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderRadius: "0 0 1px 0",
    fontSize: "16px",
    height: "40px",
    width: "400px",
}

let aStyle ={
    color:"dodgerblue",
}

let textStyle ={
    color:"dodgerblue",
}

let nextStyle={
    height: "40px",
    width: "120px",
    color: "white",
    border: "none",
    backgroundColor: "royalblue",
    paddingTop: "20px",
    paddingLeft: "300px",
    paddingBottom: "30px",
}

let nextsubmitStyle = {
    height: "2px",
    width: "150px",
    color: "white",
    fontSize: "20px",
    textAlign:"center",
    border: "none",
    backgroundColor: "royalblue",
    marginTop: "20px",
    paddingTop: "10px",
    marginLeft: "230px",
    paddingBottom: "30px",
}

let card02Style = {
    backgroundColor: "white" ,
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    width: "30%",
    borderRadius: "5px",
    margin: "30px auto",
  }

let divsignStyle={
    display: "inline-block",
}
let tileimgStyle= {
    float: "left",
}

let text01Style={
    fontSize: "15px",
    color: "darkgray",
    float: "right",
}
// let content = document.getElementsByClassName("content");


const card = document.createElement("div");
card.className = "card";
document.body.appendChild(card)
Object.assign(card.style, cardStyle);

const content = document.createElement("div");
content.className = "content";
card.appendChild(content)
Object.assign(content.style, contentStyle);

const image = document.createElement("img");
image.className = "image";
image.src = "microsoft.png";
content.appendChild(image);
Object.assign(image.style, imageStyle);

const h1 = document.createElement("h1");
content.appendChild(h1)
h1.innerHTML = "Sign in";


const input = document.createElement("input");
input.type = "text";
// input.className = "email"; // set the CSS class
content.appendChild(input); // put it into the DOM
Object.assign(input.style, inputStyle);
input.placeholder = "Email, Phone, or Skype";

input.onkeydown = function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
    console.log(event.key);
  };

const p = document.createElement("p");
p.innerHTML="No account ?"
const a = document.createElement("a");
a.className="create1";
let text = document.createTextNode('Create one!');
content.appendChild(text);
a.innerHTML ="Sign in with Windows Hello or a security key";
content.appendChild(p);
content.appendChild(a);
Object.assign(a.style, aStyle);
// a.href = "Sign in with Windows Hello or a security key";


const img = document.createElement("img");
image.className = "img";
img.src = "https://logincdn.msauth.net/shared/1.0/content/images/documentation_bcb4d1dc4eae64f0b2b2538209d8435a.svg";
content.appendChild(img);

const nextsubmit = document.createElement("div");
nextsubmit.className = "nextsubmit";
nextsubmit.innerHTML = 'Next';
content.appendChild(nextsubmit);
// Object.assign(button.style, buttonStyle);
Object.assign(nextsubmit.style, nextsubmitStyle);

const br= document.createElement("br");
br.className = "br";
card.appendChild(br);

const card02 = document.createElement("div");
card02.className = "card02";
document.body.appendChild(card02);
Object.assign(card02.style, card02Style);

const divsign = document.createElement("div");
divsign.className = "divsign";

card02.appendChild(divsign);
Object.assign(divsign.style, divsignStyle);
// Object.assign(content.style, contentStyle);

const image01 = document.createElement("img");
image01.className = "tile-img medium";
image01.src = "https://logincdn.msauth.net/shared/1.0/content/images/signin-options_4e48046ce74f4b89d45037c90576bfac.svg";
// image01.innerHTML="Sign-in options";
divsign.appendChild(image01);
// Object.assign(tileimg.style, tileimgStyle);

// const p01 = document.createElement("p");
// p01.className="signin";
// p01.innerHTML="Sign-in options";
// divsign.appendChild(p01);
// Object.assign(signin.style, signinStyle);

let text01 = document.createElement("p");
text01.className="text01";
text01.innerHTML="Sign-in options"
divsign.appendChild(text01);
Object.assign(text01.style, text01Style)