// 7.2 Call Center: Imagine you have a call center with three levels of employees: respondent, manager, and director. An incoming telephone call must be first allocated to a respondent who is free. If the respondent can't handle the call, he or she must escalate the call to a manager. If the manager is not free or not able to handle it, then the call should be escalated to a director. Design the classes and data structures for this problem. Implement a method dispatchCall() which assigns a call to the first available employee.

class CallCenter {
  constructor(employees) {
    this.employees = employees;
  }

  getRespondents() {
    return this.employees.filter((e) => e.level === Employee.RESPONDENT);
  }

  getManagers() {
    return this.employees.filter((e) => e.level === Employee.MANAGER);
  }

  getDirectors() {
    return this.employees.filter((e) => e.level === Employee.DIRECTOR);
  }

  dispatchCall(call) {
    for(let respondent of this.getRespondents()) {
      if(respondent.isBusy()) continue;
      respondent.takeCall(call);
      return true
    }

    for(let manager of this.getManagers()) {
      if(manager.isBusy()) continue;
      manager.takeCall(call);
      return true
    }

    for(let director of this.getDirectors()) {
      if(director.isBusy()) continue;
      director.takeCall(call);
      return true
    }

    return false;
  }
}

class Employee {
  constructor(level = Employee.RESPONDENT) {
    this.busy = false;
    this.level = level;
  }

  isBusy() {
    return this.busy;
  }

  takeCall(call) {
    console.log(this.level, call);
    this.busy = true;
  }
}

Employee.RESPONDENT = Symbol('RESPONDENT');
Employee.MANAGER = Symbol('MANAGER');
Employee.DIRECTOR = Symbol('DIRECTOR');

class Respondent extends Employee {
  constructor() {
    super();
    this.level = Employee.RESPONDENT;
  }
}

class Manager extends Employee {
  constructor() {
    super();
    this.level = Employee.MANAGER;
  }
}

class Director extends Employee {
  constructor() {
    super();
    this.level = Employee.DIRECTOR;
  }
}

const employees = [ new Director(), new Respondent(), new Respondent(), new Respondent()];
const callCenter = new CallCenter(employees);

callCenter.dispatchCall(1);
callCenter.dispatchCall(2);
callCenter.dispatchCall(3);
callCenter.dispatchCall(4);
callCenter.dispatchCall(5);
callCenter.dispatchCall(6);

