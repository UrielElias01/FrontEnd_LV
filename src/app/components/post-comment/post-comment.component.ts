import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent {
  comment: string = '';

  constructor(private notificationService: NotificationService) {}

  postComment(): void {
    if (this.comment.trim().length === 0) {
      alert('El comentario no puede estar vacío.');
      return;
    }
    console.log('Comentario publicado:', this.comment);

    // Aquí puedes agregar la lógica para enviar el comentario al servidor...

    // Notificar a los suscriptores sobre el nuevo comentario
    this.notificationService.notify('Nuevo comentario en el foro');
    this.comment = ''; // Limpiar el campo de comentario después de publicar
  }
}
