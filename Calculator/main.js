this.flag = 0;                          
this.num1 = ''; 
this.mycal = '';                                
this.myTotal = 0;                               
this.calCount = 0;                              
this.esCal = '';

function setNum(num) {                          
                
	if(this.flag ===1){             
		document.getElementById('display').innerHTML = '';      
		this.flag = 0;  
	}               
	this.num1 = document.getElementById('display').innerHTML += num;                
	console.log('this.num1 = = ' + this.num1 + ' '+ typeof(this.num1));              
}                               
                                
                                
function myCal(cal) {           
	this.flag = 1;                  
	this.calCount++;                                                
	//1回めの数字  
	this.num1 = this.num1*1; //string => numberにする

	if(this.calCount ===1 && (cal !== '=')){ //1個目の数字をmyTotalに代入　1回目の数字にしか使われない 
		this.myTotal = this.num1;             
		this.num1 = 0;  
		this.flag = 1;  
		//console.log(`this.myTotal = ${this.myTotal} this.num1= ${this.num1}` ); 
		console.log('this.myTotal = '+this.myTotal +' this.num1= '+this.num1 ); 
	}                       
													
													
	if (this.calCount>=2){     //2個め以降の数字を計算 25(上の1個めの数字がmyTotalに格納) myTotal(0.25) + 0.25                     
		console.log('2コメ以降の数字this.num1 = '+this.num1);       
		if(cal !== '.'){
			switch(this.mycal) {            
				case '+':
					console.log('1子前は+');       
					this.myTotal += (this.num1*1); 
					console.log('this.Total = '+this.Total);
					this.num1 = ''; 
					this.flag = 1; 
					document.getElementById('display').innerHTML = this.myTotal; 
					break; 
				case '-':                               
					this.myTotal -= (this.num1*1);
					this.num1 = ''; 
					this.flag = 1; 
					console.log('this.flag = '+this.flag); 
					document.getElementById('display').innerHTML = this.myTotal; 
					break; 
				case '*':       
					this.myTotal = this.myTotal * (this.num1*1);
					this.num1 = ''; 
					this.flag = 1; 
					console.log('this.flag = '+this.flag); 
					document.getElementById('display').innerHTML = this.myTotal; 
					break; 
				case '/':       
					this.myTotal = this.myTotal / (this.num1*1);
					this.num1 = ''; 
					this.flag = 1; 
					console.log('this.flag = '+this.flag); 
					document.getElementById('display').innerHTML = this.myTotal; 
					break; 
				// case '.': 
				// 	console.log('1こ前は「.」'); 
				// 	console.log('this.num1 = '+this.num1); 
				// 	this.myTotal = this.num1*1; 
				// 	console.log('this.myTotal = '+this.myTotal);
				// 	this.esCal = cal; 
				// 	this.num1 = ''; 
				// 	this.flag = 1;
				// 	document.getElementById('display').innerHTML = this.myTotal; 
				// 	       //いま入力された演算子を退避 
				// 	break;
				} 
				
			} else {
				this.flag = 0;
				this.num1 = document.getElementById('display').innerHTML = this.num1 + '.';
				console.log(this.mycal);
			}
		}       					
	if (cal !== '='){                  
		this.mycal = cal;       
	} else {
		document.getElementById('display').innerHTML = this.myTotal;
	}               
}

function myDot() {

		if(document.getElementById('display').innerHTML === ''){    //0以下の少数の場合(「空白」+「.」+「数字」の場合) 
			console.log('小数点以下の値です'); 
			this.num1 = document.getElementById('display').innerHTML += '0.'; 
			this.flag = 0;  //this. num1は初期化しないでそのまま入力させる 
		}else { //1以上の少数の場合(「空白」+「.」+「数字」の場合) 
			// console.log('1以上の少数の場合 ' + typeof(this.num1));
			this.num1 = document.getElementById('display').innerHTML = this.num1 + '.'; 
			//this.num1 = document.getElementById('display').innerHTML += cal; 
			this.flag = 0;  //this. num1は初期化しないでそのまま入力させる
		}	
}
function myC () {                               
	this.flag = 0;                  
	this.num1 = '';                 
	this.mycal = '';                        
	this.myTotal = 0;                       
	this.calCount = 0;                      
	document.getElementById('display').innerHTML = '';                      
}      