
var projectName = '农商对接系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
        name: '我的收藏',
        url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '商品信息',
	url: './pages/shangpinxinxi/list.html'
}, 

{
	name: '资讯信息',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springboot8k3eu/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","修改","删除"],"menu":"卖家","menuJump":"列表","tableName":"maijia"}],"menu":"卖家管理"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["新增","查看","修改","删除"],"menu":"商品类型","menuJump":"列表","tableName":"shangpinleixing"}],"menu":"商品类型管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看","修改","删除","查看评论"],"menu":"商品信息","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","修改","删除"],"menu":"订单信息","menuJump":"列表","tableName":"dingdanxinxi"}],"menu":"订单信息管理"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看","修改","删除"],"menu":"订单追踪","menuJump":"列表","tableName":"dingdanzhuizong"}],"menu":"订单追踪管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","修改","删除"],"menu":"售后信息","menuJump":"列表","tableName":"shouhouxinxi"}],"menu":"售后信息管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","修改","删除"],"menu":"售后处理","menuJump":"列表","tableName":"shouhouchuli"}],"menu":"售后处理管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","修改","删除"],"menu":"在线交流","menuJump":"列表","tableName":"zaixianjiaoliu"}],"menu":"在线交流管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看","修改","删除"],"menu":"在线回复","menuJump":"列表","tableName":"zaixianhuifu"}],"menu":"在线回复管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"资讯信息","tableName":"news"},{"appFrontIcon":"cuIcon-link","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","预订","交流"],"menu":"商品信息列表","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","删除","支付"],"menu":"订单信息","menuJump":"列表","tableName":"dingdanxinxi"}],"menu":"订单信息管理"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看","删除","售后"],"menu":"订单追踪","menuJump":"列表","tableName":"dingdanzhuizong"}],"menu":"订单追踪管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","修改","删除"],"menu":"售后信息","menuJump":"列表","tableName":"shouhouxinxi"}],"menu":"售后信息管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","删除"],"menu":"售后处理","menuJump":"列表","tableName":"shouhouchuli"}],"menu":"售后处理管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","修改","删除"],"menu":"在线交流","menuJump":"列表","tableName":"zaixianjiaoliu"}],"menu":"在线交流管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看","删除"],"menu":"在线回复","menuJump":"列表","tableName":"zaixianhuifu"}],"menu":"在线回复管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","预订","交流"],"menu":"商品信息列表","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["新增","查看","修改","删除","查看评论"],"menu":"商品信息","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","修改","删除","交货"],"menu":"订单信息","menuJump":"列表","tableName":"dingdanxinxi"}],"menu":"订单信息管理"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看","修改","删除"],"menu":"订单追踪","menuJump":"列表","tableName":"dingdanzhuizong"}],"menu":"订单追踪管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","删除","处理"],"menu":"售后信息","menuJump":"列表","tableName":"shouhouxinxi"}],"menu":"售后信息管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","修改","删除"],"menu":"售后处理","menuJump":"列表","tableName":"shouhouchuli"}],"menu":"售后处理管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","删除","回复"],"menu":"在线交流","menuJump":"列表","tableName":"zaixianjiaoliu"}],"menu":"在线交流管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看","修改","删除"],"menu":"在线回复","menuJump":"列表","tableName":"zaixianhuifu"}],"menu":"在线回复管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","预订","交流"],"menu":"商品信息列表","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"是","roleName":"卖家","tableName":"maijia"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
