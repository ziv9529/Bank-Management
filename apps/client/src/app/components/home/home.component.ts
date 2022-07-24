import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  actionsResult: any
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {

  }
  onSubmit(form: NgForm) {
    const accountNumber = form?.value?.accountNumber;
    this.accountService.getActionsByAccountNumber(accountNumber).subscribe(result => {
      this.actionsResult = result.accountActions;
      console.log(this.actionsResult);
    })
  }

}
