import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  public actions: string[]
  public currentAction: string = ''
  public currentAccount: number
  constructor() {
    this.actions = ["deposit", "withdraw", "loan"]
  }

  ngOnInit(): void {
  }
  isLoan(action: string): boolean {
    if (action === 'loan') return true
    else return false
  }
  isDepOrWithdraw(action: string): boolean {
    if (action === 'deposit' || action === 'withdraw') return true
    else return false
  }
  onSubmitAction(form: NgForm) {
    if (form.invalid || !form) return
    console.log(form.value);
    this.currentAccount = form?.value?.accounNumber
    this.currentAction = form?.value?.accountAction
  }
}

