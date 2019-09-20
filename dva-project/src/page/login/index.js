import React, { useState, useEffect } from "react";
// import { connect } from "dva";
import styles from "./index.css";
import { login, sign } from "../../services/example";
//引入组件
import Dialog from "../../components/dialogs";
let data = {
  login: {
    text: "牛牛号/电话",
    password: "请输入密码",
    btn: "登录"
  },
  sign: {
    text: "请输入你的账户",
    password: "请设置密码",
    btn: "注册"
  }
};
function Login(props) {
  let [datas, setData] = useState({});
  let [isShow, setShow] = useState(Boolean);
  //弹框数据
  let [title, setTitle] = useState("");
  let [isDialog, setDialog] = useState(Boolean);
  //登录数据
  let [username, setUsername] = useState("");
  let [password, setUserPassword] = useState("");
  //初始数据
  useEffect(() => {
    setData(data.login);
    setShow(true);
  }, []);
  let initiaLize = $hint => {
    //改变数据
    if ($hint === "login") {
      setData(data.login);
      setShow(true);
    } else if ($hint === "sign") {
      setData(data.sign);
      setShow(false);
    }
  };
  //设置用户信息
  let setName = e => {
    setUsername(e.target.value);
  };
  let setPassword = e => {
    setUserPassword(e.target.value);
  };
  let member = $hint => {
    let flogName = /^[a-zA-Z]\w{3,15}$/.test(username);
    let flogPwd = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(password);
    if (!flogName) {
      console.log(123);
      setDialog(true);
      setTitle("用户名不正确");
    } else if (!flogPwd) {
      setDialog(true);
      setTitle("密码不正确");
    } else {
      if ($hint === "登录") {
        login({
          method: "post",
          mode: "cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username,
            password
          })
        }).then(res => {
          if (res.data.code === 1) {
            setDialog(true);
            setTitle(res.data.msg);
            props.history.push("/headmaster");
          } else {
            setDialog(true);
            setTitle(res.data.msg);
          }
        });
      } else {
        sign({
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username,
            password
          })
        }).then(res => {
          if (res.data.code === 1) {
            setDialog(true);
            setTitle(res.data.msg);
          } else {
            setDialog(true);
            setTitle(res.data.msg);
          }
        });
      }
    }
  };
  let setTimer = () => {
    setTimeout(() => {
      setDialog(false);
    }, 2000);
  };
  return (
    <div className={styles.login}>
      <header className={styles.header}>
        <div className={styles.title}>重点学生日考成绩录入管理系统</div>
      </header>
      <main className={styles.main}>
        <div className={styles.content}>
          <h2>网站工程</h2>
          <div className={styles.usertitle}>
            <span
              className={styles.userlogin}
              onClick={() => {
                initiaLize("login");
              }}
            >
              登录<i className={isShow ? styles.moving : styles.left}></i>
            </span>
            <span
              className={styles.usersign}
              onClick={() => {
                initiaLize("sign");
              }}
            >
              注册
            </span>
          </div>
          <div className={styles.Input}>
            <input
              type="text"
              placeholder={datas.text}
              value={username}
              onChange={setName}
            />
          </div>
          <div className={styles.Input}>
            <input
              type="password"
              placeholder={datas.password}
              onChange={setPassword}
            />
          </div>
          {isShow ? (
            <div className={styles.checkbox}>
              <input type="checkbox" />
              两周内自动登录
            </div>
          ) : (
            <div className={styles.checkbox}></div>
          )}
          <button
            className={styles.but}
            onClick={() => {
              member(datas.btn);
            }}
          >
            {datas.btn}
          </button>
        </div>
      </main>
      {isDialog ? <Dialog title={title} setTimer={setTimer} /> : ""}
    </div>
  );
}

export default Login;
