import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  @Input() currentAccount: number;

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }
  async onLoanSubmit(form: NgForm) {
    const currentDate = new Date
    const data = {
      selected_action: 'loan',
      amount: form?.value?.amount,
      action_date: currentDate,
      interest: form?.value?.interest,
      paymentsCount: form?.value?.paymentsCount
    }

    this.accountService.makeActionByAccountNumber(this.currentAccount, data).subscribe(
      {
        complete: () => {
          this.router.navigate(['/', 'home'])
        },
        next: (res: any) => {
          alert(res.message)
        },
        error: (err) => {
          alert(err.message || 'error!')
        }
      }
    )
  }
}
