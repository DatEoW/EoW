class Itemspsc{
    constructor(id,viewed,year,day,name,img){
        this.id = id;
        this.viewed=viewed;
        this.year=year;
        this.day=day;
        this.name = name;
        this.img=img;
        
    }
    show(handle){
        // var div = document.createElement('div');
        // div.setAttribute('class','card');
        // div.setAttribute('style','background-color:red');
        // div.setAttribute('style','float:left');
        
        // var img = document.createElement('img');
        // img.setAttribute('src',"images/" + this.photo);
        // img.setAttribute('alt','');
        // img.setAttribute('width','300px');
        // img.setAttribute('height','250');
        // img.setAttribute('style','padding-top:10px');
      
       
        // var h1 = document.createElement('h1')
        // var h1Text = document.createTextNode(this.name);
        // h1.appendChild(h1Text);
        // var pPrice = document.createElement('p');
        // pPrice.setAttribute('class','price');
        // pPrice.setAttribute('style','color:red');
       

        // var pText =document.createTextNode("$" + this.price);
        // pPrice.appendChild(pText);

        // var poder = document.createElement('p');
        // var button = document.createElement('button');
        // var buttonText = document.createTextNode('Mua Tướng');
        // button.appendChild(buttonText);
        
        // div.appendChild(img);
        // div.appendChild(h1);
        // div.appendChild(pPrice);
        // div.appendChild(poder);
        // div.appendChild(button);
        // handle.appendChild(div);
        var div=document.createElement('div');
        div.setAttribute('class','psc-items');
        div.setAttribute('id',this.id);
        var a1=document.createElement('a');
        var a2=document.createElement('a');
        a1.setAttribute('href','#');
        a2.setAttribute('href','#');
        a1.setAttribute('class','psc-a');
        var viewed=document.createElement('span');
        var viewedText=document.createTextNode(this.viewed);
        viewed.appendChild(viewedText);
        viewed.setAttribute('class','psc-viewed');
        var year=document.createElement('span');
        var yearText=document.createTextNode(this.year);
        year.appendChild(yearText);
        year.setAttribute('class','psc-year');
        var day=document.createElement('span');
        var dayText=document.createTextNode(this.day);
        day.appendChild(dayText);
        day.setAttribute('class','psc-day');
        var name=document.createElement('div');
        var nameText=document.createTextNode(this.name);
        name.appendChild(nameText);
        name.setAttribute('class','psc-name');
        var img=document.createElement("img");
        img.setAttribute('src','../img/'+this.img)
        img.setAttribute('class','psc-img');
        img.setAttribute('alt',this.name);
        img.setAttribute('width','160');
        img.setAttribute('height','230');
        a1.appendChild(div);
        a2.appendChild(name);
        div.appendChild(viewed);
        div.appendChild(year);
        div.appendChild(day);
        
        div.appendChild(img);
        div.appendChild(a2);
        handle.appendChild(a1);

    }
    
}