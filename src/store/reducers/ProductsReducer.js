const initState = {
    products:[
        { id:1,name:'man Hose summer season',image:'1.jpg',price:'20£',discount:2,
          discountPrice: 20 - 2 / 100 *20, quantity:1,desc:'.....................'},

          { id:2,name:'man Hose summer season',image:'2.jpg',price:'30£',discount:5,
          discountPrice: 30 - 5 / 100 *30, quantity:1,desc:'.....................'},

          { id:3,name:'man Hose summer season',image:'3.jpg',price:'20£',discount:2,
          discountPrice: 20 - 2 / 100 *20, quantity:1,desc:'.....................'},

          { id:4,name:'Frau Hose summer season',image:'4.jpg',price:'100£',discount:50,
          discountPrice: 100 - 50 / 100 *100, quantity:1,desc:'.....................'},

          { id:5,name:'Frau Hose summer season',image:'6.jpg',price:'70£',discount:5,
          discountPrice: 70 - 5 / 100 *70, quantity:1,desc:'.....................'},

          { id:6,name:'Frau Hose summer season',image:'7.jpg',price:'100£',discount:50,
          discountPrice: 100 - 50 / 100 *100, quantity:1,desc:'.....................'},

          { id:7,name:'Man Hemd summer season',image:'8.jpg',price:'45£',discount:3,
          discountPrice: 45 - 3 / 100 *45, quantity:1,desc:'.....................'},

          { id:8,name:'Man Hemd summer season',image:'9.jpg',price:'15£',discount:5,
          discountPrice: 15 - 5 / 100 *15, quantity:1,desc:'.....................'},

          { id:9,name:'Man Hemd summer season',image:'10.jpg',price:'100£',discount:50,
          discountPrice: 100 - 50 / 100 *100, quantity:1,desc:'.....................'},


          
    ]
}



const ProductReducer = (state=initState,action)=> {
    switch(action.type){
        default:
            return state;
    }


 }
 export default ProductReducer;