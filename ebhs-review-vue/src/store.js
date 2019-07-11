import Vue from 'vue'
import Vuex from 'vuex'
import { format, addDate } from '@/util'
import jsonData from '../data'
Vue.use(Vuex);

const SET_STORE = 'SET_STORE';

export default new Vuex.Store({
  state:{
    testObj:null,
    ...jsonData
  },
  getters:{
    taskDayObj(state){
      let taskDotList = []
      let hasTaskDays = []
      let dayTaskList = []
      let taskDistDayList = []
      let distDays = []
      state.taskList.forEach((task)=>{
        distDays = []
        taskDotList = []
        state.curveList.forEach((curve)=>{
          if(curve.id === task.curveTypeId){
            taskDotList = curve.dotList
          }
        })
        let startDate = format(new Date(task.createTime),'YYYY-MM-DD')
        distDays.push(startDate)
        getHasTaskDays(startDate, task.id, hasTaskDays, dayTaskList)
        taskDotList.forEach((dot,index)=>{
          let lastTime = new Date(distDays[index].replace(/\-/g, '/'))
          let day = addDate(lastTime, dot.value , dot.unit)
          let dayStr = format(day,'YYYY-MM-DD')
          distDays.push(dayStr)
          getHasTaskDays(dayStr,task.id, hasTaskDays, dayTaskList)
        })
        taskDistDayList.push({
          taskId: task.id,
          distDays
        })
      })
      console.log('在getters里计算好了')
      return {
        hasTaskDays, // 有任务的日期列表
        dayTaskList, // 某天有哪些任务列表
        taskDistDayList // task 任务分布列表
      }
    },
  },
  actions:{
    setStore ({ commit }, params) {
      commit(SET_STORE, params)
    }
  },
  mutations:{
    [SET_STORE] (state,params) {
      if(!isObject(params)){
        console.error('params is not object:',params);
        return
      }
      for (let paramsKey of Object.keys(params)) {
        let paramsValue = params[paramsKey];
        let keyArray = paramsKey.split(".");
        switch (keyArray.length){
          case 1:
            if(state.hasOwnProperty(paramsKey)){
              if(isObject(paramsValue)){
                for (let paramsValueKey of Object.keys(paramsValue)) {
                  updateObj(state[paramsKey],paramsValueKey,paramsValue[paramsValueKey]);
                }
              }else {
                //console.error('params value is not object:',paramsValue);
                updateObj(state,paramsKey,paramsValue);
              }
            }else {
              console.error('params key is not in store:',paramsKey);
            }
            break;
          case 2:
            let key21 = keyArray[0];
            if(state.hasOwnProperty(key21)){
              updateObj(state[key21],keyArray[1],paramsValue);
            }else {
              console.error('params key is not in store:',key21);
            }
            break;
          case 3:
            let key31 = keyArray[0];
            if(state.hasOwnProperty(key31)){
              let key32 = keyArray[1];
              if(state[key31].hasOwnProperty(key32)){
                updateObj(state[key31][key32],keyArray[2],paramsValue)
              }else {
                console.error('params key is not in '+ key31 +':',key32);
              }
            }else {
              console.error('params key is not in store:',key31);
            }
            break;
          default:
            console.log('params key is not support temporary:',paramsKey);
        }
      }
    }
  }
})

/**判断变量是否是对象 不是数组/string等*/
function isObject(variable) {
  if(typeof variable ==='object' && !(variable instanceof Array)){
    return true;
  }else {
    return false;
  }
}

function updateObj(obj,key,value) {
  if(obj.hasOwnProperty(key)){
    obj[key] = value;
  }else {
    Vue.set(obj, key, value)
  }
}

