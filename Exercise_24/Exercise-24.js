function Stack(){}

const st={
        items:[],
        count:0,
    
    //Pushing item in the stack
    push(item){
        this.items.push(item);
        this.count++;
    },
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
    },
    //Dislpay count of the items
    conut(){
        if(this.count<=0){
            console.log('Stack is empty');
            return;
        }
        console.log(`items count is : ${this.count}`) ;
    },
    //Display Items
    displayItems(){
        if(this.count<=0){
            console.log('Stack is empty');
            return;
        }
        console.log(`Items are : ${this.items}`);
    }
}

st.prototype=Object.create(Stack.prototype);
st.prototype.constructor=st;
st.push(5);
st.push(10);
st.push(15);
st.push(20);
st.displayItems();  //Items are : 5,10,15,20
st.pop();
st.displayItems();  //Items are : 5,10,15
st.conut();         //items count is : 3
