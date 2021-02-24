# 主按钮（电源按钮）
### 图片预留位置

### 导入注册及使用
<details style='background-color:#f9f2f4'>
<summary><font color='#30b826' size='3px'> View Code</font></summary>

    <template>
        <Main-Power-Switch :status="dev_props.powerstate" @event="power_event"></Main-Power-Switch>
    </template>
    <script>
    import { MainPowerSwitch } from "@/component_library"

    export default {
        ...
        data(){
            return {
                dev_props:{
                    powerstate:0
                }
            }
        },
        components: {
            "Main-Power-Switch":MainPowerSwitch
        },
        methods: {
            power_event(state){ //state 为要下发的状态 若当前powerstate为 0 ，则按钮点击后 state 参数值为 1
                console.log("按钮点击了",state)
            }
        }
    }
    </script>

</details>
    
    
### 说明
|  类型   | 名称  | 值  | 值类型 | 必填  |
|  ----  | ----  |  ----  | ----  | ----  |
| 属性  | status | 0 或 1 | Number | 是 |
| 事件  | event | 执行函数 | Function | 是 |


---
