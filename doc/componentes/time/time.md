# 定时倒计时选择插件

<img src="./image/时间选择.gif" width = "200" height = "450" alt="定时倒计时选择插件" align=center />
<img src="./image/倒计时.gif" width = "200" height = "450" alt="定时倒计时选择插件" align=center />

### 导入注册及使用
<!-- style='background-color:#f9f2f4' -->
<details open>
<summary><font color='#30b826' size='3px' > View Code</font></summary>

    <template>
        <Select-Panel setTypes="1" :chooseCloudHour="cloudDataInfo.time.hour" :chooseCloudMin="cloudDataInfo.time.min" @selectTimeHour="selectTimeHour_cloud" @selectTimeMin="selectTimeMin_cloud"></Select-Panel>
    </template>
    <script>
    import { SelectPanel } from "@/component_library"

    export default {
        ...
        data(){
            return {
                cloudDataInfo:{
                    time:{
                        hour:'',
                        min:''
                    }
                }
            }
        },
        components: {
            "Select-Panel":SelectPanel
        },
        methods: {
            selectTimeHour_cloud(){},
            selectTimeMin_cloud(){}
        }
    }
    </script>

</details>
    
    
### 说明
    此组件标签内可以嵌套组件

|  类型   | 名称  | 值  | 值类型 | 必填  | 说明 |
|  ----  | ----  |  ----  | ----  | ----  | ---- |
|  属性  | setTypes | 0,1 | String | 是 | 0为倒计时1为定时 |
| 属性 | chooseCloudHour | 0-23 | String |当setTypes为0时 必选 | 此属性为设置定时列表初始小时数 |
| 属性 | chooseCloudMin | 0-59 | String |当setTypes为0时 必选 | 此属性为设置定时列表初始分钟数 |
| 事件 | @selectTimeHour | 小时选择时回调事件 | Function | 是 | 选择小时列表回调的事件 |
| 事件 | @selectTimeMin | 分钟选择时回调事件 | Function | 是 | 选择分钟列表回调的事件 |