function getHasTaskDays(dayStr, taskId, hasTaskDays, dayTaskList){
  let dayIdx = hasTaskDays.indexOf(dayStr)
  if(dayIdx === -1){
    hasTaskDays.push(dayStr)
    dayTaskList.push({
      day:dayStr,
      taskIdList:[taskId]
    })
  } else {
    let taskIdList = dayTaskList[dayIdx].taskIdList
    if(taskIdList.indexOf(taskId) === -1){
      taskIdList.push(taskId)
      // dayTaskList[dayIdx].taskIdList = taskIdList
    }
  }
}

/**自定义store
 *
 * 更新store数据使用:this.setStore(params)
 * params必须是对象，即{key:value}格式，其他格式会报错
 * key是字符串，可指定一个key，也可指定多个key，多个key用英文点符号(.)分割，没有点分割时按一个key处理
 *
 * 调用方式(按key的数量分类)：
 *
 * key于定义好的模块名不符，会报错 this.setStore({home1:'str'})     params key is not in store: home1

 * ----------------指定一个key----------------------------------

 * value必须是对象，其他格式会报错 this.setStore({home:'str'})      params value is not object: str
 *
 * 修改原有数据，在不影响home模块其他key值的前提下，更新page的值
 this.setStore({home:{page:'new Page name'}})//---------------------------和多个key时不同

 * 新增数据，在不影响home模块其他key值的前提下，新增2个key
 this.setStore({home:{
    newKey11:pageName + '修改'+11,
    newKey12:pageName + '修改'+12,
 }})

 * ----------------指定2个key----------------------------------
 //更新home模块page的值 this.setStore({'home.page':"new Page value"})

 //old key，更新home模块bannerInfo的值，让它指向新对象，移除它之前指向的对象--------------重要
 this.setStore({'home.bannerInfo':{
     date:'new time'
 }});

 //new key，在不影响home模块其他key值的前提下，新增key
 this.setStore({'home.newKey21':'str'})
 this.setStore({'home.newKey22':100})
 this.setStore({'home.newKey23':true})
 this.setStore({'home.newKey24':false})
 this.setStore({'home.newKey25':[1,2,3]})
 this.setStore({'home.newKey26':undefined})
 this.setStore({'home.newKey27':null})--------------不报错，可用于置空数据
 this.setStore({'home.newKey28':{-------新增newKey28指向对象
    newKey281:'new Key281 value'
 }});
 this.setStore({'home.newKey29':{-------新增newKey29指向对象
    newKey291:'new Key291 value',
    newKey292:'new Key292 value'
 }})

 * ----------------指定3个key----------------------------------
 //key not exist
 this.setStore({'home1.newKey1.newKey2':"新值1"})     params key is not in store: home1
 this.setStore({'home.bannerInfo1.newKey2':"新值2"})  params key is not in home: bannerInfo1

 //old key，更新home模块bannerInfo对象下date的值
 this.setStore({'home.bannerInfo.date':"new time"})

 //old key，更新home模块bannerInfo对象下sourceInfo的值，让它指向新对象，移除它之前指向的对象--------------重要
 this.setStore({'home.bannerInfo.sourceInfo':{//移除旧对象，指向新对象，
     author:'陈浩南'
 }});

 //new key，在不影响home模块bannerInfo对象，其他key值的前提下，新增key
 this.setStore({'home.bannerInfo.newKey31':'str'})//bannerInfo对象添加一个key
 this.setStore({'home.bannerInfo.newKey32':100})
 this.setStore({'home.bannerInfo.newKey33':true})
 this.setStore({'home.bannerInfo.newKey34':false})
 this.setStore({'home.bannerInfo.newKey35':[1,2,3]})
 this.setStore({'home.bannerInfo.newKey36':undefined})
 this.setStore({'home.bannerInfo.newKey37':null})--------------不报错，可用于置空数据
 this.setStore({'home.bannerInfo.newKey38':{-------新增newKey38指向对象
     newKey381:'new Key381 value'
 }});
 this.setStore({'home.bannerInfo.newKey39':{-------新增newKey39指向对象
     newKey391:'new Key391 value',
     newKey392:'new Key392 value'
 }})
 *
 * */
