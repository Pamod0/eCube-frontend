import { Component } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-job-application-form',
  imports: [FileUploadModule, FileUpload, ToastModule, CommonModule],
  templateUrl: './job-application-form.component.html',
  styleUrl: './job-application-form.component.scss',
  providers: [MessageService],
})
export class JobApplicationFormComponent {
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  onUpload(event: UploadEvent) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }
}
