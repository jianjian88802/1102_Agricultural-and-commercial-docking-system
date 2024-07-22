const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot8k3eu/",
            name: "springboot8k3eu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot8k3eu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "农商对接系统"
        } 
    }
}
export default base
