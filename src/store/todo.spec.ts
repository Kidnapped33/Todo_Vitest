import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe , it, expect } from 'vitest'
import { useTodoStore } from "./todo"
/**
 * createPinia()  创建 Pinia
 * setActivePinia 设置活动 Pinia
 * 
 * beforeEach
 * describe 描述
 * expect   预计
 * it
 * 
 * 引入 useTodoStore
 * 
 */
describe('todoStore',()=>{
  beforeEach(()=>{
    setActivePinia(createPinia())
  })

  it('添加一个 Todo', () => {

    const todoStore = useTodoStore()
    todoStore.addTodo('eat')
    expect(todoStore.todos[0].title)
    .toBe('eat')
  })

  it('使用 reverse:abc 可以添加一个 abc', () => {

    const todoStore = useTodoStore()
    todoStore.addTodo('reverse:abc')
    expect(todoStore.todos[0].title)
    .toBe('cba')
  })

  it('使用 reverse  :abc 也可以添加一个 abc', () => {

    const todoStore = useTodoStore()
    todoStore.addTodo('reverse   :abc')
    expect(todoStore.todos[0].title)
    .toBe('cba')
  })

  it('使用 top:456 可以添加一个 456', () => {

    const todoStore = useTodoStore()
    todoStore.addTodo('吃饭')
    todoStore.addTodo('top:456')
    expect(todoStore.todos[0].title)
    .toBe('456')
  })
  
  it('使用 t o p:456 可以添加一个 456', () => {

    const todoStore = useTodoStore()
    todoStore.addTodo('t o p:456')
    expect(todoStore.todos[0].title)
    .toBe('456')
  })

  it('删除', () => {

    const todoStore = useTodoStore()
    const todo = todoStore.addTodo('123')
    todoStore.removeTodo(todo.id)
    expect(todoStore.todos.length)
    .toBe(0)
  })
})