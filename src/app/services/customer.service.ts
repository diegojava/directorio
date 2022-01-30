import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = 'http://localhost:3050/api/customers'
  constructor(
    private http: HttpClient
  ) { }

  // get customers
  getCustomers() {
    return this.http.get(this.url)
  }

  // get one customer
  getCustomer(id: any) {
    return this.http.get(this.url + '/' + id)
  }

  // add customer
  addCustomer(customer: Customer) {
    return this.http.post(this.url, customer)
  }

  // delete customer
  deleteCustomer(id: any) {
    return this.http.delete(this.url + '/' + id)
  }

  // edit customer
  editCustomer(id: any, customer: Customer) {
    return this.http.put(this.url + '/' + id, customer)
  }

}

export interface Customer {
  id?: string,
  nombre?: string,
  city?: string,
  gender?: string,
  foto?: string 
}
