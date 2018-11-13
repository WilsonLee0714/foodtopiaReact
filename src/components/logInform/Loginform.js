import React, { Component } from 'react';
import "./Loginform.scss";

class Loginform extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div id='lightBox' class="lightBox">
                    <div id='close' class='close'>×</div>

                    {/* form */}

                    <div class="module form-module" id="form-module">
                        <div class="toggle" type="button"><i class="fa fa-times fa-pencil">註冊</i>
                            <div class="tooltip">點我</div>
                        </div>
                        <div class="form">
                            <h2>會員登入</h2>
                            <form>
                                <input type="text" placeholder="帳號" />
                                <input type="password" placeholder="密碼" />
                                <button type="button">登入</button>
                            </form>
                        </div>
                        <div class="form">
                            <h2>會員註冊</h2>
                            <form>
                                <input type="text" placeholder="帳號" />
                                <input type="password" placeholder="密碼" />
                                <input type="email" placeholder="信箱" />
                                <input type="tel" placeholder="電話" />
                                <button type="button">註冊</button>
                            </form>
                        </div>
                        <div class="cta" type="button"><a href="">忘記密碼?</a></div>
                    </div>

                    {/* form */}

                </div>
            </React.Fragment>
        );
    }
    componentDidMount() {
        var close = document.getElementById('close');
        var lightBox = document.getElementById('lightBox');
        close.addEventListener('click', function () {
            lightBox.style.opacity = '0';
            setTimeout(function () {
                lightBox.style.display = 'none';
            }, 500)
        })
        // form
        var y = true
        var t = document.querySelector('.toggle')
        var f = document.querySelector('.form')
        t.addEventListener('click',function(event){
            event.preventDefault()
            event.stopPropagation()
            // Switches the Icon
            var x = t.children('i')
            // x.toggleClass('fa-pencil');
            if (y == true) {
                x.html('登入');
                y = false
            } else {
                x.html('註冊');
                y = true
            }
            // Switches the forms  
            f.animate({
                height: "toggle",
                'padding-top': 'toggle',
                'padding-bottom': 'toggle',
                opacity: "toggle"
            }, "slow");

        })

        // form
    }
}

export default Loginform;
