import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe , it, expect } from 'vitest'
// import useTodoStore from "./todo"
/**
 * createPinia()  创建 Pinia
 * setActivePinia 设置活动 Pinia
 * 
 * beforeEach
 * describe 描述
 * expect   预计
 * it
 * 
 * 
 * 引入 useTodoStore
 * 
 */
describe('todoStore',()=>{
  beforeEach(()=>{
    setActivePinia(createPinia())
  })

  it('addTodo', () => {
    expect(1+1).toBe(2)
  })
})