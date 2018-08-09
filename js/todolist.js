window.onload=function(){
	let arr1=localStorage.arr1?localStorage.arr1.split(','):[];
	let arr2=localStorage.arr2?localStorage.arr2.split(','):[];
	let section1=document.querySelector('.section1');
	let section2=document.querySelector('.section2');
	let sectionBottomBox=document.querySelector('.sectionBottomBox');
	let sectionBottomBox2=document.querySelector('.sectionBottomBox2');
	let span=document.querySelector('.section1 span');
	let span2=document.querySelector('.section2 span');
	function update(){
		localStorage.arr1=arr1.join(',');
		span.innerText=arr1.length;
		sectionBottomBox.innerText='';
		arr1.forEach(function(elements,index){
			let sectionBottom=document.createElement('div');
			sectionBottom.className='sectionBottom';
			sectionBottomBox.appendChild(sectionBottom);
			let checkbox=document.createElement('input');
			checkbox.className='checkbox';
			checkbox.onclick=function(){
				arr1.splice(index,1);
				arr2.unshift(elements);
				update();
			}
			checkbox.type='checkbox';
			sectionBottom.appendChild(checkbox);
			let con=document.createElement('input');
			con.className='con';
				con.onkeydown=function(e){
					if(e.keyCode==13&&con.value!=''){
						arr1[index]=con.value;
						update();
					}
				}
				con.onblur=function(){
					if(con.value!=''){
						arr1[index]=con.value;
						update();
					}
				}
			sectionBottom.appendChild(con);
			let dele=document.createElement('div');
			dele.className='dele';
			dele.onclick=function(){
				arr1.splice(index,1);
				update();
			}
			sectionBottom.appendChild(dele);
			con.value=elements;
		})
		localStorage.arr2=arr2.join(',');
		sectionBottomBox2.innerText='';
		span2.innerText=arr2.length;
		arr2.forEach(function(elements,index){
			let sectionBottom=document.createElement('div');
			sectionBottom.className='sectionBottom';
			sectionBottomBox2.appendChild(sectionBottom);
			let checkbox=document.createElement('input');
			checkbox.className='checkbox';
			checkbox.onclick=function(){
				arr2.splice(index,1);
				arr1.unshift(elements);
				update();
			}
			checkbox.type='checkbox';
			checkbox.checked='checked';
			sectionBottom.appendChild(checkbox);
			let con=document.createElement('input');
			con.className='con';
				con.onkeydown=function(e){
					if(e.keyCode==13&&con.value!=''){
						arr2[index]=con.value;
						update();
					}
				}
				con.onblur=function(){
					if(con.value!=''){
						arr2[index]=con.value;
						update();
					}
				}
			sectionBottom.appendChild(con);
			let dele=document.createElement('div');
			dele.className='dele';
			dele.onclick=function(){
				arr2.splice(index,1);
				update();
			}
			sectionBottom.appendChild(dele);
			con.value=elements;
		})

	}


	let text=document.querySelector('#text');
	text.onkeydown=function(e){
		if(e.keyCode==13 && text.value!=''){
			arr1.unshift(text.value);
			text.value='';
			update();
		}
	}

	update();
}