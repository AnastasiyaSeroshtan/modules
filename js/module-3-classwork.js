// * Example 1 - Комплексные задачи
// * Напиши скрипт управления личным кабинетом интернет банка. 
// * Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
// */

/*
* Типов транзацкий всего два.
* Можно положить либо снять деньги со счета.
*/
const Transaction = {
   DEPOSIT: 'deposit',
   WITHDRAW: 'withdraw'
};
 
/*
* Каждая транзакция это объект со свойствами: id, type и amount
*/
 
const account = {
   // Текущий баланс счета
   balance: 0,

   // История транзакций
   transactions: [],

   /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
   createTransaction(amount, type) {
       const validTransactionTypes = Object.values(Transaction)
       const isTypeValid = validTransactionTypes.includes(type)
       const amountNumber = Number(amount)

       if (isNaN(amountNumber) || amountNumber < 1) return { error: 'Invalid amount', data: null }
       if (!isTypeValid) return { error: 'Invalid transaction type', data: null } 

       const transaction = {
           type,
           amount: amountNumber,
           id: account.transactions.length + 1
       }

       return { error: null, data: transaction }
   },

   /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
//    deposit(amount) {
//        const { error, data } = account.createTransaction(
//            amount, 
//            Transaction.DEPOSIT
//        )
//        if (error) return `Error: ${error}`

//        account.transactions.push(data)
//        account.balance += data.amount
//    },

   /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
//    withdraw(amount) {
//        if (amount > account.balance) return 'Error: снятие такой суммы не возможно, недостаточно средств'

//        const { error, data } = account.createTransaction(
//            amount, 
//            Transaction.WITHDRAW
//        )
//        if (error) return `Error: ${error}`

//        account.transactions.push(data)

//        account.balance -= data.amount
//    },

   /*
   * Метод возвращает текущий баланс
   */
//    getBalance() {
//        return account.balance
//    },

   /*
   * Метод ищет и возвращает объект транзации по id
   */
//    getTransactionDetails(id) {
//        let transaction = null

//        for (let tr of account.transactions) {
//            if (tr.id === id) {
//                transaction = { ...tr }
//                break
//            }
//        }

//        return transaction
//    },

   /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
//    getTransactionTotal(type) {
//        let sum = 0

//        for (let tr of account.transactions) {
//            if (tr.type === type) {
//                sum += tr.amount
//            }
//        }

//        return sum
//    },
};