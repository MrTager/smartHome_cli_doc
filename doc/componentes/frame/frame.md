# 模块化容器

<img src="./image/iframe_1.jpg" width = "400" height = "300" alt="模块化容器" align=center />

### 导入注册及使用
<details style='background-color:#f9f2f4'>
<summary><font color='#30b826' size='3px'> View Code</font></summary>

    <template>
        <Module-Frame titleName="开关" titleImg="title_switch.png" type="normal">
          <Main-Power-Switch :status="dev_props.powerstate" @event="power_event"></Main-Power-Switch>
        </Module-Frame>
    </template>
    <script>
    import { ModuleFrame,MainPowerSwitch } from "@/component_library"

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
            "Main-Power-Switch":MainPowerSwitch,
            "Module-Frame":ModuleFrame
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
|  类型   | 名称  | 值  | 值类型 | 必填  | 说明 |
|  ----  | ----  |  ----  | ----  | ----  | ---- |
| 属性  | titleName | 模块标题 | String | 是 |      |
| 属性  | titleImg | 模块icon图片名 | String | 是 |  icon 图片路径放入 assets/images/icon/module/ 目录下   |
| 属性  | type | normal(有Icon)、noIcon(隐藏Icon) | String | 是 |     |


---

# 缓动容器

