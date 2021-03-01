# 主按钮（电源按钮）

<img src="./image/主按钮.gif" width = "200" height = "450" alt="主按钮" align=center />

### 导入注册及使用
<!-- style='background-color:#f9f2f4' -->
<details open>
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

# 圆形普通电源按钮

<img src="./image/圆形椭圆形普通按钮.gif" width = "200" height = "450" alt="圆形椭圆形普通按钮" align=center />

### 导入注册及使用
<!-- style='background-color:#f9f2f4' -->
<details open>
<summary><font color='#30b826' size='3px'> View Code</font></summary>

    <template>
        <Round-Switch type="power" :state="enable" @event="changeSwitch"></Round-Switch>
    </template>
    <script>
    import { RoundSwitch } from "@/component_library"

    export default {
        ...
        data(){
            return {
                enable:0,
            }
        },
        components: {
            "Round-Switch":RoundSwitch
        },
        methods: {
            changeSwitch(state){
                //执行事件
            }
        }
    }
    </script>

</details>
    
    
### 说明
|  类型   | 名称  | 值  | 值类型 | 必填  |
|  ----  | ----  |  ----  | ----  | ----  |
| 属性  | state | 0 或 1 | String | 是 |
| 事件  | event | 执行函数 | Function | 是 |

---

# 椭圆形普通电源按钮

<img src="./image/圆形椭圆形普通按钮.gif" width = "200" height = "450" alt="圆形椭圆形普通按钮" align=center />

### 导入注册及使用
<!-- style='background-color:#f9f2f4' -->
<details open>
<summary><font color='#30b826' size='3px'> View Code</font></summary>

    <template>
        <Round-Edges-Transverse-Rectangle :state="dev_props.indicator === 0 ? 1 : 0" @event="changeSwitch(0,'indicator')" title="关闭" ></Round-Edges-Transverse-Rectangle>
    </template>
    <script>
    import { RoundEdgesTransverseRectangle } from "@/component_library"

    export default {
        ...
        data(){
            return {
                dev_Props:{
                    indicator:0,
                }
            }
        },
        components: {
            "Round-Edges-Transverse-Rectangle":RoundEdgesTransverseRectangle,
        },
        methods: {
            changeSwitch(state){
                //执行事件
            }
        }
    }
    </script>

</details>
    
    
### 说明
|  类型   | 名称  | 值  | 值类型 | 必填  |
|  ----  | ----  |  ----  | ----  | ----  |
| 属性  | state | 0 或 1 | String | 是 |
| 属性  | title | "按钮标题" | String | 是 |
| 事件  | event | 执行函数 | Function | 是 |

---

# Check按钮

<img src="./image/圆形check.jpg"  width = "300" height = "100" alt="圆形椭圆形普通按钮" align=center />

### 导入注册及使用
<!-- style='background-color:#f9f2f4' -->
<details open>
<summary><font color='#30b826' size='3px'> View Code</font></summary>

    <template>
        <Chick-Switch :enable="enable"  @state="setState" @event="switchEvent"></Chick-Switch>
    </template>
    <script>
    import { ChickSwitch } from "@/component_library"

    export default {
        ...
        data(){
            return {
                enable
            }
        },
        components: {
            "Chick-Switch":ChickSwitch,
        },
        methods: {
            setState(val){
                //执行事件
            }
        }
    }
    </script>

</details>
    
    
### 说明
|  类型   | 名称  | 值  | 值类型 | 必填  | 说明 |
|  ----  | ----  |  ----  | ----  | ----  | --- |
| 属性  | enable | 0 或 1 | String | 是 |
| 事件  | @state | 执行函数 | Function | 是 | check点击回调返回最新状态