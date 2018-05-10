import React from 'react'
import { computed, observable } from 'mobx'

class Todo {
    @observable value
    @observable Id
    @observable complete

    constructor(value){
        this.value = value
        this.id = Date.now()
        this.complete = false
    }
}

export class AppState {
    @observable todos = []
    @observable filter = ""

    @computed get filteredTodos(){
        let matchesFilter = new RegExp(this.filter, "i")
        return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
    }

    createTodo(value){
        this.todos.push(new Todo(value))
    }

    clearComplete = () => {
        const incompleteTodos = this.todos.filter(todo =>!todo.complete)
        this.todos.replace(incompleteTodos)
    }
}

export default new AppState


