import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit, OnDestroy {
  private notificationSubscription: Subscription | undefined;

  constructor(private notificationService: NotificationService, private toastr: ToastrService) {}

  ngOnInit(): void {
    console.log('ForumComponent initialized');
    this.notificationSubscription = this.notificationService.getNotifications()
      .subscribe({
        next: (message) => {
          console.log('Mensaje recibido en ForumComponent:', message);
          this.toastr.info(message, 'Notificación del Foro');
        },
        error: (error) => {
          console.error('Error en la suscripción:', error);
        }
      });
  }
  
  

  ngOnDestroy(): void {
    if (this.notificationSubscription) {
      this.notificationSubscription.unsubscribe();
      console.log('Unsubscribed from notifications');
    }
  }
  
}
