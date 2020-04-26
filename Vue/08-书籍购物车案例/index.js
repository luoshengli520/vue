const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1
                ,name: '<<傻逼自我修养I>>'
                ,date: '2020/4/25'
                ,price: 10.00
                ,count: 1
            }
            ,{
                id: 2
                ,name: '<<傻逼自我修养II>>'
                ,date: '2020/4/25'
                ,price: 20.00
                ,count: 1
            }
            ,{
                id: 3
                ,name: '<<傻逼自我修养III>>'
                ,date: '2020/4/25'
                ,price: 30.00
                ,count: 1
            }
        ]
    }
    ,methods: {
        add (index) {
            this.books[index].count++;
        }
        ,subtract (index) {
            this.books[index].count--;
        }
        ,removeBook (index) {
            this.books.splice(index,1);
        }
    }
    // 过滤器
    ,filters: {
        filterPrice (price) {
            return '￥' + price.toFixed(2)
        }
    }
    ,computed: {
        sumBookPrice () {
            // 类似 java 中的 stream 流的操作
            // var ts = this.books.filter(i => i.count > 1);
            // console.log(ts);

            // 常规方式汇总
            /*let sum = 0;
            for (let book of this.books) {
                console.log(book)
                sum += book.price;
            }
            return sum;*/

            // reduce 汇总函数 类似 java stream 的操作
            return this.books.reduce((previous,current) => previous + current.price , 0);

        }
    }
})

// 编程范式：命令式/声明式
// 编程范式：面向对象（第一公民：对象）/函数式（第一公民：函数）