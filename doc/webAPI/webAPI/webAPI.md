## 说明
    此文件封装所有H5页面直接调用的方法
    文件目录
    arc => utils => WebAPI
## 调用方式
    导入
    import HonYar from "@/utils/WebAPI";
    调用
    HonYar.XXX()
## 退出H5页面返回APP首页
    调用方式
    HonYar.finishActivity()
    源码
    /**
     * 关闭APP当前页面
     */
    finishActivity(){
        HonYarSmartSDK.finishActivity({},(res) => {
            return new Promise((resolve,reject)=>{
                resolve(res)
            })
        })
    },
## 设置设备属性
    调用方式
    Honyar.setDeviceProperties(iotId,items,platform,apiVersion)
    源码
    /**
    * 设置设备属性
    * @param {*} iotId 设备iotId
    * @param {*} items 请求的data 例：{"powerstate":1}
    * @param {*} platform 平台标识符 1：阿里；2：雄迈；3：乐橙；4：天猫精灵；5：物联网平台
    * @param {*} apiVersion 服务端接口版本号 默认:1.0
    */
    setDeviceProperties(iotId, items,platform,apiVersion) {
        return new Promise((resolve, reject) => {
            if(iotId.length > 0 ){
            }else{
                reject("服务端数据获取中,请稍后再试")
            }
            let request = {
                'platform': platform === undefined ? "1" : platform,
                "apiVersion": apiVersion === undefined ? "1.0" : apiVersion,
                "url": "",
                'api': '/appDevice/setDeviceProperties',
                'Content-Type': 'application/json',
                'needAuth': 'true'
            }
            let params = {
                "request": {
                    "platform": '1'
                },
                "params": {
                    "iotId": iotId,
                    "items": items
                }
            }
            HonYarSmartSDK.getServerData(request, params, (res) => {
                if(JSON.parse(res).code === 200){
                    resolve(res)
                }else{
                    reject(res)
                }
            })
        })
    },
## 