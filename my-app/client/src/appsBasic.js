var app = {
    setToken: function (token) {
        localStorage.setItem("token", token);
    },
    getToken: function () {
        return localStorage.getItem("token");
    },
    removeToken: function () {
        return localStorage.removeItem("token");
    },
    getName: function () {
        return localStorage.getItem("username");
    },
    setName: function (username) {
        return localStorage.setItem("username", username);
    },
    removeName: function () {
        return localStorage.removeItem("username");
    },
    getUserId: function () {
        return localStorage.getItem("userid");
    },
    setUserId: function (userid) {
        return localStorage.setItem("userid", userid);
    },
    removeUserId: function () {
        return localStorage.removeItem("userid");
    },
    getTestId: function () {
        return localStorage.getItem("testid");
    },
    setTestId: function (testid) {
        return localStorage.setItem("testid", testid);
    },
    removeTestId: function () {
        return localStorage.removeItem("testid");
    },
    getTestName: function () {
        return localStorage.getItem("testname");
    },
    setTestName: function (testname) {
        return localStorage.setItem("testname", testname);
    },
    removeTestName: function () {
        return localStorage.removeItem("testname");
    },
    getTestUrl: function () {
        return localStorage.getItem("testurl");
    },
    setTestUrl: function (testurl) {
        return localStorage.setItem("testurl", testurl);
    },
    removeTestUrl: function () {
        return localStorage.removeItem("testurl");
    },
    getShowUserTestPaper: function () {
        return localStorage.getItem("showusertestpaper");
    },
    setShowUserTestPaper: function (showusertestpaper) {
        return localStorage.setItem("showusertestpaper", showusertestpaper);
    },
    removeShowUserTestPaper: function () {
        return localStorage.removeItem("showusertestpaper");
    },
    getStudentname: function () {
        return localStorage.getItem("studentname");
    },
    setStudentname: function (studentname) {
        return localStorage.setItem("studentname", studentname);
    },
    removeStudentname: function () {
        return localStorage.removeItem("studentname");
    },
    getStudentId: function () {
        return localStorage.getItem("studentid");
    },
    setStudentId: function (studentid) {
        return localStorage.setItem("studentid", studentid);
    },
    removeStudentId: function () {
        return localStorage.removeItem("studentid");
    }

};

export default app;
