import React from "react";

export function Register() {
    return (
        <div id="wrappRegister">
            <div id="left">
                <button id="backBnt"> <img src="backBtn.png" alt=""></img></button>
            </div>

            <div id="right">
                <form class="main">

                    <div className="divForInfoRegister" id="divName">
                        <label class="inp">Ім'я</label> <br />
                        <input type="text" class="inputInfo" /><br />
                    </div>

                    <div className="divForInfoRegister">
                        <label class="inp">Фамілія</label> <br />
                        <input type="text" class="inputInfo" /><br />
                    </div>
                    <div className="divForInfoRegister">
                        <label class="inp">Дата народження</label> <br />
                        <input type="date" class="inputInfo" /><br />
                    </div>
                    <div className="divForInfoRegister">
                        <label class="inp">Країна</label> <br />
                        <input type="text" class="inputInfo" /><br />
                    </div>
                    <div className="divForInfoRegister">
                        <label class="inp">Адреса</label> <br />
                        <input type="text" class="inputInfo" /><br />
                    </div>
                    <div className="divForInfoRegister">
                        <label class="inp">мобільний номер</label> <br />
                        <input type="text" class="inputInfo" /><br />
                    </div>
                    <br />
                    <p class="text">By entering your mobile number and one-time code sign-in option, <br />
                        you agree to receive a one-time verification coe via SMS from IKEA. <br />
                        Message and data rates may apply.</p>
                    <p class="text2">More info about Private Policy</p>
                    <div className="divForInfoRegister">
                        <label class="inp">Електронна пошта або мобільний номер:</label> <br />
                        <input type="text" class="first" /><br />
                    </div>
                    <div className="divForInfoRegister" id="divForPass">
                        <label class="inp">Пароль:</label> <br />
                        <div id="pass">
                            <input type="password" id="inputPass" /><br />
                        </div>
                    </div>
                    <div id="divForAgree">
                        <div id="divForCheckboxSaveInfo">
                            <input type="checkbox" value='1' id="saveInfo" />
                        </div>
                        <div id="divForTextIAgree">
                            <p id="iAgree">Я, ознайомлений з Політикою конфіденційності з обробки та захисту персональних даних</p>
                        </div>
                    </div>
                    <br />

                    <button class="Akk" href="#">Продовжити</button>

                </form>
            </div>
        </div>
    );
}
