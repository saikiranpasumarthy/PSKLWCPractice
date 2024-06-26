import { LightningElement } from 'lwc';

export default class ApiSetterGetter extends LightningElement {
    lastTodoId = 2;

    todos = [
        {id: 1, description: 'Explore recipes', priority: true },
        {id: 2, description: 'Install Ebikes sample app', priority: false },
    ];

    description;

    priority = false;

    handleDescriptionChange(event){
        this.description = event.target.value;
    }

    handlePriorityChange(event){
        this.priority = event.target.checked;
    }

    handleSave() {
        this.lastTodoId = this.lastTodoId + 1;

        this.todos = [
            ...this.todos,
            {
                id: this.lastTodoId,
                description: this.description,
                priority: this.priority
            }
        ];
    }
}