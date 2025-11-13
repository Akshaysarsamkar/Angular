import { HttpClientModule } from '@angular/common/http';
import {
  Component,
  OnDestroy,
  OnInit,
  ComponentFactoryResolver,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, Subscription } from 'rxjs';
import { Message } from './message.model';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './loader/spinner/spinner.component';
import { MessageService } from './services/message.service';
import { ErrorComponent } from './dialog/error/error.component';
import { ComponentCreator } from './component-creator.directive';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
    HttpClientModule,
    CommonModule,
    SpinnerComponent,
    ErrorComponent,
    ComponentCreator,
  ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'HttpClientProject';
  loadedMessage: Message[] = [];
  isLoading: boolean = false;
  subcription: Subscription[] = [];
  error: any;

  @ViewChild('compCreator', { read: ComponentCreator })
  compCreator!: ComponentCreator;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly messageService: MessageService,
    private cfr: ComponentFactoryResolver
  ) {
    // this.messageService.messageFetched.subscribe((data) => {
    //   this.loadedMessage = data;
    // });

    this.subcription.push(
      this.messageService.errorsubject.subscribe((error) => {
        this.error = error.message;
      })
    );
  }

  ngOnInit(): void {
    this.OnFetchMessage();
  }

  onCreateMessage(messageData: { title: string; content: string }) {
    // this.isLoading = true;
    this.messageService.createMessage(messageData);
    this.OnFetchMessage();
    // this.isLoading = false;
  }

  OnFetchMessage() {
    // this.isLoading = true;
    this.loadedMessage = [];
    this.messageService
      .fetchMessages()
      .pipe(
        map((rowData) => {
          const messageArray: Message[] = [];
          this.error = '';
          for (const key in rowData) {
            if (rowData.hasOwnProperty(key)) {
              messageArray.push({
                title: rowData[key].title,
                content: rowData[key].content,
                id: key,
              });
            }
          }
          return messageArray;
        })
      )
      .subscribe(
        (res) => {
          console.log('Fetched messages:', res);
          this.loadedMessage = res;
          this.isLoading = false;

          // this.messageFetched.next(res);
        },
        (error) => {
          this.showError(error.message);
          this.error = error;
          console.log(error);
        }
      );
  }

  onClearMessage() {
    this.isLoading = true;
    this.loadedMessage = [];
    console.log('asdfghjkl;');
    this.messageService.deleteMessage().subscribe((data) => {
      console.log('deleted Messages: ', data);
    });
    this.isLoading = false;
  }

  ngOnDestroy(): void {}

  clearErrorMessage = () => {
    this.error = null;
  };

  showError(msg: string) {
    const errorComponentFactory =
      this.cfr.resolveComponentFactory(ErrorComponent);
    const viewContainerRef = this.compCreator.viewContainerRef;
    viewContainerRef.clear();

    viewContainerRef.createComponent(errorComponentFactory);
    viewContainerRef.remove();
  }
}
