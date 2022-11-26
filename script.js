const Bars = document.querySelector(".fa-bars");
const Close_Times = document.querySelector("#fa-times");
const List = document.querySelector(".list_hide");
const Times = document.getElementById("times");
const Open_acct = document.querySelectorAll(".Open_Acct");
const SignUp = document.querySelector(".SignUp");
const Opacity = document.querySelector(".opacity");
const Close_signup = document.getElementById("close_signup");
const Open_Acct_BTN = document.querySelector(".BTN1");
const SignUp_Value = document.getElementById("signUp");
const Password_Value = document.getElementById("password");
const entireBody = document.querySelector(".EntireBody1");
const BankAppDisplay = document.querySelector(".BankAppDisplay");
const Em = document.getElementsByTagName("em");
const SendBTN = document.querySelector("#SendBTN");
const SendOption = document.querySelector(".sendOption");
const SecondSend = document.querySelector(".SecondSend");
const AcctName = document.querySelector("#AcctName");
const AcctNum = document.querySelector("#AcctNum");
const Amt2Send = document.querySelector("#Amt2Send");
const HISTOTY = document.querySelector(".Histoty");
const Withdraw = document.querySelector("#Withdraw");
const SendEmail = document.querySelector(".SendEmail");
const TextArea = document.querySelector(".TextArea");
const EmailInput = document.querySelector(".EmailInput");
let Value1;
let Value2;

console.log(Open_acct);

console.log(SendEmail, TextArea, EmailInput);

const AvailAccts = function (UserName, Password, Balance) {
  (this.UserName = UserName),
    (this.Password = Password),
    (this.Balance = Balance);
};

const User1 = new AvailAccts("Soolaiman", 2003, 20500.68);
const User2 = new AvailAccts("Nazif", 2002, 30180.0);
let AvailBalance = User1.Balance;
let AvailBalance2 = User2.Balance;
console.log(AvailBalance);

Bars.addEventListener("click", function (e) {
  e.preventDefault();
  Times.style.display = "block";
  Bars.style.display = "none";
  List.style.display = "block";
});

Times.addEventListener("click", function (e) {
  e.preventDefault();
  Bars.style.display = "block";
  Times.style.display = "none";
  List.style.display = "none";
});

for (let i = 0; i < Open_acct.length; i++) {
  Open_acct[i].addEventListener("click", function (e) {
    e.preventDefault();
    SignUp.style.display = "block";
    Opacity.style.display = "block";
  });
}

Close_signup.onclick = (e) => {
  e.preventDefault();
  SignUp.style.display = "none";
  Opacity.style.display = "none";
};

// const newAccount = {
//   Value1: SignUp_Value.value,
//   Value2: Email_Value.value,
//   Value3: Password_Value.value,
//   Value4: PhoneNum_Value.value,

//   OpenAcct: function () {
//     console.log(this.Value1);
//   },
// };

Open_Acct_BTN.addEventListener("click", function (e) {
  e.preventDefault();
  Value1 = SignUp_Value.value;
  Value2 = Password_Value.value;

  if (Value1 == "" || Value2 == "") {
    alert(`Oh No!!Incorrect Password/Username`);
  } else if (Value1 == User1.UserName && Value2 == User1.Password) {
    alert("Login Success");
    entireBody.classList.add("hidden");
    BankAppDisplay.classList.remove("hidden");
    Em[1].textContent = `${User1.UserName}`;
    Em[2].textContent = `${User1.Balance}`;
  } else if (Value1 == User2.UserName && Value2 == User2.Password) {
    alert("Login Success");
    entireBody.classList.add("hidden");
    BankAppDisplay.classList.remove("hidden");
    Em[1].textContent = `${User2.UserName}`;
    Em[2].textContent = `${User2.Balance}`;
    Value1 = "";
    Value2 = "";
  }
});

SendBTN.onclick = () => {
  SendOption.classList.remove("hidden");
  Opacity.style.display = "none";
};

Close_Times.addEventListener("click", function () {
  SendOption.classList.add("hidden");
});

SecondSend.onclick = () => {
  const Value1 = AcctName.value;
  const Value2 = AcctNum.value;
  let Value3 = Amt2Send.value;
  Value3 = +Value3;

  if (Value1 == "" || Value2 == "" || Value3 == "") {
    alert(`Cant Send Money Fill Form First`);
  } else if (
    Value1 == !isFinite ||
    Value2 == !isFinite ||
    Value3 == !isFinite
  ) {
    alert(`Input Possible Values In Forms`);
  } else {
    alert(`${Value3} Sent to ${Value1}`);
    AvailBalance = AvailBalance - Value3;
    AvailBalance2 = AvailBalance2 - Value3;
    Em[2].textContent = AvailBalance;
    Em[2].textContent = AvailBalance2;
    SendOption.classList.add("hidden");

    const html = `<div class="credit">
                <div class="credit_writeUp">
                  Sent -${Value1}
                </div>
                  <div class="creditIcon">
                   <h3>$${Value3}</h3>
                   <i class="fa fa-arrow-up" aria-hidden="true"></i>
                  </div>
              </div>`;
    let NewDiv = document.createElement("div");
    NewDiv.innerHTML = html;
    HISTOTY.append(NewDiv);
  }
};

Withdraw.onclick = () => {
  alert(`Coming Soon!!!`);
};

SendEmail.addEventListener("click", function () {
  const TextValue = TextArea.value;
  const InputEmail = EmailInput.value;
  if (TextArea == "" || InputEmail == "") {
    alert(`Message Not Sent!!Fill Form Fill`);
  } else {
    alert(`Your Message Is Being Sent!`);
    Email.send({
      Host: "smtp.gmail.com",
      Username: `suleimaangee@gmail.com`,
      Password: "ccygfnkvzcrdmqsf",
      To: "suleimaangee@gmail.com",
      From: `${InputEmail}`,
      Subject: "This is the subject",
      Body: `${TextValue}`,
    }).then((message) => alert(message));
  }
});
