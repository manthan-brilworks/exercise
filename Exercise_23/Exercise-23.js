class Stack{
    constructor(){
        this.items=[];
        this.count=0;
    }
    //Pushing item in the stack
    push(item){
        this.items.push(item);
        this.count++;
    }
    //Remove last element from the satck
    pop(){
        if(this.count===0){
            console.log('Stack is empty');
            return;
        }
        else{
            this.items.pop();
            this.count--;
        }
    }
    //Dislpay count of the items
    conut(){
        if(this.count<=0){
            console.log('Stack is empty');
            return;
        }
        console.log(`items count is : ${this.count}`) ;
    }
    //Display Items
    displayItems(){
        if(this.count<=0){
            console.log('Stack is empty');
            return;
        }
        console.log(`Items are : ${this.items}`);
    }
}

const stack= new Stack();
stack.push(5);
stack.push(10);
stack.push(15);
stack.push(20);
stack.displayItems();  //Items are : 5,10,15,20
stack.pop();
stack.displayItems();  //Items are : 5,10,15
stack.conut();         //items count is : 3
