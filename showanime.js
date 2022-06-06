class Itemsanime{
    constructor(id,viewed,tap,year,name,img){
        this.id=id;
        this.viewed=viewed;
        this.tap=tap;
        this.year=year;
        this.name=name;
        this.img=img;
    }
    show(anime){
        var div=document.createElement('div');
        div.setAttribute('class','anime-items');
        div.setAttribute('id',this.id);
        var a1=document.createElement('a');
        var a2=document.createElement('a');
        a1.setAttribute('href','#');
        a2.setAttribute('href','#');
        a1.setAttribute('class','anime-a');
        var viewed=document.createElement('span');
        var viewedText=document.createTextNode(this.viewed);
        viewed.appendChild(viewedText);
        viewed.setAttribute('class','anime-viewed');
        var year=document.createElement('span');
        var yearText=document.createTextNode(this.year);
        year.appendChild(yearText);
        year.setAttribute('class','anime-year');
        var tap=document.createElement('span');
        var tapText=document.createTextNode(this.tap);
        tap.appendChild(tapText);
        tap.setAttribute('class','anime-tap');
        var name=document.createElement('div');
        var nameText=document.createTextNode(this.name);
        name.appendChild(nameText);
        name.setAttribute('class','anime-name');
        var img=document.createElement("img");
        img.setAttribute('src','../img/'+this.img)
        img.setAttribute('class','anime-img');
        img.setAttribute('alt',this.name);
        img.setAttribute('width','160');
        img.setAttribute('height','230');
        a1.appendChild(div);
        a2.appendChild(name);
        div.appendChild(viewed);
        div.appendChild(year);
        div.appendChild(tap);
        div.appendChild(img);
        div.appendChild(a2);
        anime.appendChild(a1);
    }
}
    
