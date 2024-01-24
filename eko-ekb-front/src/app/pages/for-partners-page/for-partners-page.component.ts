import {Component, Inject, OnInit} from '@angular/core';
import {TuiAlertService, TuiDialogContext, TuiDialogService, TuiDialogSize} from "@taiga-ui/core";
import {PolymorpheusContent} from "@tinkoff/ng-polymorpheus";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-for-partners-page',
  templateUrl: './for-partners-page.component.html',
  styleUrls: ['./for-partners-page.component.less'],
})
export class ForPartnersPageComponent implements OnInit{
  readonly partnersForm: FormGroup = new FormGroup<any>({
    companyName: new FormControl<string>('', Validators.required),
    phoneNumber: new FormControl<string>('', Validators.required),
    comment: new FormControl<string>('', Validators.required),
  })
  constructor(@Inject(TuiDialogService) private readonly dialogs: TuiDialogService, @Inject(TuiAlertService) private readonly alertService: TuiAlertService) {}

  ngOnInit() {
    this.partnersForm.valueChanges.subscribe(console.log)
  }

  onClick(
    content: PolymorpheusContent<TuiDialogContext>,
    header: PolymorpheusContent,
    size: TuiDialogSize,
  ): void {
    this.dialogs
      .open(content, {
        label: 'Форма обратной связи',
        header,
        size,
      })
      .subscribe();
  }

  toggleNotification(): void {

    this.alertService
      .open('<strong>Мы свяжемся с вами в ближайшее время</strong>', {label: 'Спасибо!'})
      .subscribe();
  }
}
