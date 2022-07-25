import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  actionsResult: any
  resultsError: boolean;
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    const accountNumber = form?.value?.accountNumber;
    this.accountService.getActionsByAccountNumber(accountNumber)
      .pipe(
        map(r => r?.accountActions)
      ).subscribe({
        complete: () => {
          this.resultsError = false
        },
        next: (res: any) => {
          this.actionsResult = res
        },
        error: (err) => {
          console.log(err);
          this.resultsError = true
          alert('error')
        }
      })
  }

}
