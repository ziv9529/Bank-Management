import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-action-in-account',
  templateUrl: './action-in-account.component.html',
  styleUrls: ['./action-in-account.component.css']
})

export class ActionInAccountComponent implements OnInit {
  @Input() currentAction: string = ''
  @Input() currentAccount: number;
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }
  async onSubmit(form: NgForm) {
    console.log(form?.value);
    const currentDate = new Date
    const data = {
      selected_action: this.currentAction,
      amount: form?.value?.amount,
      action_date: currentDate,
      // "interest":4,
      // "paymentsCount":3
    }
    // console.log(data);
    // try {
    //   console.log(this.currentAccount);
    //   const r = await this.accountService.makeActionByAccountNumber(this.currentAccount, data);
    //   console.log(r);
    //   if (r) alert('created!')
    // } catch (err) {
    //   alert('err')
    // }
    // const accountNumber = form?.value?.accountNumber;
    // .then((res: any) => {
    //   console.log(res);
    //   if (res) { alert("created!") }
    // }).catch((err: any) => {
    //   console.log(err);
    //   alert('error')
    // })
    this.accountService.makeActionByAccountNumber(this.currentAccount, data).subscribe(result => {
      console.log(result);
      if (result) alert(result.message)
    })
  }
}
