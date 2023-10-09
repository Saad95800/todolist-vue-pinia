import { defineStore } from "pinia";

export const useTaskStore = defineStore(
    "taskStore",
    {
        state(){
            return {
                todos: [],
                newTask: '',
                editedIndex: -1,
                editedTask: ''
            }
        },
        actions: {
            addTask(){
                if (this.newTask.trim()) {
                  this.todos.push(this.newTask.trim());
                  this.newTask = '';
                }
            },
              
              removeTask(index){
                this.todos.splice(index, 1);
              },
              
              startEditing(index){
                this.editedIndex = index;
                this.editedTask = this.todos[index];
              },
              
              finishEditing(index){
                if (this.editedTask.trim()) {
                  this.todos[index] = this.editedTask.trim();
                }
                this.editedIndex = -1;
              }
        },
        getters: {
        }
    }
)