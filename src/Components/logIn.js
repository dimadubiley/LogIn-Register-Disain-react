import React from "react";

export function LogIn() {
    return (
        <div id="wrappLogIn">
            <div id="left">
                <button id="backBnt"> <img src="backBtn.png" alt=""></img></button>
                <div id="divForH1">
                    <h1 id="title">заповніть вхід до облікового запису</h1>
                </div>
            </div>

            <div id="right">
                <form class="main">

                    <label class="inp">Електронна пошта або мобільний номер:</label> <br />
                    <input type="text" class="first" /><br />
                    <p class="text">By entering your mobile number and one-time code sign-in option, <br />
                        you agree to receive a one-time verification coe via SMS from IKEA. <br />
                        Message and data rates may apply.</p>
                    <p class="text2">More info about Private Policy</p>
                    <label class="inp">Пароль:</label> <br />
                    <div id="pass">
                        <input type="password" id="inputPass" /><br />
                        <button id="buttonPass">
                            <img src="/Vector.png" alt="" id="ies"></img>
                        </button>
                    </div>
                    <div id="divForBtnForgotPass">
                        <a id="butforgotPass">Забули свій пароль?</a>
                    </div>
                    <br />
                    <div id="divForSaveInfo">
                        <input type="checkbox" value='1' id="saveInfo" />
                        <p>Зберегти інформацію</p>
                        <div id="divForInfo">
                            <img src="/info.png"/>
                        </div>
                    </div>
                    <br />

                    <button class="Akk" href="#">Продовжити</button>

                    <p class="pMa">У вас це не має облікового запису? Створіть його:</p>
                    <button class="Ma" href="#">Створити аккаунт</button>

                </form>
            </div>
        </div>
    );
}
