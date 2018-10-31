var empage = {}
var employees = require('../apiFunctions/data/employees')
//for clarity   [0]=Emp1=employee1
var employeeTerms = ['@Emp1', '@Emp2', '@Emp3', '@Emp4', '@Emp5', '@Emp6', '@Emp7', '@Emp8', '@Emp9', '@Emp10']
var testFunction2 = require('../test-assets/testFunction2')
var testFunction = require('../test-assets/testFunction')
var testData = require('../test-assets/testData')
var postEmployee = require('../apiFunctions/postEmployee')
module.exports = {
    beforeEach: browser => {
        empage = browser.page.EmpageObjects()
        empage.navigate()
        console.log()
    },

 after: browser => {
     browser.end()
 
 },
  

    'Change Employee1 (Valid)': browser => {
        console.log(employeeTerms[0])
        testFunction(empage, employeeTerms[0], testData.validTerms[0].name, testData.validTerms[0].phone, testData.validTerms[0].title)


    },
    'Change All Employees(Valid)': browser => {
        testData.validTerms.forEach(test => {
            testFunction(empage, test.employeeTerm, test.name, test.phone, test.title)
        })

    },
    'Change Employee1 (Invalid)': browser => {
        console.log(employeeTerms[0])
        testFunction2(empage, employeeTerms[0], testData.invalidTerms[0].name, testData.invalidTerms[0].phone, testData.invalidTerms[0].title)
    },
    'Change All Employees(Invalid)' : browser => {
        testData.invalidTerms.forEach(test => {
            testFunction2(empage, test.employeeTerm, test.name, test.phone, test.title)
        })
      },
    'Add employee': browser => {
        employees.forEach(employee=>{
            postEmployee(EmpageObjects, employee)
        })
        
    }
   
}
