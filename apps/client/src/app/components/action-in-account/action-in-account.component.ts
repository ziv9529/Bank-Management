import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-action-in-account',
  templateUrl: './action-in-account.component.html',
  styleUrls: ['./action-in-account.component.css']
})

export class ActionInAccountComponent implements OnInit {
  @Input() currentAction: string = ''
  @Input() currentAccount: number;
  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }
  async onSubmit(form: NgForm) {
    const currentDate = new Date
    const data = {
      selected_action: this.currentAction,
      amount: form?.value?.amount,
      action_date: currentDate,
    }

    this.accountService.makeActionByAccountNumber(this.currentAccount, data).subscribe({
      complete: () => {
        this.router.navigate(['/', 'home'])
      },
      next: (res: any) => {
        alert(res.message)
      },
      error: (err) => {
        alert(err.message || 'error!')
      }
    })
  }
}
