import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private service:OrderDetailsService, private param:ActivatedRoute){}
  getMenuId: any
  menuData: any

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get("id")
    console.log(this.getMenuId, "getMenu")

    if(this.getMenuId)
    {
      this.menuData = this.service.foodDetails.filter((value) => {
        return value.id == this.getMenuId
      })
      console.log(this.menuData, "menudata>>")
    }
  }
}
