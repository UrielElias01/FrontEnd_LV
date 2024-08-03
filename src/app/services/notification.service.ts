import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new Subject<string>();

  getNotifications() {
    console.log('getNotifications called'); // Verificar llamada
    return this.notificationSubject.asObservable();
  }

  notify(message: string) {
    console.log('Notificación enviada:', message); // Para depuración
    this.notificationSubject.next(message);
  }
}
