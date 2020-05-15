import { Component, OnInit } from '@angular/core';

// Identifies a related set of properties and methods
interface FormField {
    id: number;
    formField1: { value: any; type: string; disable: boolean; visible: boolean; placeholder: string };
    formField2: { value: any; type: string; disable: boolean; visible: boolean; placeholder: string };
}

@Component({
    selector: 'template-driven',
    templateUrl: './template-driven.html',
})
export class TemplateDrivenComponent implements OnInit {
    // Bind the interface to formField Object
    public mainForm: {
        formFields: FormField[];
    };

    ngOnInit() {
        this.mainForm = {
            formFields: [],
        };

        // Add an initial form-entry
        this.addForm();
    }

    public addForm(): void {
        this.mainForm.formFields.push({
            id: Date.now(),
            formField1: { value: '', type: 'any', disable: false, visible: true, placeholder: '' },
            formField2: { value: '', type: 'any', disable: false, visible: true, placeholder: '' },
        });
    }

    public removeForm(index: number): void {
        this.mainForm.formFields.splice(index, 1);
    }

    public submitForm(form) {
        if (form.valid) {
            console.log(form.value);
            // ...Now you can submit the data
        }
    }
}
