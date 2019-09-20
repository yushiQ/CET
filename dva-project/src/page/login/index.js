import React from "react";
import { connect } from "dva";
import styles from "./index.css";
let data = {
  login: {
    text: "牛牛号/电话",
    password: "输入密码",
    btn: "登录"
  },
  sign: {
    text: "请输入你的账户",
    password: "输入密码",
    btn: "注册"
  }
};

let initdata = function initiaLize($hint) {
  let $el = "";
  if ($hint === "login") {
    $el = `<div className={styles.Input}>
    <input type="text" placeholder=${data.login.text} />
  </div>
  <div className={styles.Input}>
    <input type="password" placeholder=${data.login.password}/>
  </div>
  <div className={styles.checkbox}>
    <input type="checkbox" />
    两周内自动登录
    </div>
  <button className={styles.but}>${data.login.btn}</button> `
  } else if ($hint === "sign") {
    $el = `<div className={styles.Input}>
    <input type="text" placeholder=${data.sign.text} />
  </div>
  <div className={styles.Input}>
    <input type="password" placeholder=${data.sign.password}/>
  </div>
  <button className={styles.but}>${data.sign.btn}</button> `
  }
  return $el
}

function Login() {
  
  return (
    <div className={styles.login}>
      <header className={styles.header}>
        <div className={styles.title}>重点学生日考成绩录入管理系统</div>
      </header>
      <main className={styles.main}>
        <div className={styles.content}>
          <h2>网站工程</h2>
          <div className={styles.usertitle}>
            <span className={styles.userlogin} onClick={() => { initiaLize("login") }}>登录</span>
            <span className={styles.usersign} onClick={() => { initiaLize("sign") }}>注册</span>
          </div>
          {/* {initdata} */}
          {/* <div className={styles.Input}>
            <input type="text" placeholder={initdata.text} />
          </div>
          <div className={styles.Input}>
            <input type="password" placeholder={initdata.password} />
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" />
            两周内自动登录
            </div>
          <button className={styles.but}>{initdata.btn}</button> */}
        </div>
      </main>
    </div>
  );
}

// Object.assign(Login.prototype,{
//   fn(){
//     console.log("123")
//   }
// })

// console.log(Login.prototype)

export default connect()(Login);
