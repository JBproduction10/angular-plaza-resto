import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // food details

  foodDetails = [
    {
      id:1,
      name:"Paneer Grilled Sandwich",
      details: 'Pan-fried masala paneer.',
      price: 13,
      image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id:2,
      name:"Veggie Supreme",
      details: 'Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese',
      price: 20,
      image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id:3,
      name:"Paneer Burger",
      details: 'panner',
      price: 18,
      image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id:4,
      name:"Veg Masala Roll In Naan",
      details: "A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      price: 35,
      image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
    {
      id:5,
      name:"Indulgence Brownie",
      details: '(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.',
      price: 28,
      image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:6,
      name:"Oreo Cheesecake Ice Cream",
      details:"Oreo ice cream",
      price:11,
      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    }
  ]
}
