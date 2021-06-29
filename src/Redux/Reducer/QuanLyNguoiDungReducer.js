
let accountLogin = {}
if (localStorage.getItem("ACCOUNTLOGIN")) {
    accountLogin = JSON.parse(localStorage.getItem("ACCOUNTLOGIN"));
}
let userLogin = {}
if (localStorage.getItem("USER_LOGIN")) {
    userLogin = JSON.parse(localStorage.getItem("USER_LOGIN"));
}

const stateDefault = {
    userLogin: userLogin,
    accountLogin: accountLogin,
};


const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "DANG_NHAP": {
            state.userLogin = action.data.data[0]
            state.accountLogin = action.account
            return { ...state }
        }
        default: return { ...state }
    }
}

export default QuanLyNguoiDungReducer;