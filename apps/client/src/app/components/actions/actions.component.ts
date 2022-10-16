import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  public actions: string[]
  public currentAction: string = ''
  public currentAccount:number
  constructor() {
    this.actions = ["deposit", "withdraw", "loan"]
  }

  ngOnInit(): void {
  }
  actionform = new FormGroup({
    action: new FormControl('', Validators.required),
    accounNumber: new FormControl('', Validators.required),
  });
  changeAction(val: any) {
    this.currentAction = val
  }
  updateAccountNumber(val: any) {
    this.currentAccount = val
  }

  submit() {
    console.log(this.actionform.value);
  }

  isLoan(action: string): boolean {
    if (action === 'loan') return true
    else return false
  }
  isDepOrWith(action: string): boolean {
    if (action === 'deposit' || action === 'withdraw') return true
    else return false
  }
}

