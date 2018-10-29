//利用events=模块创建bus 用来创建自定义事件  能全局使用 (观察这模式)
import EventEmitter from 'events'

class Bus extends EventEmitter{}

export default new Bus()