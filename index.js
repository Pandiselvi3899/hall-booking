const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
app.use(express.json());
const PORT=process.env.PORT||9000;
let halls=[{
    name:"normal hall",
    seats:70,
    price:30000,
    hallid:1,
    amenties:"Fans,Bright Lights",
    customerdetails:[{
        customerName: "Selvi",
        date: new Date("2021-11-23"),
        start: "09:00 AM",
        end: "12:30 PM",
        status: "confirmed",
      }]
},{
    name:"AC Hall",
    seats:100,
    price:50000,
    amenties:"AC,Bright Lights,Projectors",
    hallid:2,
    customerdetails:[{
        customerName: "Prakash",
        date: new Date("2021-11-27"),
        start: "06:00 AM",
        end: "09:30 PM",
        status: "confirmed",
      }]
},
{
    name:"Premium Hall",
    seats:120,
    price:70000,
    amenties:"Fans,Bright Lights,AC,Screen<projector,WIFI,Parking",
    hallid:3,
    customerdetails:[{
        customerName: "Maara",
        date: new Date("2021-11-30"),
        start: "09:00 AM",
        end: ":06:30 PM",
        status: "confirmed",
      }]
}
]
app.post('/createandbookhall',(req,res)=>{
    halls.push({
        
            name:req.body.name,
            seats:req.body.seats,
            price:req.body.price,
            amenties:req.body.amenties,
            hallid:req.body.hallid,
            customerdetails:[{
                customerName: req.body.customerdetails.customerName,
                date: req.body.customerdetails.date,
                start: req.body.customerdetails.start,
                end: req.body.customerdetails.end,
                status: req.body.customerdetails.status,
              }]
    
    })
})
app.get('/listcustomers',(req,res)=>{
    let customers=[];
    halls.forEach((hall)=>{
         let customerdet={name:hall.name}
         hall.customerdetails.forEach((customer)=>{
              customerdet.customerName=customer.customerName;
              customerdet.date=customer.date;
              customerdet.start=customer.start;
              customerdet.end=customer.end;
         })
   customers.push(customerdet)
   
        })
        res.send(customers)
})
app.get('/halls',(req,res)=>{
    res.send(halls)
})

app.listen(PORT,()=>{
    console.log("server running ")
})