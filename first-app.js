/*
const fs = require('fs');

fs.writeFileSync('안녕.txt','hello from Nod.js') //파일 생성하는 메서드 '인수는 파일이름,파일내용,혹은 옵션 호출이 반복되면 덮어씌워짐'



const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
console.log(1);
console.log(2);
setTimeout(()=>{console.log(3);},3000);
console.log(4);



const promise = new Promise((resolve,reject)=>{
  console.log('네트워크통신중....');
  setTimeout(()=>{
    //resolve('네트워크 통신성공!')
    reject(new Error('네트워크 통신이 원활하지 않습니다'))
  },2000)
});
promise
  .then(value=>{console.log(value);})
  .catch(error=>{console.log(error);})
  .finally(()=>{console.log('finally는 성공하든 아니든 실행된다구!');})

const fetchNumber=new Promise((resolve,reject)=>{
  setTimeout(()=>resolve(1),1000);
})

fetchNumber
  .then(num=>num*2)
  .then(num=>num*3)
  .then(num=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(num - 1)
        console.log(num);
      },1000)
    })
  })
  .then(num=>{console.log(num);})
*/


const price = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(10000)
  },1000)
})

const discountCoupon = pee =>
  new Promise((resolve,reject)=>{
    setTimeout(()=>{
      reject(new Error(`error! 쿠폰이 없습니다`))
      //resolve(`${pee-pee*0.1}`)/*  */
  },1000)
})
const discountSavingPoint = finallPee => 
  new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(`최종금액은${finallPee-2000}원 입니다`)
    })
  },1000)

price
  .then(discountCoupon)
  .catch(error=>{
    return price
  })
  .then(discountSavingPoint)
  .then(console.log)
  .catch(console.log);
 



