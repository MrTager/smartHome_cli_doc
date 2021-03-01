# 模态框底部弹窗
<img src="./image/模态框1.gif" width = "200" height = "450" alt="模态底部弹框" align=center />
<img src="./image/模态框2.gif" width = "200" height = "450" alt="模态底部弹框" align=center />

### 导入注册及使用
<!--  style='background-color:#f9f2f4' -->
<details open>
<summary><font color='#30b826' size='3px'> View Code</font></summary>

    <template>
        <<List-Modal title="编辑昵称" @confirm="changeNameConfirm" @cancel="changeNameCancel">
          <List-Item-Input v-for="(value,key,index) in dev_props.childPropName" :key="index" :title="value.propName" :placeholder="value.nickName"  @input="changePropName(key,$event)"></List-Item-Input>
        </List-Modal>
    </template>
    <script>
    import { ListModal } from "@/component_library"

    export default {
        ...
        data(){
            return {
                dev_props:{
                    childPropName:{powerstate_1:{propName:"开关一",nickName:"",id:""},powerstate_2:{propName:"开关二",nickName:"",id:""},powerstate_3:{propName:"开关三",nickName:"",id:""}}
                }
            }
        },
        components: {
            "List-Modal":ListModal,
        },
        methods: {
            //确定事件
            changeNameConfirm(){
                //执行动作
            },
            //取消事件
            changeNameCancel(){
                //执行动作
            }，
            changePropName(n,e){

            }
        }
    }
    </script>

</details>
    
    
### 说明
    此组件标签内可以嵌套组件
|  类型   | 名称  | 值  | 值类型 | 必填  | 说明 |
|  ----  | ----  |  ----  | ----  | ----  | ---- |
| 属性  | title | "标题" | String | 是 | |
| 事件  | @confirm | @confirm方法 | Function | 是 | 该事件为模态框点击确定事件 |
| 事件  | @cancel | @cancel方法 | Function | 是 | 该事件为模态点击取消事件 |
